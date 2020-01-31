import * as Types from './types';
import Printer from './Printer';
import Components from './Components';
import { compareName, isEventHandler, makeNullable, map, distinct, nameWithForwardedTypes, toIType } from './utils';
import TsIteratorExtractor from './TsIteratorExtractor';
import Helpers from './Helpers';

export default class TsClasslike {
  public readonly properties: Types.Property[] = [];
  public readonly readonlyProperties: Types.Property[] = [];
  public readonly hasProperties: boolean;
  public readonly hasMethods: boolean;
  public readonly hasIndexers: boolean;
  public interfacesToImport: Set<string> = new Set();
  private readonly printer: Printer;
  private readonly components: Components;
  private readonly i: Types.Interface;
  private readonly indexers: Types.AnonymousMethod[];
  private readonly helpers: Helpers;

  constructor(components: Components, printer: Printer, i: Types.Interface) {
    this.components = components;
    this.printer = printer;
    this.i = i;
    this.helpers = new Helpers(components, printer, i, { isWithinClass: true });

    if (i.properties) {
      this.properties = Object.values(i.properties.property)
        .filter(p => !this.components.isCovariantEventHandler(i, p))
        .sort(compareName);
      this.readonlyProperties = this.properties.filter(p => p['read-only']);
    }

    this.indexers = Object.values<Types.AnonymousMethod>(i.methods && i.methods.method)
      .concat((i['anonymous-methods'] && i['anonymous-methods']!.method) || [])
      .filter(m => {
        if (!this.shouldEmitIndexerSignature(m)) return false;
        return m.signature && m.signature.length && m.signature[0].param && m.signature[0].param!.length
          ? m.signature[0].param![0]
          : undefined;
      });

    this.hasProperties = !!(i.properties && Object.keys(i.properties.property).length);
    this.hasMethods = !!(i.methods && Object.keys(i.methods.method).length);
    this.hasIndexers = !!this.indexers.length;
  }

  public usesInternalHandler() {
    return this.helpers.usesInternalHandler || this.hasProperties || this.hasMethods;
  }

  public printBody(injectorFns: { afterConstants?: () => void } = {}) {
    const i: Types.Interface = this.i;
    if (i.constants && Object.keys(i.constants.constant).length) {
      this.printConstants(true);
      this.printer.printSeparatorLine();
      this.printConstants();
    }

    if (injectorFns.afterConstants) injectorFns.afterConstants();

    if (this.hasProperties) {
      const requiresToStringMethod = Object.values(this.properties).find((p: any) => p.stringifier);
      if (requiresToStringMethod) {
        i['anonymous-methods'] = i['anonymous-methods'] || { method: [] };
        i['anonymous-methods'].method.push({ stringifier: 1, signature: [] });
      }

      this.printer.printSeparatorLine('// properties');
      this.properties.forEach(p => this.printProperty(p));
    }

    if (this.hasMethods) {
      this.printer.printSeparatorLine('// methods');
      this.printMethods();
    }

    this.printEventHandlers();

    const iterators = new TsIteratorExtractor(this.components, this.i, { isWithinClass: true }).run();
    if (iterators) {
      this.printer.printSeparatorLine();
      this.printer.printLines(iterators);
    }
    this.printIndexers();
  }

