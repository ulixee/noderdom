import * as Types from './Types';
import { arrayToMap, integerTypes, compareName, toIType } from './utils';
import Printer from './Printer';
import Components from './Components';
import TypeUtils from './TypeUtils';
import IDomType from './interfaces/IDomType';
import IBuildType, { BuildType } from './interfaces/IBuildType';

interface IOptions {
  domType: IDomType;
  buildType: IBuildType;
  skipImplementation?: boolean;
}

interface IDeclarationMethod {
  name: string;
  definition: string;
}

export default class TsIteratorExtractor {
  public readonly methodNames: string[] = [];
  private readonly i: Types.Interface;
  private readonly hasForEach: boolean;
  private readonly sequenceMethods: Types.Method[];
  private readonly declarationMethods: IDeclarationMethod[] = [];
  private readonly printer: Printer = new Printer();
  private readonly components: Components;
  private readonly sequenceTypedefMap: Record<string, Types.TypeDef>;
  private readonly skipImplementation: boolean;
  private readonly buildType: IBuildType;

  constructor(i: Types.Interface, components: Components, options: IOptions) {
    this.i = i;
    this.components = components;
    this.skipImplementation = options.skipImplementation || false;
    this.buildType = options.buildType;

    const sequenceTypedefs = (this.components.typedefs || [])
      .filter(typedef => Array.isArray(typedef.type))
      .map(typedef => ({ ...typedef, type: (typedef.type as Types.Typed[]).filter(t => t.type === 'sequence') }))
      .filter(typedef => typedef.type.length);

    this.sequenceTypedefMap = arrayToMap(
      sequenceTypedefs,
      t => t.newType,
      t => t,
    );

    this.hasForEach = !!i.iterator;

    this.sequenceMethods = Object.values(i.methods ? i.methods : {})
      .filter(m => m.signatures)
      .map(m => ({
        ...m,
        signatures: this.replaceTypedefsInSignatures(m.signatures.filter(s => this.hasSequenceArgument(s))),
      }))
      .filter(m => m.signatures.length)
      .sort(compareName);

    const subtypes = this.getIteratorSubtypes();
    if (subtypes && i.iterator && i.iterator.kind === 'iterable') {
      let [keyType, valueType] = subtypes;
      if (!valueType) {
        valueType = keyType;
        keyType = 'number';
      }

      this.declarationMethods = [
        {
          name: 'entries',
          definition: `Promise<IterableIterator<[${keyType}, ${valueType}]>>`,
        },
        {
          name: 'keys',
          definition: `Promise<IterableIterator<${keyType}>>`,
        },
        {
          name: 'values',
          definition: `Promise<IterableIterator<${valueType}>>`,
        },
      ];
    }

    this.methodNames.push(...this.declarationMethods.map(m => m.name));
    this.methodNames.push(...this.sequenceMethods.map(m => m.name));
    if (this.hasForEach) this.methodNames.push('forEach');
  }

  public hasIterable() {
    if (
      this.hasEnabledPropsOrMethods() &&
      (this.methodNames.length || this.hasIterableIterator() || this.extendsHtmlCollection())
    ) {
      return true;
    }
    return false;
  }

  public getIteratableInterface() {
    const subtypes = this.getIteratorSubtypes();
    if (!subtypes) return '';
    return this.stringifySingleOrTupleTypes(subtypes);
  }

  public getIteratorInitializer(handlerName: string) {
    const iteratorType = this.getIteratableInterface();
    if (!iteratorType) return '';

    const i: Types.Interface = this.i;
    const iType = toIType(i.name);
    const name = i.typeParameters ? `${iType}<${i.typeParameters!.map(p => p.name).join(', ')}>` : iType;
    return `export const awaitedIterator = new AwaitedIterator<${name}, ${iteratorType}>(getState, ${handlerName});`;
  }

  public run(printMethod: (m: Types.Method) => void) {
    if (!this.hasEnabledPropsOrMethods()) return;

    if (this.hasForEach) {
      this.printIteratorForEach();
    }

    this.sequenceMethods.forEach(m => printMethod(m));
    this.declarationMethods.forEach(m => this.printDeclarationMethod(m));

    this.printIterableIterator();

    return this.printer.getResult().trim();
  }

  private extendsHtmlCollection() {
    return (
      this.i.extends === 'HTMLCollectionBaseIsolate' ||
      (this.i.implements && this.i.implements.includes('HTMLCollectionBaseIsolate'))
    );
  }
  private hasEnabledPropsOrMethods() {
    // these next three lines are a hack since customizer UI doesn't allow turning off iterators.
    const hasEnabledMethods = Object.values(this.i.methods).length;
    const hasEnabledProperties = Object.values(this.i.methods).length;
    if (!hasEnabledProperties && !hasEnabledMethods) return false;
    return true;
  }

  private hasIterableIterator() {
    const subtypes = this.getIteratorSubtypes();
    if (!subtypes || this.getIteratorExtends(subtypes)) return false;
    return true;
  }

  private printIterableIterator() {
    if (!this.hasIterableIterator()) return;

    const subtypes = this.getIteratorSubtypes();
    const iteratorType = this.stringifySingleOrTupleTypes(subtypes as string[]);

    const returnType = `IterableIterator<${iteratorType}>`;
    if (this.skipImplementation) {
      this.printer.printLine(`[Symbol.iterator](): ${returnType};`);
    } else {
      this.printer.printSeparatorLine();
      this.printer.printLine(`public [Symbol.iterator](): ${returnType} {`);
      if (this.buildType === BuildType.base) {
        this.printer.printLine(`  return awaitedIterator.iterateAttachedNodeIds(this)[Symbol.iterator]();`);
      } else {
        this.printer.printLine(`  // implementation required`);
      }
      this.printer.printLine('}');
    }
  }

