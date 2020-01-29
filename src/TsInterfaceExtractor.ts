import {
  compareName,
  makeNullable,
  isEventHandler,
  nameWithForwardedTypes,
  matchScope,
  distinct,
  map,
  getNameWithTypeParameter,
  toIType,
} from './helpers';
import * as Types from './types';
import Printer from './Printer';
import Components from './Components';

export default class TsInterfaceExtractor {
  private readonly printer = new Printer();
  private readonly components: Components;
  private readonly i: Types.Interface;
  private readonly extensions: string[];

  constructor(components: Components, i: Types.Interface) {
    this.i = i;
    this.components = components;
    this.extensions = [i.extends || 'Object'].concat((i.implements || []).sort()).filter(e => e !== 'Object');
  }

  public run() {
    this.printInterfaceEventMap();
    this.printInterface(true);
    // if (this.extensions.length) {
    //   this.printer.endLine();
    //   this.printer.printSeparatorLine();
    //   this.printInterface(false);
    // }

    return this.printer.getResult();
  }

  private printInterface(shouldPrintExtensions: boolean) {
    this.printInterfaceDeclaration(shouldPrintExtensions);
    this.printer.increaseIndent();
    this.printConstants();
    this.printMembers(Types.EmitScope.InstanceOnly);
    this.printEventHandlers(/*prefix*/ '');
    this.printIndexers(Types.EmitScope.InstanceOnly);
    this.printer.decreaseIndent();
    this.printer.print('}');
  }

  private printIndexers(emitScope: Types.EmitScope) {
    const i: Types.Interface = this.i;
    // The indices could be within either Methods or Anonymous Methods
    const anonymousMethods = Object.values<Types.AnonymousMethod>(i.methods && i.methods.method)
      .concat((i['anonymous-methods'] && i['anonymous-methods']!.method) || [])
      .filter(m => this.shouldEmitIndexerSignature(m) && matchScope(emitScope, m));
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

  private printEventHandlers(prefix: string) {
    const i: Types.Interface = this.i;
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
      this.emitTypedEventHandler(prefix, addOrRemove, i, optionsType);
      return true;
    }
    if (ehParentCount === 1) {
      this.emitTypedEventHandler(prefix, addOrRemove, this.components.iNameToEhParents[i.name][0], optionsType);
      return true;
    }
    return false;
  }

  private emitTypedEventHandler(p: string, addOrRemove: string, iParent: Types.Interface, optionsType: string) {
    const i: Types.Interface = this.i;
    const iParentName = toIType(iParent.name);
    const extender = `extends keyof ${iParentName}EventMap`;
    const listener = `(this: ${nameWithForwardedTypes(i, true)}, ev: ${iParentName}EventMap[K]) => any`;
    const options = `boolean | ${optionsType}`;
    this.printer.printLine(
      `${p}${addOrRemove}EventListener<K ${extender}>(type: K, listener: ${listener}, options?: ${options}): void;`,
    );
  }

