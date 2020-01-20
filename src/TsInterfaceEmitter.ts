import {
  compareName,
  makeNullable,
  isEventHandler,
  nameWithForwardedTypes,
  matchScope,
  distinct,
  map,
  getNameWithTypeParameter,
  interfacesConflictingWithBaseType,
  toIType,
} from './helpers';
import * as Types from './types';
import Printer from './Printer';
import Components from './Components';

export default class TsInterfaceEmitter {
  private printer = new Printer();
  private readonly components: Components;

  constructor(components: Components) {
    this.components = components;
  }

  public run() {
    return [
      // ...this.extractNamedConstructors(),
      ...this.extractNonCallbackInterfaces(),
    ];
    // this.components.allInterfaces.sort(compareName).forEach(emitIterator);
  }

  private extractNonCallbackInterfaces() {
    return this.components.allNonCallbackInterfaces
      .sort(compareName)
      .filter(i => !i['legacy-namespace'])
      .map(i => {
        const name = i.name;
        const code = this.extractInterface(i);
        const elementNamespace = i.element ? i.element.namespace : undefined;
        return { type: 'NonCallbackInterface', name, code, elementNamespace };
      });
  }

  // @ts-ignore
  private extractInterface(i: Types.Interface) {
    this.printer.reset();
    this.emitInterfaceEventMap(i);

    this.emitInterfaceDeclaration(i);
    this.printer.increaseIndent();

    this.printConstants(i);
    this.printMembers(/*prefix*/ '', Types.EmitScope.InstanceOnly, i);
    this.printEventHandlers(/*prefix*/ '', i);
    this.printIndexers(Types.EmitScope.InstanceOnly, i);

    this.printer.decreaseIndent();
    this.printer.print('}');
    return this.printer.getResult();
  }

  private printIndexers(emitScope: Types.EmitScope, i: Types.Interface) {
    // The indices could be within either Methods or Anonymous Methods
    const anonymousMethods = Object.values<Types.AnonymousMethod>(i.methods && i.methods.method)
      .concat((i['anonymous-methods'] && i['anonymous-methods']!.method) || [])
      .filter(m => this.shouldEmitIndexerSignature(i, m) && matchScope(emitScope, m));
    anonymousMethods.forEach(m => {
      const indexer =
        m.signature && m.signature.length && m.signature[0].param && m.signature[0].param!.length
          ? m.signature[0].param![0]
          : undefined;
      if (indexer) {
        const firstTypeParam = i['type-parameters'] && i['type-parameters'][0];
        const extendedType = firstTypeParam && firstTypeParam.extends ? firstTypeParam.name : null;
        const tsType1 = this.components.convertDomTypeToTsType(indexer);
        const typeObj2 = {
          type: m.signature[0].type,
          subtype: m.signature[0].subtype,
          nullable: undefined,
        };
        const tsType2 = this.components.convertDomTypeToTsType(typeObj2, !extendedType);
        this.printer.printLine(`[${indexer.name}: ${tsType1}]: ${tsType2};`);
      }
    });
  }

