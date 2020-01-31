import * as Types from './types';
import { arrayToMap, integerTypes, compareName, toIType } from './utils';
import Printer from './Printer';
import Components from './Components';
import Helpers from './Helpers';

interface IOptions {
  isWithinClass?: boolean;
}

export default class TsIteratorExtractor {
  private readonly printer: Printer = new Printer();
  private readonly components: Components;
  private readonly i: Types.Interface;
  private readonly sequenceTypedefMap: Record<string, Types.TypeDef>;
  private readonly isWithinClass: boolean;
  private readonly helpers: Helpers;

  constructor(components: Components, i: Types.Interface, { isWithinClass }: IOptions = {}) {
    this.components = components;
    this.i = i;
    this.isWithinClass = isWithinClass || false;
    this.helpers = new Helpers(components, this.printer, i, { isWithinClass });

    const sequenceTypedefs = this.components.typedefs
      ? this.components.typedefs
          .filter(typedef => Array.isArray(typedef.type))
          .map(typedef => ({ ...typedef, type: (typedef.type as Types.Typed[]).filter(t => t.type === 'sequence') }))
          .filter(typedef => typedef.type.length)
      : [];

    this.sequenceTypedefMap = arrayToMap(
      sequenceTypedefs,
      t => t['new-type'],
      t => t,
    );
  }

  public run() {
    const i: Types.Interface = this.i;
    const subtypes = this.getIteratorSubtypes();
    const methodsWithSequence: Types.Method[] = Object.values(i.methods ? i.methods.method : {})
      .filter(m => m.signature)
      .map(m => ({
        ...m,
        signature: this.replaceTypedefsInSignatures(m.signature.filter(s => this.hasSequenceArgument(s))),
      }))
      .filter(m => m.signature.length)
      .sort(compareName);

    this.printIteratorForEach();
    if (subtypes || methodsWithSequence.length) {
      const iteratorExtends = this.getIteratorExtends(i.iterator, subtypes);
      methodsWithSequence.forEach(m => this.helpers.printMethod(m));

      if (i.iterator && i.iterator.kind === 'iterable' && subtypes) {
        this.emitIterableDeclarationMethods(subtypes);
      }
      if (subtypes && !iteratorExtends) {
        this.printIterableIterator(subtypes);
      }
    }
    return this.printer.getResult().trim();
  }

  private printIterableIterator(subtypes: string[]) {
    const returnType = `IterableIterator<${this.stringifySingleOrTupleTypes(subtypes)}>`;
    if (this.isWithinClass) {
      this.printer.printSeparatorLine();
      this.printer.print('public ');
    }
    this.printer.print(`[Symbol.iterator](): ${returnType}`);
    if (this.isWithinClass) {
      this.printer.endLine(' {');
      this.printer.printLine(
        `  return InternalHandler.run<${this.iClass}, ${returnType}>(this, '[Symbol.iterator]', []);`,
      );
      this.printer.printLine('}');
    } else {
      this.printer.endLine(';');
    }
  }

  private printIteratorForEach() {
    const i: Types.Interface = this.i;
    if (!i.iterator) return;

    const typeParam = i['type-parameters'] && i['type-parameters'] ? i['type-parameters'][0] : null;
    const extendedType = typeParam && typeParam.extends ? typeParam.name : null;
    const subtype = i.iterator.type.map(o => this.components.convertDomTypeToTsType(o));
    const lastSubtype = subtype[subtype.length - 1];
    const value = lastSubtype === extendedType ? lastSubtype : toIType(lastSubtype);
    const key = subtype.length > 1 ? subtype[0] : i.iterator.kind === 'iterable' ? 'number' : value;
    const name = i['type-parameters']
      ? `${toIType(i.name)}<${i['type-parameters']!.map(p => p.name).join(', ')}>`
      : toIType(i.name);
    if (this.isWithinClass) {
      this.printer.printSeparatorLine();
      this.printer.print('public ');
    }
    this.printer.print(
      `forEach(callbackfn: (value: ${value}, key: ${key}, parent: ${name}) => void, thisArg?: any): void`,
    );
    if (this.isWithinClass) {
      this.printer.endLine(' {')
      this.printer.printLine(`  InternalHandler.run<${this.iClass}, void>(this, 'forEach', [callbackfn, thisArg]);`);
      this.printer.printLine('}');
    } else {
      this.printer.endLine(';');
    }
  }