  private printConstants() {
    const i: Types.Interface = this.i;
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

  private printInterfaceEventMap() {
    const i: Types.Interface = this.i;
    const { iNameToEhList, iNameToAttributelessEhList, iNameToEhParents } = this.components;
    const hasEventHandlers = iNameToEhList[i.name] && iNameToEhList[i.name].length;
    const hasAttributelessEventHandlers =
      iNameToAttributelessEhList[i.name] && iNameToAttributelessEhList[i.name].length;
    const ehParentCount = iNameToEhParents[i.name] && iNameToEhParents[i.name].length;

    if (hasEventHandlers || hasAttributelessEventHandlers || ehParentCount > 1) {
      this.printer.print(`export interface I${i.name}EventMap`);
      if (ehParentCount) {
        const extend = iNameToEhParents[i.name].map(inter => `I${inter.name}EventMap`);
        this.printer.print(` extends ${extend.join(', ')}`);
      }
      this.printer.print(' {');
      this.printer.endLine();
      this.printer.increaseIndent();
      iNameToEhList[i.name]
        .concat(iNameToAttributelessEhList[i.name])
        .sort(compareName)
        .forEach(eHandler => this.emitInterfaceEventMapEntry(eHandler));
      this.printer.decreaseIndent();
      this.printer.printLine('}');
      this.printer.printLine('');
    }
  }

  private emitInterfaceEventMapEntry(eHandler: Types.EventHandler) {
    const i: Types.Interface = this.i;
    const eventType = toIType(this.components.getEventTypeInInterface(eHandler.eventName, i));
    this.printer.printLine(`${eHandler.eventName}: ${eventType};`);
  }

  private printInterfaceDeclaration(shouldPrintExtensions: boolean) {
    const i: Types.Interface = this.i;
    const name = getNameWithTypeParameter(i, shouldPrintExtensions ? i.name : `${i.name}Only`, true);
    this.printer.printComment(i.comment);
    this.printer.print(`export interface ${name}`);
    if (shouldPrintExtensions && this.extensions.length) {
      this.printer.print(` extends ${this.extensions.map(toIType).join(', ')}`);
    }
    this.printer.print(` {`);
    this.printer.endLine();
  }

  //////////////////////////////////////////////////////////////////////////////

  // These should probably be moved into the interfaces
  // @ts-ignore
  private extractNamedConstructors() {
    return Object.values(this.components.interfaces)
      .sort(compareName)
      .map(i => {
        const name = i.name;
        const code = this.extractNamedConstructor(i);
        return { type: 'NamedConstructor', name, code };
      })
      .filter(x => x.code);
  }

  private extractNamedConstructor(i: Types.Interface) {
    // ToDO: I'm not sure how to implement class constructors that return another class instance
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
  private printMembers(emitScope: Types.EmitScope) {
    const i: Types.Interface = this.i;
    if (i.properties) {
      const requiresToStringMethod = Object.values(i.properties.property).find((p: any) => p.stringifier);
      if (requiresToStringMethod) {
        i['anonymous-methods'] = i['anonymous-methods'] || { method: [] };
        i['anonymous-methods'].method.push({ stringifier: 1, signature: [] });
      }
    }
    this.printProperties(emitScope);
    this.printMethods(emitScope);
    if (emitScope === Types.EmitScope.InstanceOnly) {
      this.emitIteratorForEach();
    }
  }

  private emitIteratorForEach() {
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
    this.printer.printLine(
      `forEach(callbackfn: (value: ${value}, key: ${key}, parent: ${name}) => void, thisArg?: any): void;`,
    );
  }

  private printProperties(emitScope: Types.EmitScope) {
    const i: Types.Interface = this.i;
    if (i.properties) {
      Object.values(i.properties.property)
        .filter(m => matchScope(emitScope, m))
        .filter(p => !this.components.isCovariantEventHandler(i, p))
        .sort(compareName)
        .forEach(p => this.printProperty(emitScope, p));
    }
  }

  private printProperty(emitScope: Types.EmitScope, p: Types.Property) {
    const i: Types.Interface = this.i;
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
      pType = `(${this.emitEventHandlerThis()}ev: ${eType}) => any`;
      if (typeof p.type === 'string' && !p.type.endsWith('NonNull')) {
        pType = `(${pType}) | null`;
      }
    } else {
      pType = this.components.convertDomTypeToTsType(p, true);
    }
    const required = p.required === undefined || p.required === 1;
    const requiredModifier = required ? '' : '?';
    pType = p.nullable ? makeNullable(pType) : pType;
    const readOnlyModifier = p['read-only'] === 1 ? 'readonly ' : '';
    this.printer.printLine(`${readOnlyModifier}${p.name}${requiredModifier}: ${pType};`);
  }

  private emitEventHandlerThis() {
    const i: Types.Interface = this.i;
    return `this: ${nameWithForwardedTypes(i, true)}, `;
  }

  private printMethods(emitScope: Types.EmitScope) {
    const i: Types.Interface = this.i;
    if (i.methods) {
      Object.values(i.methods.method)
        .filter(m => matchScope(emitScope, m) && m.name !== 'addEventListener' && m.name !== 'removeEventListener')
        .sort(compareName)
        .forEach(m => this.printMethod(m));
    }
    if (i['anonymous-methods']) {
      const stringifier = i['anonymous-methods'].method.find(m => m.stringifier);
      if (stringifier) {
        this.printer.printLine('toString(): string;');
      }
    }
  }

  private printMethod(m: Types.Method) {
    if (m.deprecated) this.printer.printDepreciated();
    this.printer.printComment(m.comment);
    this.printer.printSignatures(m, m.name, this.components);
    if (m.stringifier) {
      this.printer.printLine('toString(): string;');
    }
  }
}