  // To decide if a given method is an indexer and should be emited
  private shouldEmitIndexerSignature(i: Types.Interface, meth: Types.AnonymousMethod) {
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
              map(i.methods.method, m => (m.signature && m.signature.length && m.signature[0].type) || 'void').filter(
                t => t !== 'void',
              )) ||
            [],
          );
          const amTypes = distinct(
            (i['anonymous-methods'] &&
              i['anonymous-methods']!.method.map(m => m.signature[0].type).filter(t => t !== 'void')) ||
            [],
          ); // |>  Array.distinct
          const pTypes = distinct(
            (i.properties && map(i.properties.property, m => m.type).filter(t => t !== 'void')) || [],
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

  private printEventHandlers(prefix: string, i: Types.Interface) {
    const fPrefix = prefix.startsWith('declare var') ? 'declare function ' : '';

    for (const addOrRemove of ['add', 'remove']) {
      const optionsType = addOrRemove === 'add' ? 'IAddEventListenerOptions' : 'IEventListenerOptions';
      if (this.tryEmitTypedEventHandlerForInterface(fPrefix, i, addOrRemove, optionsType)) {
        // only emit the string event handler if we just emited a typed handler
        this.printer.printLine(
          `${fPrefix}${addOrRemove}EventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | ${optionsType}): void;`,
        );
      }
    }
  }

  private tryEmitTypedEventHandlerForInterface(
    prefix: string,
    i: Types.Interface,
    addOrRemove: string,
    optionsType: string,
  ) {
    const hasEventListener = this.components.iNameToEhList[i.name] && this.components.iNameToEhList[i.name].length;
    const ehParentCount = this.components.iNameToEhParents[i.name] && this.components.iNameToEhParents[i.name].length;

    if (hasEventListener || ehParentCount > 1) {
      this.emitTypedEventHandler(prefix, i, addOrRemove, i, optionsType);
      return true;
    }
    if (ehParentCount === 1) {
      this.emitTypedEventHandler(prefix, i, addOrRemove, this.components.iNameToEhParents[i.name][0], optionsType);
      return true;
    }
    return false;
  }

  private emitTypedEventHandler(
    p: string,
    i: Types.Interface,
    addOrRemove: string,
    iParent: Types.Interface,
    optionsType: string,
  ) {
    const iParentName = toIType(iParent.name);
    const extender = `extends keyof ${iParentName}EventMap`;
    const listener = `(this: ${nameWithForwardedTypes(i, true)}, ev: ${iParentName}EventMap[K]) => any`;
    const options = `boolean | ${optionsType}`;
    this.printer.printLine(
      `${p}${addOrRemove}EventListener<K ${extender}>(type: K, listener: ${listener}, options?: ${options}): void;`,
    );
  }

  private printConstants(i: Types.Interface) {
    if (i.constants) {
      Object.values(i.constants.constant)
        .sort(compareName)
        .forEach(c => this.emitConstant(c));
    }
  }

  private emitConstant(c: Types.Constant) {
    this.printer.printComment(c.comment);
    this.printer.printLine(`readonly ${c.name}: ${this.components.convertDomTypeToTsType(c)};`);
  }

  private emitInterfaceEventMap(inter: Types.Interface) {
    const { iNameToEhList, iNameToAttributelessEhList, iNameToEhParents } = this.components;
    const hasEventHandlers = iNameToEhList[inter.name] && iNameToEhList[inter.name].length;
    const hasAttributelessEventHandlers =
      iNameToAttributelessEhList[inter.name] && iNameToAttributelessEhList[inter.name].length;
    const ehParentCount = iNameToEhParents[inter.name] && iNameToEhParents[inter.name].length;

    if (hasEventHandlers || hasAttributelessEventHandlers || ehParentCount > 1) {
      this.printer.print(`export interface I${inter.name}EventMap`);
      if (ehParentCount) {
        const extend = iNameToEhParents[inter.name].map(i => `I${i.name}EventMap`);
        this.printer.print(` extends ${extend.join(', ')}`);
      }
      this.printer.print(' {');
      this.printer.endLine();
      this.printer.increaseIndent();
      iNameToEhList[inter.name]
        .concat(iNameToAttributelessEhList[inter.name])
        .sort(compareName)
        .forEach(eHandler => this.emitInterfaceEventMapEntry(eHandler, inter));
      this.printer.decreaseIndent();
      this.printer.printLine('}');
      this.printer.printLine('');
    }
  }

  private emitInterfaceEventMapEntry(eHandler: Types.EventHandler, inter: Types.Interface) {
    const eventType = toIType(this.components.getEventTypeInInterface(eHandler.eventName, inter));
    this.printer.printLine(`${eHandler.eventName}: ${eventType};`);
  }

  private emitInterfaceDeclaration(i: Types.Interface) {
    this.printer.printComment(i.comment);
    if (interfacesConflictingWithBaseType.has(i.name)) {
      this.printer.printLine('// @ts-ignore');
    }
    this.printer.print(`export interface ${getNameWithTypeParameter(i, i.name, true)}`);

    const finalExtends = [i.extends || 'Object'].concat((i.implements || []).sort()).filter(e => e !== 'Object');

    if (finalExtends.length) {
      this.printer.print(` extends ${finalExtends.map(toIType).join(', ')}`);
    }
    this.printer.print(' {');
    this.printer.endLine();
  }

  //////////////////////////////////////////////////////////////////////////////

  // These should probably be moved into the interfaces
  // @ts-ignore
  private extractNamedConstructors() {
    return Object.values(this.components.interfaces)
      .sort(compareName)
      .map(inter => {
        const name = inter.name;
        const code = this.extractNamedConstructor(inter);
        return { type: 'NamedConstructor', name, code };
      })
      .filter(x => x.code);
  }

  private extractNamedConstructor(i: Types.Interface) {
    this.printer.reset();
    const nc = i['named-constructor'];
    if (nc) {
      this.printer.printLine(`declare var ${nc.name}: {`);
      this.printer.increaseIndent();
      nc.signature.forEach(s => {
        this.printer.printLine(`new(${s.param ? this.components.paramsToString(s.param) : ''}): ${i.name};`);
      });
      this.printer.decreaseIndent();
      this.printer.print(`};`);
    }
    return this.printer.getResult();
  }

  // Emit the properties and methods of a given interface
  private printMembers(prefix: string, emitScope: Types.EmitScope, i: Types.Interface) {
    if (i.properties) {
      const requiresToStringMethod = Object.values(i.properties.property).find((p: any) => p.stringifier);
      if (requiresToStringMethod) {
        i['anonymous-methods'] = i['anonymous-methods'] || { method: [] };
        i['anonymous-methods'].method.push({ stringifier: 1, signature: [] });
      }
    }
    this.printProperties(prefix, emitScope, i);
    const methodPrefix = prefix.startsWith('declare var') ? 'declare function ' : '';
    this.printMethods(methodPrefix, emitScope, i);
    if (emitScope === Types.EmitScope.InstanceOnly) {
      this.emitIteratorForEach(i);
    }
  }

  // Emit forEach for iterators
  private emitIteratorForEach(i: Types.Interface) {
    if (!i.iterator) {
      return;
    }
    const typeParam = i['type-parameters'] && i['type-parameters'] ? i['type-parameters'][0] : null;
    const extendedType = typeParam && typeParam.extends ? typeParam.name : null;
    const subtype = i.iterator.type.map(o => this.components.convertDomTypeToTsType(o));
    const lastSubtype = subtype[subtype.length - 1];
    const value = lastSubtype === extendedType ? lastSubtype : toIType(lastSubtype);
    const key = subtype.length > 1 ? subtype[0] : i.iterator.kind === 'iterable' ? 'number' : value;
    const name = i['type-parameters']
      ? `${toIType(i.name)}<${i['type-parameters']!.map(p => p.name).join(', ')}>`
      : toIType(i.name);
    this.printer.printLine(
      `forEach(callbackfn: (value: ${value}, key: ${key}, parent: ${name}) => void, thisArg?: any): void;`,
    );
  }

  private printProperties(prefix: string, emitScope: Types.EmitScope, i: Types.Interface) {
    if (i.properties) {
      Object.values(i.properties.property)
        .filter(m => matchScope(emitScope, m))
        .filter(p => !this.components.isCovariantEventHandler(i, p))
        .sort(compareName)
        .forEach(p => this.printProperty(prefix, i, emitScope, p));
    }
  }

  private printProperty(prefix: string, i: Types.Interface, emitScope: Types.EmitScope, p: Types.Property) {
    this.printer.printComment(p.comment);

    // Treat window.name specially because of https://github.com/Microsoft/TypeScript/issues/9850
    if (p.name === 'name' && i.name === 'Window' && emitScope === Types.EmitScope.All) {
      return this.printer.printLine('declare const name: never;');
    }

    let pType: string;
    if (isEventHandler(p)) {
      // Sometimes event handlers with the same name may actually handle different
      // events in different interfaces. For example, onerror handles ErrorEvent
      // normally, but in SVGSVGElement it handles SVGError event instead.
      const eType = toIType(
        p['event-handler'] ? this.components.getEventTypeInInterface(p['event-handler']!, i) : 'Event',
      );
      pType = `(${this.emitEventHandlerThis(prefix, i)}ev: ${eType}) => any`;
      if (typeof p.type === 'string' && !p.type.endsWith('NonNull')) {
        pType = `(${pType}) | null`;
      }
    } else {
      pType = this.components.convertDomTypeToTsType(p, true);
    }
    const required = p.required === undefined || p.required === 1;
    const requiredModifier = required || prefix ? '' : '?';
    pType = p.nullable ? makeNullable(pType) : pType;
    if (!required && prefix) {
      pType += ' | undefined';
    }
    const readOnlyModifier = p['read-only'] === 1 && prefix === '' ? 'readonly ' : '';
    this.printer.printLine(`${prefix}${readOnlyModifier}${p.name}${requiredModifier}: ${pType};`);
  }

  private emitEventHandlerThis(prefix: string, i: Types.Interface) {
    if (prefix === '') return `this: ${nameWithForwardedTypes(i, true)}, `;
    return '';
  }

  private printMethods(prefix: string, emitScope: Types.EmitScope, i: Types.Interface) {
    // If prefix is not empty, then this is the global declare function addEventListener, we want to override this
    // Otherwise, this is EventTarget.addEventListener, we want to keep that.
    if (i.methods) {
      Object.values(i.methods.method)
        .filter(
          m =>
            matchScope(emitScope, m) &&
            !(prefix !== '' && (m.name === 'addEventListener' || m.name === 'removeEventListener')),
        )
        .sort(compareName)
        .forEach(m => this.printMethod(prefix, m, i));
    }
    if (i['anonymous-methods']) {
      const stringifier = i['anonymous-methods'].method.find(m => m.stringifier);
      if (stringifier) {
        this.printer.printLine('toString(): string;');
      }
    }
  }

  private printMethod(prefix: string, m: Types.Method, i: Types.Interface) {
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
    this.printer.printSignatures(m, prefix, m.name, this.components, !extendedType);
    if (m.stringifier) {
      this.printer.printLine('toString(): string;');
    }
  }

  /// Emit overloads for the createElement method
  private emitCreateElementOverloads(m: Types.Method) {
    const expectedParamType = ['string', 'string | ElementCreationOptions'];
    const isMatch = this.components.matchParamMethodSignature(m, 'createElement', 'Element', expectedParamType);
    if (isMatch) {
      this.printer.printLine(
        'createElement<K extends keyof IHTMLElementTagNameMap>(tagName: K, options?: IElementCreationOptions): IHTMLElementTagNameMap[K];',
      );
      this.printer.printLine('createElement(tagName: string, options?: ElementCreationOptions): HTMLElement;');
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
      this.printer.printLine('createEvent(eventInterface: string): IEvent;');
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
        `getElementsByTagName(${m.signature[0].param![0].name}: string): IHTMLCollectionOf<IElement>;`,
      );
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
      this.printer.printLine('querySelector<E extends IElement = IElement>(selectors: string): E | null;');
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
      this.printer.printLine('querySelectorAll<E extends IElement = IElement>(selectors: string): INodeListOf<E>;');
    }
  }
}