  private isIterableGetter(m: Types.AnonymousMethod) {
    return (
      m.getter === 1 &&
      !!m.signature.length &&
      !!m.signature[0].param &&
      m.signature[0].param!.length === 1 &&
      typeof m.signature[0].param![0].type === 'string' &&
      integerTypes.has(m.signature[0].param![0].type as string)
    );
  }

  private findIterableGetter() {
    const i: Types.Interface = this.i;
    const anonymousMethods = i['anonymous-methods'] ? i['anonymous-methods']!.method : [];
    const anonymousGetter = anonymousMethods.find(m => this.isIterableGetter(m));

    if (anonymousGetter) return anonymousGetter;
    if (i.methods) return Object.values(i.methods.method).find(m => this.isIterableGetter(m));
    return undefined;
  }

  private findLengthProperty(i: Types.Interface | undefined) {
    const p = i && i.properties && i.properties.property.length;
    return p && p.name === 'length' && typeof p.type === 'string' && integerTypes.has(p.type);
  }

  private getIteratorSubtypes() {
    const i: Types.Interface = this.i;
    if (i.iterator) {
      if (i.iterator.type.length === 1) {
        return [this.components.convertDomTypeToTsType(i.iterator.type[0], true)];
      }
      return i.iterator.type.map(t => this.components.convertDomTypeToTsType(t, true));
    }
    if (i.name !== 'Window') {
      const iterableGetter = this.findIterableGetter();
      const lengthProperty =
        this.findLengthProperty(i) || this.findLengthProperty(this.components.allInterfacesMap[i.extends]);
      if (iterableGetter && lengthProperty) {
        return [this.components.convertDomTypeToTsType({ type: iterableGetter.signature[0].type }, true)];
      }
    }
  }

  private stringifySingleOrTupleTypes(types: string[]) {
    if (types.length === 1) {
      return types[0];
    }
    return `[${types.join(', ')}]`;
  }

  private emitIterableDeclarationMethods(subtypes: string[]) {
    const i: Types.Interface = this.i;

    let [keyType, valueType] = subtypes;
    if (!valueType) {
      valueType = keyType;
      keyType = 'number';
    }

    const methods = [
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

    const comments = i.iterator && i.iterator.comments && i.iterator.comments.comment;

    methods.forEach(m => {
      if (comments && comments[m.name]) {
        comments[m.name].split('\n').forEach(this.printer.printLine);
      }
      if (this.isWithinClass) {
        this.printer.printSeparatorLine();
        this.printer.print('public ');
      }
      this.printer.print(`${m.name}(): ${m.definition}`);
      if (this.isWithinClass) {
        this.printer.printLine(' {');
        this.printer.printLine(`  return InternalHandler.run<${this.iClass}, ${m.definition}>(this, '${m.name}', []);`);
        this.printer.printLine('}');
      } else {
        this.printer.endLine(';');
      }
    });
  }

  private get iClass() {
    const i: Types.Interface = this.i;
    const iType = toIType(i.name);
    if (i['type-parameters'] && i['type-parameters'][0]) {
      return `${iType}<${i['type-parameters'][0].name}>`;
    }
    return iType;
  }

  private getIteratorExtends(iterator?: Types.Iterator, subtypes?: string[]) {
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
    return !!s.param && s.param.some(p => this.typeIncludesSequence(p.type));
  }

  private replaceTypedefsInSignatures(signatures: Types.Signature[]): Types.Signature[] {
    return signatures.map(s => {
      const params = s.param!.map(p => {
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