  public extractInterfacesToImport() {
    const i: Types.Interface = this.i;
    if (!this.interfacesToImport) throw new Error('interfaces already extracted');

    if (i.properties) {
      for (const property of Object.values(i.properties.property)) {
        const types = this.extractInterfaceTypesFromTypeParent(property);
        types.forEach(t => this.interfacesToImport.add(t));
      }
    }

    if (i.methods) {
      for (const method of Object.values(i.methods.method)) {
        for (const signature of method.signature) {
          if (signature.param) {
            for (const param of signature.param) {
              const types = this.extractInterfaceTypesFromTypeParent(param);
              types.forEach(t => this.interfacesToImport.add(t));
            }
          }
          const types = this.extractInterfaceTypesFromTypeParent(signature);
          types.forEach(t => this.interfacesToImport.add(t));
        }
      }
    }

    const constructor = i.constructor;
    if (constructor && constructor.signature && constructor.signature.length) {
      for (const signature of constructor.signature) {
        if (signature.param) {
          for (const param of signature.param) {
            const types = this.extractInterfaceTypesFromTypeParent(param);
            types.forEach(t => this.interfacesToImport.add(t));
          }
        }
        const types = this.extractInterfaceTypesFromTypeParent(signature);
        types.forEach(t => this.interfacesToImport.add(t));
      }
    }

    if (i['type-parameters']) {
      for (const typeParameter of i['type-parameters']) {
        if (!typeParameter.extends) continue;
        const type = this.components.convertDomTypeToTsTypeSimple(typeParameter.extends);
        const iType = toIType(type);
        if (iType !== type) this.interfacesToImport.add(iType);
      }
    }

    if (this.interfacesToImport.has('IEventHandler')) {
      this.interfacesToImport.delete('IEventHandler');
      this.interfacesToImport.add('IEvent');
    }
    this.interfacesToImport.delete('IDOMString');
    this.interfacesToImport.delete('IOnErrorEventHandler');
    this.interfacesToImport.delete('IUSVString');
    this.interfacesToImport.delete('IOnBeforeUnloadEventHandler');
    this.interfacesToImport.delete('ICSSOMString');

    const interfacesToImport = Array.from(this.interfacesToImport);
    delete this.interfacesToImport;
    return interfacesToImport;
  }

  public extractPropertyType(p: Types.Property) {
    const i: Types.Interface = this.i;
    let pType: string;
    if (isEventHandler(p)) {
      // Sometimes event handlers with the same name may actually handle different
      // events in different interfaces. For example, onerror handles ErrorEvent
      // normally, but in SVGSVGElement it handles SVGError event instead.
      const eType = toIType(
        p['event-handler'] ? this.components.getEventTypeInInterface(p['event-handler']!, i) : 'Event',
      );
      pType = `(${this.emitEventHandlerThis()}ev: ${eType}) => any`;
      if (typeof p.type === 'string' && !p.type.endsWith('NonNull')) {
        pType = `(${pType}) | null`;
      }
    } else {
      pType = this.components.convertDomTypeToTsType(p, true);
    }
    const required = p.required === undefined || p.required === 1;
    pType = p.nullable ? makeNullable(pType) : pType;
    if (!required) {
      pType += ' | undefined';
    }
    return pType;
  }

  public printInternalStateHooks(classesToImport: string[], internalStateGenerator: boolean = true) {
    const i: Types.Interface = this.i;
    this.printer.printSeparatorLine();
    this.printer.printSeparatorLine('// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////');
    this.printer.printLine('');
    this.printPropertiesInterface(classesToImport, this.properties, false);
    this.printer.printLine('');
    this.printPropertiesInterface(classesToImport, this.readonlyProperties, true);
    if (internalStateGenerator) {
      this.printer.printLine('');
      this.printer.printLine(`export const { getState, setState, setReadonlyOf${i.name} } = InternalStateGenerator<`);
      this.printer.printLine(`  I${i.name},`);
      this.printer.printLine(`  I${i.name}Properties,`);
      this.printer.printLine(`  I${i.name}ReadonlyProperties`);
      this.printer.printLine(`>('${i.name}');`);
    }
  }

  private printPropertiesInterface(classesToImport: string[], properties: Types.Property[], isReadonly: boolean) {
    const i: Types.Interface = this.i;
    const extendsSuffix = `${isReadonly ? 'Readonly' : ''}Properties`;
    const extendsStr = classesToImport.length
      ? `extends ${classesToImport.map(x => `I${x}${extendsSuffix}`).join(', ')} `
      : '';
    const interfaceName = `I${i.name}${isReadonly ? 'Readonly' : ''}Properties`;
    this.printer.print(`export interface ${interfaceName} ${extendsStr}{`);
    if (properties.length) {
      this.printer.endLine();
    }
    this.printer.increaseIndent();
    for (const p of properties) {
      const pType: string = this.extractPropertyType(p);
      this.printer.printLine(`${p.name}?: ${pType};`);
    }
    this.printer.decreaseIndent();
    this.printer.printLine(`}`);
  }

