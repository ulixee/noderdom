import * as Types from './Types';
import { arrayToMap, integerTypes, compareName, toIType } from './utils';
import Printer from './Printer';
import Components from './Components';
import TypeUtils from './TypeUtils';
import IBuildType from './interfaces/IBuildType';

interface IOptions {
  buildType: IBuildType;
  skipImplementation?: boolean;
}

interface IDeclarationMethod {
  name: string;
  definition: string;
}

export default class TsIteratorExtractor {
  public readonly methodNames: string[] = [];
  private readonly hasForEach: boolean;
  private readonly sequenceMethods: Types.Method[];
  private readonly declarationMethods: IDeclarationMethod[] = [];
  private readonly i: Types.Interface;
  private readonly printer: Printer = new Printer();
  private readonly components: Components;
  private readonly sequenceTypedefMap: Record<string, Types.TypeDef>;
  private readonly skipImplementation: boolean;
  private readonly handler: string;

  constructor(i: Types.Interface, components: Components, options: IOptions) {
    this.i = i;
    this.components = components;
    this.skipImplementation = options.skipImplementation || false;
    this.handler = `${options.buildType}Handler`;

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
          definition: `IterableIterator<[${keyType}, ${valueType}]>`,
        },
        {
          name: 'keys',
          definition: `IterableIterator<${keyType}>`,
        },
        {
          name: 'values',
          definition: `IterableIterator<${valueType}>`,
        },
      ];
    }

    this.methodNames.push(...this.declarationMethods.map(m => m.name));
    this.methodNames.push(...this.sequenceMethods.map(m => m.name));
    if (this.hasForEach) this.methodNames.push('forEach');
  }

  public run(printMethod: (m: Types.Method) => void) {
    if (this.hasForEach) {
      this.printIteratorForEach();
    }

    this.sequenceMethods.forEach(m => printMethod(m));
    this.declarationMethods.forEach(m => this.printDeclarationMethod(m));

    this.printIterableIterator();

    return this.printer.getResult().trim();
  }

  private printIterableIterator() {
    const subtypes = this.getIteratorSubtypes();
    if (!subtypes || this.getIteratorExtends(subtypes)) return;

    const returnType = `IterableIterator<${this.stringifySingleOrTupleTypes(subtypes)}>`;
    if (this.skipImplementation) {
      this.printer.printLine(`[Symbol.iterator](): ${returnType};`);
    } else {
      this.printer.printSeparatorLine();
      this.printer.printLine(`public [Symbol.iterator](): ${returnType} {`);
      this.printer.printLine(`  return ${this.handler}.runMethod<${returnType}>(this, '[Symbol.iterator]', []);`);
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
      this.printer.printLine(`forEach(callbackfn: (${args}) => void, thisArg?: any): void;`);
    } else {
      this.printer.printSeparatorLine();
      this.printer.printLine(`public forEach(callbackfn: (${args}) => void, thisArg?: any): void {`);
      this.printer.printLine(`  ${this.handler}.runMethod<void>(this, 'forEach', [callbackfn, thisArg]);`);
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
      this.printer.printLine(`  return ${this.handler}.runMethod<${m.definition}>(this, '${m.name}', []);`);
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