  private printIteratorForEach() {
    const i: Types.Interface = this.i;
    const subtype = i.iterator!.type.map(o => TypeUtils.convertDomTypeToTsType(o, true));
    const value = subtype[subtype.length - 1];
    const key = subtype.length > 1 ? subtype[0] : i.iterator!.kind === 'iterable' ? 'number' : value;
    const iType = toIType(i.name);
    const name = i.typeParameters ? `${iType}<${i.typeParameters!.map(p => p.name).join(', ')}>` : iType;
    const args = `value: ${value}, key: ${key}, parent: ${name}`;
    if (this.skipImplementation) {
      this.printer.printLine(`forEach(callbackfn: (${args}) => void, thisArg?: any): Promise<void>;`);
    } else {
      this.printer.printSeparatorLine();
      this.printer.printLine(`public async forEach(callbackfn: (${args}) => void, thisArg?: any): Promise<void> {`);
      if (this.buildType === BuildType.base) {
        this.printer.increaseIndent();
        this.printer.printLine(`const array = await awaitedIterator.toArray(this);`);
        this.printer.printLine(`for (let i = 0; i < array.length; i += 1) {`);
        this.printer.printLine(`  callbackfn.call(thisArg, array[i], i, this);`);
        this.printer.printLine('}');
        this.printer.decreaseIndent();
      } else {
        this.printer.printLine(`  // implementation required`);
      }
      this.printer.printLine('}');
    }
  }

  private isIterableGetter(m: Types.AnonymousMethod) {
    return (
      m.getter === 1 &&
      !!m.signatures.length &&
      !!m.signatures[0].params &&
      m.signatures[0].params!.length === 1 &&
      typeof m.signatures[0].params![0].type === 'string' &&
      integerTypes.has(m.signatures[0].params![0].type as string)
    );
  }

  private findIterableGetter() {
    const i: Types.Interface = this.i;
    const anonymousMethods = i.anonymousMethods ? i.anonymousMethods : [];
    const anonymousGetter = anonymousMethods.find(m => this.isIterableGetter(m));

    if (anonymousGetter) return anonymousGetter;
    if (i.methods) return Object.values(i.methods).find(m => this.isIterableGetter(m));
    return undefined;
  }

  private findLengthProperty(i: Types.Interface | undefined) {
    const p = i && i.properties && i.properties.length;
    return p && p.name === 'length' && typeof p.type === 'string' && integerTypes.has(p.type);
  }

  private getIteratorSubtypes() {
    const i: Types.Interface = this.i;
    if (i.iterator) {
      if (i.iterator.type.length === 1) {
        return [TypeUtils.convertDomTypeToTsType(i.iterator.type[0], true)];
      }
      return i.iterator.type.map(t => TypeUtils.convertDomTypeToTsType(t, true));
    }
    if (i.name !== 'Window') {
      const iterableGetter = this.findIterableGetter();
      const lengthProperty =
        this.findLengthProperty(i) || this.findLengthProperty(this.components.allInterfacesMap[i.extends]);
      if (iterableGetter && lengthProperty) {
        return [TypeUtils.convertDomTypeToTsType({ type: iterableGetter.signatures[0].type }, true)];
      }
      if (this.extendsHtmlCollection()) {
        return ['ISuperElement'];
      }
    }
  }

  private stringifySingleOrTupleTypes(types: string[]) {
    if (types.length === 1) {
      return types[0];
    }
    return `[${types.join(', ')}]`;
  }

  private printDeclarationMethod(m: IDeclarationMethod) {
    if (this.skipImplementation) {
      this.printer.printLine(`${m.name}(): ${m.definition};`);
    } else {
      this.printer.printSeparatorLine();
      this.printer.printLine(`public ${m.name}(): ${m.definition} {`);
      if (this.buildType === BuildType.base) {
        this.printer.printLine(`  return awaitedIterator.toArray(this).then(x => x.${m.name}());`);
      } else {
        this.printer.printLine(`  // implementation required`);
      }
      this.printer.printLine('}');
    }
  }

  private getIteratorExtends(subtypes?: string[]) {
    const iterator = this.i.iterator;
    if (!iterator || !subtypes) {
      return '';
    }
    const base =
      iterator.kind === 'maplike'
        ? `Map<${subtypes[0]}, ${subtypes[1]}>`
        : iterator.kind === 'setlike'
        ? `Set<${subtypes[0]}>`
        : undefined;
    if (!base) {
      return '';
    }
    const result = iterator.readonly ? `Readonly${base}` : base;
    return `extends ${result} `;
  }

  private typeIncludesSequence(type: string | Types.Typed[]): boolean {
    if (Array.isArray(type)) {
      return type.some(t => this.typeIncludesSequence(t.type));
    }
    return type === 'sequence' || !!this.sequenceTypedefMap[type];
  }

  private hasSequenceArgument(s: Types.Signature) {
    return !!s.params && s.params.some(p => this.typeIncludesSequence(p.type));
  }

  private replaceTypedefsInSignatures(signatures: Types.Signature[]): Types.Signature[] {
    return signatures.map(s => {
      const params = s.params!.map(p => {
        const typedef = typeof p.type === 'string' ? this.sequenceTypedefMap[p.type] : undefined;
        if (!typedef) {
          return p;
        }
        return { ...p, type: typedef.type };
      });
      return { ...s, param: params };
    });
  }
}