  public get class() {
    const i: Types.Interface = this.i;
    if (i['type-parameters'] && i['type-parameters'][0]) {
      return `${i.name}<${i['type-parameters'][0].name}>`;
    }
    return i.name;
  }

  // privates

  private extractInterfaceTypesFromTypeParent(parent: Types.Param | Types.Signature) {
    const types = this.extractInterfaceTypesFromType(parent.type);
    if (parent.subtype) {
      const subtype: string | Types.Typed[] = Array.isArray(parent.subtype) ? parent.subtype : parent.subtype.type;
      types.push(...this.extractInterfaceTypesFromType(subtype));
    }
    return types;
  }

  private extractInterfaceTypesFromType(typeObj: string | Types.Typed[]): string[] {
    const array = [];
    if (typeof typeObj === 'string') {
      const type = this.components.convertDomTypeToTsTypeSimple(typeObj);
      const iType = toIType(type);
      if (iType !== type) array.push(iType);
      return array;
    }
    for (const type of typeObj) {
      array.push(...this.extractInterfaceTypesFromType(type.type));
    }
    return array;
  }

  private printConstants(isStatic: boolean = false) {
    const i: Types.Interface = this.i;
    if (!i.constants) return;
    Object.values(i.constants.constant)
      .sort(compareName)
      .forEach(c => this.emitConstant(c, isStatic));
  }

  private emitConstant(c: Types.Constant, isStatic: boolean = false) {
    const keywords = `public${isStatic ? ' static' : ''} readonly`;
    this.printer.printLines(c.comment);
    this.printer.printLine(`${keywords} ${c.name}: ${this.components.convertDomTypeToTsType(c)} = ${c.value};`);
  }

  private printProperty(p: Types.Property) {
    this.printer.printLines(p.comment);

    const pType: string = this.extractPropertyType(p);
    this.printer.printSeparatorLine();
    this.printer.printLine(`public get ${p.name}(): ${pType} {`);
    this.printer.increaseIndent();
    this.printer.printLine(`return InternalHandler.get<${this.helpers.iClass}, ${pType}>(this, '${p.name}');`);
    this.printer.decreaseIndent();
    this.printer.printLine('}');

    if (!p['read-only']) {
      this.printer.printSeparatorLine();
      this.printer.printLine(`public set ${p.name}(value: ${pType}) {`);
      this.printer.increaseIndent();
      this.printer.printLine(`InternalHandler.set<${this.helpers.iClass}, ${pType}>(this, '${p.name}', value);`);
      this.printer.decreaseIndent();
      this.printer.printLine('}');
    }
  }

  private emitEventHandlerThis() {
    const i: Types.Interface = this.i;
    return `this: ${nameWithForwardedTypes(i, true)}, `;
  }

  private printMethods() {
    const i: Types.Interface = this.i;
    if (i.methods) {
      Object.values(i.methods.method)
        .sort(compareName)
        .forEach(m => this.helpers.printMethod(m));
    }
    if (i['anonymous-methods']) {
      const stringifier = i['anonymous-methods'].method.find(m => m.stringifier);
      if (stringifier) {
        this.helpers.printToStringMethod();
      }
    }
  }

  private printEventHandlers() {
    const i: Types.Interface = this.i;
    for (const addOrRemove of ['add', 'remove']) {
      const optionsType = addOrRemove === 'add' ? 'IAddEventListenerOptions' : 'IEventListenerOptions';
      if (this.tryEmitTypedEventHandlerForInterface(i, addOrRemove, optionsType)) {
        this.interfacesToImport.add(optionsType);
        this.interfacesToImport.add('IEventListenerOrEventListenerObject');
        this.printer.printLine(
          `public ${addOrRemove}EventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | ${optionsType}): void {`,
        );
        this.printer.printLine(
          `  InternalHandler.run<${this.helpers.iClass}, void>(this, '${addOrRemove}EventListener', [type, listener, options]);`,
        );
        this.printer.printLine(`}`);
        this.helpers.usesInternalHandler = true;
      }
    }
  }

