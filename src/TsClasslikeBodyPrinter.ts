import * as Types from './types';
import Printer from './Printer';
import Components from './Components';
import {
  compareName,
  isEventHandler,
  makeNullable,
  // map,
  // distinct,
  // matchScope,
  nameWithForwardedTypes,
  toIType,
} from './helpers';

export default class TsClasslikeBodyPrinter {
  private readonly printer: Printer;
  private readonly components: Components;
  private interfacesToImport: Set<string> = new Set();

  constructor(components: Components, printer: Printer) {
    this.components = components;
    this.printer = printer;
  }

  public reset() {
    this.interfacesToImport = new Set();
  }

  public print(i: Types.Interface) {
    if (i.constants && Object.keys(i.constants.constant).length) {
      this.printConstants(i, true);
      this.printer.printSeparatorLine();
      this.printConstants(i);
    }

    this.printMembers(i);
    this.printEventHandlers(i);
    // this.printIndexers(Types.EmitScope.InstanceOnly, i);
  }

  public createMethodArgs(signature: Types.Signature, isUnused: boolean = false) {
    return signature.param ? this.components.paramsToString(signature.param, true, isUnused) : '';
  }

  public getInterfacesToImport(i: Types.Interface) {
    if (i.properties) {
      for (const property of Object.values(i.properties.property)) {
        const types = this.extractInterfaceTypesFromType(property.type);
        types.forEach(t => this.interfacesToImport.add(t));
      }
    }

    if (i.methods) {
      for (const method of Object.values(i.methods.method)) {
        for (const signature of method.signature) {
          if (signature.param) {
            for (const param of signature.param) {
              const types = this.extractInterfaceTypesFromType(param.type);
              types.forEach(t => this.interfacesToImport.add(t));
            }
          }
          const types = this.extractInterfaceTypesFromType(signature.type);
          types.forEach(t => this.interfacesToImport.add(t));
        }
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

    return Array.from(this.interfacesToImport);
  }

  private extractInterfaceTypesFromType(typeObj: string | Types.Typed[]): string[] {
    const array = [];
    if (typeof typeObj === 'string') {
      const iType = toIType(typeObj);
      if (iType !== typeObj) array.push(iType);
      return array;
    }
    for (const type of typeObj) {
      array.push(...this.extractInterfaceTypesFromType(type.type));
    }
    return array;
  }

  private printConstants(i: Types.Interface, isStatic: boolean = false) {
    if (i.constants) {
      Object.values(i.constants.constant)
        .sort(compareName)
        .forEach(c => this.emitConstant(c, isStatic));
    }
  }

  private emitConstant(c: Types.Constant, isStatic: boolean = false) {
    const keywords = `public${isStatic ? ' static' : ''} readonly`;
    this.printer.printComment(c.comment);
    this.printer.printLine(`${keywords} ${c.name}: ${this.components.convertDomTypeToTsType(c)} = ${c.value};`);
  }

  private printMembers(i: Types.Interface) {
    const hasProperties = !!(i.properties && Object.keys(i.properties.property).length);
    const hasMethods = !!(i.methods && Object.keys(i.methods.method).length);

    if (hasProperties) {
      const requiresToStringMethod = Object.values(i.properties!.property).find((p: any) => p.stringifier);
      if (requiresToStringMethod) {
        i['anonymous-methods'] = i['anonymous-methods'] || { method: [] };
        i['anonymous-methods'].method.push({ stringifier: 1, signature: [] });
      }
      this.printer.printSeparatorLine('// properties');
      this.printProperties(i);
    }

    if (hasMethods) {
      this.printer.printSeparatorLine('// methods');
      this.printMethods(i);
    }
    // this.emitIteratorForEach(i);
  }

  private printProperties(i: Types.Interface) {
    if (i.properties) {
      Object.values(i.properties.property)
        .filter(p => !this.components.isCovariantEventHandler(i, p))
        .sort(compareName)
        .forEach(p => this.printProperty(i, p));
    }
  }

  private printProperty(i: Types.Interface, p: Types.Property) {
    this.printer.printComment(p.comment);

    let pType: string;
    if (isEventHandler(p)) {
      // Sometimes event handlers with the same name may actually handle different
      // events in different interfaces. For example, onerror handles ErrorEvent
      // normally, but in SVGSVGElement it handles SVGError event instead.
      const eType = toIType(
        p['event-handler'] ? this.components.getEventTypeInInterface(p['event-handler']!, i) : 'Event',
      );
      pType = `(${this.emitEventHandlerThis(i)}ev: ${eType}) => any`;
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

    this.printer.printSeparatorLine();
    this.printer.printLine(`public get ${p.name}(): ${pType} {`);
    this.printer.increaseIndent();
    this.printer.printLine(`throw new Error('getter not implemented');`);
    this.printer.decreaseIndent();
    this.printer.printLine('}');

    if (!p['read-only']) {
      this.printer.printSeparatorLine();
      this.printer.printLine(`public set ${p.name}(_value: ${pType}) {`);
      this.printer.increaseIndent();
      this.printer.printLine(`throw new Error('setter not implemented');`);
      this.printer.decreaseIndent();
      this.printer.printLine('}');
    }
  }

  private emitEventHandlerThis(i: Types.Interface) {
    return `this: ${nameWithForwardedTypes(i, true)}, `;
  }

  private printMethods(i: Types.Interface) {
    if (i.methods) {
      Object.values(i.methods.method)
        .sort(compareName)
        .forEach(m => this.printMethod(m, i));
    }
    if (i['anonymous-methods']) {
      const stringifier = i['anonymous-methods'].method.find(m => m.stringifier);
      if (stringifier) {
        this.printer.printLine('toString(): string;');
      }
    }
  }

  private printMethod(m: Types.Method, i: Types.Interface) {
    if (m.deprecated) this.printer.printDepreciated();
    this.printer.printComment(m.comment);

    switch (m.name) {
      case 'createElement':
        return this.emitCreateElementOverloads(m);
      case 'createEvent':
        return this.emitCreateEventOverloads(m);
      case 'getElementsByTagName':
        return this.emitGetElementsByTagNameOverloads(m);
      case 'querySelector':
        return this.emitQuerySelectorOverloads(m);
      case 'querySelectorAll':
        return this.emitQuerySelectorAllOverloads(m);
    }

    const firstTypeParam = i['type-parameters'] && i['type-parameters'][0];
    const extendedType = firstTypeParam && firstTypeParam.extends ? firstTypeParam.name : null;

    m.signature.forEach(signature => {
      const methodArgs = this.createMethodArgs(signature, true);
      const returnType = this.createMethodReturnType(signature, !extendedType);
      this.printer.printSeparatorLine();
      this.printer.printLine(`public ${m.name}(${methodArgs}): ${returnType} {`);
      this.printer.increaseIndent();
      this.printer.printLine(`throw new Error('method not implemented');`);
      this.printer.decreaseIndent();
      this.printer.printLine('}');
    });

    if (m.stringifier) {
      this.printer.printSeparatorLine();
      this.printer.printLine('public toString(): string {');
      this.printer.increaseIndent();
      this.printer.printComment(`// should print ${m.name} as string`);
      this.printer.printLine(`throw new Error('method not implemented');`);
      this.printer.decreaseIndent();
      this.printer.printLine('}');
    }
  }

  private createMethodReturnType(signature: Types.Signature, convertToIType: boolean = false) {
    const returnType = this.components.convertDomTypeToTsType(signature, convertToIType);
    return signature.nullable ? makeNullable(returnType) : returnType;
  }

  /// Emit overloads for the createElement method
  private emitCreateElementOverloads(m: Types.Method) {
    const expectedParamType = ['string', 'string | ElementCreationOptions'];
    const isMatch = this.components.matchParamMethodSignature(m, 'createElement', 'Element', expectedParamType);
    if (isMatch) {
      this.printer.printLine(
        'public createElement<K extends keyof IHTMLElementTagNameMap>(tagName: K, options?: IElementCreationOptions): IHTMLElementTagNameMap[K];',
      );
      this.printer.printLine('createElement(tagName: string, options?: ElementCreationOptions): HTMLElement {');
      this.printer.printLine(`  throw new Error('method not implemented');`);
      this.printer.printLine('}');
    }
  }

  // Emit overloads for the createEvent method
  private emitCreateEventOverloads(m: Types.Method) {
    if (this.components.matchParamMethodSignature(m, 'createEvent', 'Event', 'string')) {
      // Emit plurals. For example, Events, MutationEvents
      const hasPlurals = ['IEvent', 'IMutationEvent', 'IMouseEvent', 'ISVGZoomEvent', 'IUIEvent'];
      for (const x of this.components.distinctETypeList) {
        this.printer.printLine(`createEvent(eventInterface: '${x}'): ${x};`);
        if (hasPlurals.includes(x)) {
          this.printer.printLine(`createEvent(eventInterface: '${x}s'): ${x};`);
        }
      }
      this.printer.printLine('createEvent(eventInterface: string): IEvent {');
      this.printer.printLine(`  throw new Error('method not implemented');`);
      this.printer.printLine('}');
    }
  }

  // Emit overloads for the getElementsByTagName method
  private emitGetElementsByTagNameOverloads(m: Types.Method) {
    if (this.components.matchParamMethodSignature(m, 'getElementsByTagName', 'HTMLCollection', 'string')) {
      this.printer.printLine(
        `getElementsByTagName<K extends keyof IHTMLElementTagNameMap>(${
          m.signature[0].param![0].name
        }: K): IHTMLCollectionOf<IHTMLElementTagNameMap[K]>;`,
      );
      this.printer.printLine(
        `getElementsByTagName<K extends keyof ISVGElementTagNameMap>(${
          m.signature[0].param![0].name
        }: K): IHTMLCollectionOf<ISVGElementTagNameMap[K]>;`,
      );
      this.printer.printLine(
        `getElementsByTagName(${m.signature[0].param![0].name}: string): IHTMLCollectionOf<IElement> {`,
      );
      this.printer.printLine(`  throw new Error('method not implemented');`);
      this.printer.printLine('}');
    }
  }

  // Emit overloads for the querySelector method
  private emitQuerySelectorOverloads(m: Types.Method) {
    if (this.components.matchParamMethodSignature(m, 'querySelector', 'Element | null', 'string')) {
      this.printer.printLine(
        'querySelector<K extends keyof IHTMLElementTagNameMap>(selectors: K): IHTMLElementTagNameMap[K] | null;',
      );
      this.printer.printLine(
        'querySelector<K extends keyof ISVGElementTagNameMap>(selectors: K): ISVGElementTagNameMap[K] | null;',
      );
      this.printer.printLine('querySelector<E extends IElement = IElement>(selectors: string): E | null {');
      this.printer.printLine(`  throw new Error('method not implemented');`);
      this.printer.printLine('}');
    }
  }

  // Emit overloads for the querySelectorAll method
  private emitQuerySelectorAllOverloads(m: Types.Method) {
    if (this.components.matchParamMethodSignature(m, 'querySelectorAll', 'NodeList', 'string')) {
      this.printer.printLine(
        'querySelectorAll<K extends keyof IHTMLElementTagNameMap>(selectors: K): INodeListOf<IHTMLElementTagNameMap[K]>;',
      );
      this.printer.printLine(
        'querySelectorAll<K extends keyof ISVGElementTagNameMap>(selectors: K): INodeListOf<ISVGElementTagNameMap[K]>;',
      );
      this.printer.printLine('querySelectorAll<E extends IElement = IElement>(selectors: string): INodeListOf<E> {');
      this.printer.printLine(`  throw new Error('method not implemented');`);
      this.printer.printLine('}');
    }
  }

  private printEventHandlers(i: Types.Interface) {
    for (const addOrRemove of ['add', 'remove']) {
      const optionsType = addOrRemove === 'add' ? 'IAddEventListenerOptions' : 'IEventListenerOptions';
      if (this.tryEmitTypedEventHandlerForInterface(i, addOrRemove, optionsType)) {
        this.interfacesToImport.add(optionsType);
        this.interfacesToImport.add('IEventListenerOrEventListenerObject');
        this.printer.printLine(
          `public ${addOrRemove}EventListener(_type: string, _listener: IEventListenerOrEventListenerObject, _options?: boolean | ${optionsType}): void {`,
        );
        this.printer.printLine(`  throw new Error('method not implemented');`);
        this.printer.printLine(`}`);
      }
    }
  }

  private tryEmitTypedEventHandlerForInterface(i: Types.Interface, addOrRemove: string, optionsType: string) {
    const hasEventListener = this.components.iNameToEhList[i.name] && this.components.iNameToEhList[i.name].length;
    const ehParentCount = this.components.iNameToEhParents[i.name] && this.components.iNameToEhParents[i.name].length;

    if (hasEventListener || ehParentCount > 1) {
      this.emitTypedEventHandler(i, addOrRemove, i, optionsType);
      return true;
    }
    if (ehParentCount === 1) {
      this.emitTypedEventHandler(i, addOrRemove, this.components.iNameToEhParents[i.name][0], optionsType);
      return true;
    }
    return false;
  }

  private emitTypedEventHandler(
    i: Types.Interface,
    addOrRemove: string,
    iParent: Types.Interface,
    optionsType: string,
  ) {
    const iParentName = toIType(iParent.name);
    const extender = `extends keyof ${iParentName}EventMap`;
    const listener = `(this: ${nameWithForwardedTypes(i, true)}, ev: ${iParentName}EventMap[K]) => any`;
    const options = `boolean | ${optionsType}`;
    this.interfacesToImport.add(`${iParentName}EventMap`);
    this.printer.printSeparatorLine();
    this.printer.printLine(
      `public ${addOrRemove}EventListener<K ${extender}>(_type: K, _listener: ${listener}, _options?: ${options}): void;`,
    );
  }

  // private printIndexers(emitScope: Types.EmitScope, i: Types.Interface) {
  //   // The indices could be within either Methods or Anonymous Methods
  //   const anonymousMethods = Object.values<Types.AnonymousMethod>(i.methods && i.methods.method)
  //     .concat((i['anonymous-methods'] && i['anonymous-methods']!.method) || [])
  //     .filter(m => this.shouldEmitIndexerSignature(i, m) && matchScope(emitScope, m));
  //   anonymousMethods.forEach(m => {
  //     const indexer =
  //       m.signature && m.signature.length && m.signature[0].param && m.signature[0].param!.length
  //         ? m.signature[0].param![0]
  //         : undefined;
  //     if (indexer) {
  //       const firstTypeParam = i['type-parameters'] && i['type-parameters'][0];
  //       const extendedType = firstTypeParam && firstTypeParam.extends ? firstTypeParam.name : null;
  //       const tsType1 = this.components.convertDomTypeToTsType(indexer);
  //       const typeObj2 = {
  //         type: m.signature[0].type,
  //         subtype: m.signature[0].subtype,
  //         nullable: undefined,
  //       };
  //       const tsType2 = this.components.convertDomTypeToTsType(typeObj2, !extendedType);
  //       this.printer.printSeparatorLine();
  //       this.printer.printLine(`[${indexer.name}: ${tsType1}](): ${tsType2} {`);
  //       this.printer.printLine(`  throw new Error('iterator method not implemented');`);
  //       this.printer.printLine('}');
  //     }
  //   });
  // }
  //
  // // To decide if a given method is an indexer and should be emited
  // private shouldEmitIndexerSignature(i: Types.Interface, meth: Types.AnonymousMethod) {
  //   if (meth.getter && meth.signature && meth.signature[0].param && meth.signature[0].param!.length === 1) {
  //     // TypeScript array indexer can only be number or string
  //     // for string, it must return a more generic type then all
  //     // the other properties, following the Dictionary pattern
  //     switch (this.components.convertDomTypeToTsType(meth.signature[0].param![0])) {
  //       case 'number':
  //         return true;
  //       case 'string':
  //         if (this.components.convertDomTypeToTsType(meth.signature[0]) === 'any') {
  //           return true;
  //         }
  //         const sig = meth.signature[0];
  //         const mTypes = distinct(
  //           (i.methods &&
  //             map(i.methods.method, m => (m.signature && m.signature.length && m.signature[0].type) || 'void').filter(
  //               t => t !== 'void',
  //             )) ||
  //           [],
  //         );
  //         const amTypes = distinct(
  //           (i['anonymous-methods'] &&
  //             i['anonymous-methods']!.method.map(m => m.signature[0].type).filter(t => t !== 'void')) ||
  //           [],
  //         ); // |>  Array.distinct
  //         const pTypes = distinct(
  //           (i.properties && map(i.properties.property, m => m.type).filter(t => t !== 'void')) || [],
  //         ); // |>  Array.distinct
  //
  //         if (mTypes.length === 0 && amTypes.length === 1 && pTypes.length === 0) return amTypes[0] === sig.type;
  //         if (mTypes.length === 1 && amTypes.length === 1 && pTypes.length === 0) {
  //           return mTypes[0] === amTypes[0] && amTypes[0] === sig.type;
  //         }
  //         if (mTypes.length === 0 && amTypes.length === 1 && pTypes.length === 1) {
  //           return amTypes[0] === pTypes[0] && amTypes[0] === sig.type;
  //         }
  //         if (mTypes.length === 1 && amTypes.length === 1 && pTypes.length === 1) {
  //           return mTypes[0] === amTypes[0] && amTypes[0] === pTypes[0] && amTypes[0] === sig.type;
  //         }
  //     }
  //   }
  //   return false;
  // }
}