  private tryEmitTypedEventHandlerForInterface(i: Types.Interface, addOrRemove: string, optionsType: string) {
    const hasEventListener = this.components.iNameToEhList[i.name] && this.components.iNameToEhList[i.name].length;
    const ehParentCount = this.components.iNameToEhParents[i.name] && this.components.iNameToEhParents[i.name].length;

    if (hasEventListener || ehParentCount > 1) {
      this.emitTypedEventHandler(addOrRemove, i, optionsType);
      return true;
    }
    if (ehParentCount === 1) {
      this.emitTypedEventHandler(addOrRemove, this.components.iNameToEhParents[i.name][0], optionsType);
      return true;
    }
    return false;
  }

  private emitTypedEventHandler(addOrRemove: string, iParent: Types.Interface, optionsType: string) {
    const i: Types.Interface = this.i;
    const iParentName = toIType(iParent.name);
    const extender = `extends keyof ${iParentName}EventMap`;
    const listener = `(this: ${nameWithForwardedTypes(i, true)}, ev: ${iParentName}EventMap[K]) => any`;
    const options = `boolean | ${optionsType}`;
    this.interfacesToImport.add(`${iParentName}EventMap`);
    this.printer.printSeparatorLine();
    this.printer.printLine(
      `public ${addOrRemove}EventListener<K ${extender}>(type: K, listener: ${listener}, options?: ${options}): void;`,
    );
  }

  private printIndexers() {
    const i: Types.Interface = this.i;
    this.indexers.forEach(m => {
      const indexer = m.signature[0].param![0];
      const firstTypeParam = i['type-parameters'] && i['type-parameters'][0];
      const extendedType = firstTypeParam && firstTypeParam.extends ? firstTypeParam.name : null;
      const tsType1 = this.components.convertDomTypeToTsType(indexer);
      const typeObj2 = {
        type: m.signature[0].type,
        subtype: m.signature[0].subtype,
        nullable: undefined,
      };
      const tsType2 = this.components.convertDomTypeToTsType(typeObj2, !extendedType);
      this.printer.printSeparatorLine();
      this.printer.printLine(`[${indexer.name}: ${tsType1}]: ${tsType2};`);
    });
  }

  // To decide if a given method is an indexer and should be emited
  private shouldEmitIndexerSignature(meth: Types.AnonymousMethod) {
    const i: Types.Interface = this.i;
    if (meth.getter && meth.signature && meth.signature[0].param && meth.signature[0].param!.length === 1) {
      // TypeScript array indexer can only be number or string
      // for string, it must return a more generic type then all
      // the other properties, following the Dictionary pattern
      switch (this.components.convertDomTypeToTsType(meth.signature[0].param![0])) {
        case 'number':
          return true;
        case 'string':
          if (this.components.convertDomTypeToTsType(meth.signature[0]) === 'any') {
            return true;
          }
          const sig = meth.signature[0];
          const mTypes = distinct(
            (i.methods &&
              map(
                i.methods.method,
                (m: Types.Method) => (m.signature && m.signature.length && m.signature[0].type) || 'void',
              ).filter((t: any) => t !== 'void')) ||
              [],
          );
          const amTypes = distinct(
            (i['anonymous-methods'] &&
              i['anonymous-methods']!.method.map(m => m.signature[0].type).filter(t => t !== 'void')) ||
              [],
          ); // |>  Array.distinct
          const pTypes = distinct(
            (i.properties &&
              map(i.properties.property, (p: Types.Property) => p.type).filter((t: any) => t !== 'void')) ||
              [],
          ); // |>  Array.distinct

          if (mTypes.length === 0 && amTypes.length === 1 && pTypes.length === 0) return amTypes[0] === sig.type;
          if (mTypes.length === 1 && amTypes.length === 1 && pTypes.length === 0) {
            return mTypes[0] === amTypes[0] && amTypes[0] === sig.type;
          }
          if (mTypes.length === 0 && amTypes.length === 1 && pTypes.length === 1) {
            return amTypes[0] === pTypes[0] && amTypes[0] === sig.type;
          }
          if (mTypes.length === 1 && amTypes.length === 1 && pTypes.length === 1) {
            return mTypes[0] === amTypes[0] && amTypes[0] === pTypes[0] && amTypes[0] === sig.type;
          }
      }
    }
    return false;
  }
}
