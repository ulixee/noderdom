import { compareName, makeNullable, isEventHandler, nameWithForwardedTypes, distinct, map, toIType } from './utils';
import * as Types from './Types';
import Printer from './Printer';
import Components from './Components';
import TsIteratorExtractor from './TsIteratorExtractor';
import TypeUtils from './TypeUtils';
import ParamUtils from './ParamUtils';

interface IOptions {
  skipImplementation?: boolean;
  skipConstructor?: boolean;
  skipEventHandlers?: boolean;
}

export default class TsBodyPrinter {
  public readonly constants: Types.Constant[];
  public readonly properties: Types.Property[];
  public readonly methods: Types.Method[];
  public readonly staticMethods: Types.Method[];
  public readonly indexers: Types.AnonymousMethod[];
  public readonly referencedObjects: Set<string> = new Set();
  public readonly iteratorExtractor: TsIteratorExtractor;

  private readonly i: Types.Interface;
  private readonly printer: Printer;
  private readonly components: Components;
  private readonly skipImplementation: boolean = false;
  private readonly skipConstructor: boolean = false;
  private readonly skipEventHandlers: boolean = false;

  constructor(i: Types.Interface, printer: Printer, components: Components, options: IOptions = {}) {
    this.i = i;
    this.printer = new Printer(printer);
    this.components = components;
    this.skipImplementation = options.skipImplementation || false;
    this.skipConstructor = options.skipConstructor || false;
    this.skipEventHandlers = options.skipEventHandlers || false;

    this.constants = Object.values(i.constants || {}).sort(compareName);

    this.properties = Object.values(i.properties || {})
      .filter(m => !this.skipImplementation || !m.static)
      .filter(p => !this.components.isCovariantEventHandler(i, p))
      .sort(compareName);

    this.methods = Object.values(i.methods || {}).filter(m => !m.static);
    if (this.properties.find((p: any) => p.stringifier)) {
      this.methods.push({ name: 'toString', signatures: [{ type: 'DOMString' }] });
    }
    if (i.anonymousMethods && i.anonymousMethods.find(m => m.stringifier)) {
      this.methods.push({ name: 'toString', signatures: [{ type: 'DOMString' }] });
    }
    this.methods = this.methods.sort(compareName);

    this.staticMethods = Object.values(i.methods || {})
      .filter(m => !!m.static)
      .sort(compareName);

    this.indexers = Object.values<Types.AnonymousMethod>(i.methods)
      .concat(i.anonymousMethods || [])
      .filter(m => this.hasIndexerSignature(m))
      .filter(m => this.hasSignatureParams(m));

    const iteratorOptions = { skipImplementation: this.skipImplementation };
    this.iteratorExtractor = new TsIteratorExtractor(this.i, this.components, iteratorOptions);
  }

  public get didPrint() {
    return this.printer.didPrint;
  }

  public printAll(): void {
    this.printConstants();
    this.printConstructor();
    this.printProperties();
    this.printMethods();
    if (!this.skipEventHandlers) this.printEventHandlerMethods();

    const iterators = this.iteratorExtractor.run(m => this.printMethod(m));
    if (iterators || this.indexers.length) {
      this.printer.printSeparatorLine();
      this.printer.printLines(iterators);
      this.printIndexers();
    }

    this.printStaticMethods();
  }

  //////////////////////////////////////////////////////////////////////////////

  public printConstants() {
    if (!this.constants.length) return;
    this.printer.printSeparatorLine();
    if (!this.skipImplementation) {
      this.constants.forEach(c => this.printConstant(c, true));
      this.printer.printSeparatorLine();
    }
    this.constants.forEach(c => this.printConstant(c, false));
  }

  public printConstructor() {
    const i: Types.Interface = this.i;

    let constructor = typeof i.constructor === 'object' ? i.constructor : undefined;
    if (!constructor || !constructor.signatures || !constructor.signatures.length) constructor = undefined;
    else if (!constructor!.signatures[0].params || !constructor!.signatures[0].params.length) constructor = undefined;
    const signature = constructor && constructor!.signatures[0];

    if (this.skipImplementation && signature) {
      const args = signature.params ? ParamUtils.paramsToString(signature.params, true) : '';
      this.printer.printSeparatorLine();
      this.printer.printLine(`// constructor(${args})`);
    } else if (signature) {
      this.printer.printSeparatorLine(this.constructor ? '// constructor required for this class' : '');
    }

    if (!this.skipImplementation && !this.skipConstructor) {
      const args = signature ? ParamUtils.paramsToString(signature.params!, true, true) : '';
      const isChildClass = (i.extends && i.extends !== 'Object') || (i.implements && i.implements.length);
      this.printer.printLine(`constructor(${args}) {`);
      this.printer.increaseIndent();
      if (isChildClass) {
        this.printer.printLine(`super();`);
      }
      this.printer.printLine(
        `initializeConstantsAndPrototypes<${i.name}>(${i.name}, this, handler, ${i.name}ConstantKeys, ${i.name}PropertyKeys);`,
      );
      this.printer.decreaseIndent();
      this.printer.printLine('}');
      if (signature) {
        TypeUtils.extractCustomTypesFromParams(signature.params).forEach(
          this.referencedObjects.add,
          this.referencedObjects,
        );
      }
    }
  }

  public printProperties(properties?: Types.Property[], forceOptional: boolean = false) {
    if (!properties && !this.properties.length) return;
    this.printer.printSeparatorLine(this.skipImplementation ? '' : '// properties');
    (properties || this.properties).forEach(p => this.printProperty(p, forceOptional));
  }

  public printMethods() {
    if (!this.methods.length) return;
    this.printer.printSeparatorLine(this.skipImplementation ? '' : '// methods');
    this.methods.forEach(m => this.printMethod(m));
  }

  public printConstant(c: Types.Constant, asStatic: boolean) {
    const iType = TypeUtils.convertDomTypeToTsType(c, true);
    if (this.skipImplementation) {
      this.printer.printLine(`readonly ${c.name}: ${iType};`);
    } else {
      const keywords = `public${asStatic ? ' static' : ''} readonly`;
      this.printer.printLine(`${keywords} ${c.name}: ${iType} = ${c.value};`);
    }
  }

  public printProperty(property: Types.Property, forceOptional: boolean = false) {
    const pType: string = this.extractPropertyType(property);
    const isReadonly = property.readOnly === 1;
    if (this.skipImplementation) {
      const isRequired = forceOptional ? false : property.required === undefined || property.required === 1;
      const requiredModifier = isRequired ? '' : '?';
      const readOnlyModifier = isReadonly ? 'readonly ' : '';
      this.printer.printLine(`${readOnlyModifier}${property.name}${requiredModifier}: ${pType};`);
    } else {
      const hasNullDefault = pType.includes(' | null');
      this.printer.printSeparatorLine();
      this.printer.printLine(`public get ${property.name}(): ${pType} {`);
      this.printer.increaseIndent();
      this.printer.printLine(`return handler.get<${pType}>(this, '${property.name}', ${hasNullDefault});`);
      this.printer.decreaseIndent();
      this.printer.printLine('}');

      if (!isReadonly) {
        this.printer.printSeparatorLine();
        this.printer.printLine(`public set ${property.name}(value: ${pType}) {`);
        this.printer.increaseIndent();
        this.printer.printLine(`handler.set<${pType}>(this, '${property.name}', value);`);
        this.printer.decreaseIndent();
        this.printer.printLine('}');
      }
    }
  }

  public printMethod(method: Types.Method) {
    method.signatures.forEach(signature => {
      const signatureStr = this.createSignature(method, signature);
      if (this.skipImplementation && method.static) {
        this.printer.printLine(`// ${signatureStr}`);
        return;
      }

      if (this.skipImplementation) {
        this.printer.printLine(`${signatureStr};`);
      } else {
        this.printer.printSeparatorLine();
        this.printer.printLine(`public ${signatureStr} {`);
        this.printer.increaseIndent();
        const argNames = signature.params ? ParamUtils.paramNames(signature.params).join(', ') : '';
        const rawReturnType = TypeUtils.convertDomTypeToTsType(signature, true);
        const returnType = signature.nullable ? makeNullable(rawReturnType) : rawReturnType;
        const returnCmd = ['void', 'any'].includes(returnType) ? '' : 'return ';
        const handlerMethod = method.static ? 'runStatic' : 'run';
        this.printer.printLine(
          `${returnCmd}handler.${handlerMethod}<${returnType}>(this, '${method.name}', [${argNames}]);`,
        );
        this.printer.decreaseIndent();
        this.printer.printLine('}');
      }
      TypeUtils.extractCustomTypesFromParams(signature.params).forEach(
        this.referencedObjects.add,
        this.referencedObjects,
      );
      TypeUtils.extractCustomTypes(signature).forEach(this.referencedObjects.add, this.referencedObjects);
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  private extractPropertyType(p: Types.Property) {
    const i: Types.Interface = this.i;
    let pType: string;
    if (isEventHandler(p)) {
      // Sometimes event handlers with the same name may actually handle different
      // events in different interfaces. For example, onerror handles ErrorEvent
      // normally, but in SVGSVGElement it handles SVGError event instead.
      const eType = toIType(p.eventHandler ? this.components.getEventTypeInInterface(p.eventHandler!, i) : 'Event');
      this.referencedObjects.add(nameWithForwardedTypes(i, true).slice(1)).add(eType.slice(1));
      pType = `(this: ${nameWithForwardedTypes(i, true)}, ev: ${eType}) => any`;
      if (typeof p.type === 'string' && !p.type.endsWith('NonNull')) {
        pType = `(${pType}) | null`;
      }
    } else {
      pType = TypeUtils.convertDomTypeToTsType(p, true);
      TypeUtils.extractCustomTypes(p).forEach(this.referencedObjects.add, this.referencedObjects);
    }
    pType = p.nullable ? makeNullable(pType) : pType;
    const isRequired = p.required === undefined || p.required === 1;
    if (!isRequired) {
      pType += ' | undefined';
    }
    return pType;
  }

  private createSignature(method: Types.Method, signature: Types.Signature) {
    const isStatic = !!method.static;
    const args = signature.params ? ParamUtils.paramsToString(signature.params, true) : '';
    let returnType = TypeUtils.convertDomTypeToTsType(signature, true);
    returnType = signature.nullable ? makeNullable(returnType) : returnType;
    return `${isStatic ? 'static ' : ''}${method.name || ''}(${args}): ${returnType}`;
  }

  private printEventHandlerMethods() {
    const eventHandlersToPrint = this.eventHandlersToPrint();
    if (!eventHandlersToPrint.length) return;

    this.printer.printSeparatorLine();
    for (const { addOrRemove, optionsType, iParent } of eventHandlersToPrint) {
      const methodName = `${addOrRemove}EventListener`;
      const args = `type: string, listener: IEventListener, options?: boolean | ${optionsType}`;
      this.printTypedEventHandler(addOrRemove, iParent, optionsType);
      if (this.skipImplementation) {
        this.printer.printLine(`${methodName}(${args}): void;`);
      } else {
        this.printer.printLine(`public ${methodName}(${args}): void {`);
        this.printer.printLine(`  handler.run<void>(this, '${methodName}', [type, listener, options]);`);
        this.printer.printLine(`}`);
      }
      this.referencedObjects.add('EventListener').add(optionsType.slice(1));
    }
  }

  private eventHandlersToPrint() {
    const i: Types.Interface = this.i;
    const hasEventListener = this.components.iNameToEhList[i.name] && this.components.iNameToEhList[i.name].length;
    const ehParentCount = this.components.iNameToEhParents[i.name] && this.components.iNameToEhParents[i.name].length;
    const eventHandlers = [];
    for (const addOrRemove of ['add', 'remove']) {
      const optionsType = addOrRemove === 'add' ? 'IAddEventListenerOptions' : 'IEventListenerOptions';
      if (hasEventListener || ehParentCount > 1) {
        eventHandlers.push({ addOrRemove, optionsType, iParent: i });
      } else if (ehParentCount === 1) {
        eventHandlers.push({ addOrRemove, optionsType, iParent: this.components.iNameToEhParents[i.name][0] });
      }
    }
    return eventHandlers;
  }

  private printTypedEventHandler(addOrRemove: string, iParent: Types.Interface, optionsType: string) {
    const i: Types.Interface = this.i;
    const iParentName = toIType(iParent.name);
    const iThis = nameWithForwardedTypes(i, true);

    const scope = this.skipImplementation ? '' : 'public ';
    const methodName = `${addOrRemove}EventListener`;
    const eventMapName = `${iParentName}EventMap`;
    const extender = `extends keyof ${eventMapName}`;
    const listener = `(this: ${iThis}, ev: ${eventMapName}[K]) => any`;
    const options = `boolean | ${optionsType}`;
    const args = `type: K, listener: ${listener}, options?: ${options}`;
    this.printer.printLine(`${scope}${methodName}<K ${extender}>(${args}): void;`);
    this.referencedObjects.add(eventMapName.slice(1)).add(iThis.slice(1));
  }

  private printIndexers() {
    const i: Types.Interface = this.i;
    this.indexers.forEach(m => {
      const indexer = m.signatures[0].params![0];
      const firstTypeParam = i.typeParameters && i.typeParameters[0];
      const extendedType = firstTypeParam && firstTypeParam.extends ? firstTypeParam.name : null;
      const tsType1 = TypeUtils.convertDomTypeToTsType(indexer);
      const typeObj2 = {
        type: m.signatures[0].type,
        subtype: m.signatures[0].subtype,
        nullable: undefined,
      };
      const tsType2 = TypeUtils.convertDomTypeToTsType(typeObj2, !extendedType);
      this.printer.printSeparatorLine();
      this.printer.printLine(`[${indexer.name}: ${tsType1}]: ${tsType2};`);
    });
  }

  // To decide if a given method is an indexer and should be emited
  private hasIndexerSignature(meth: Types.AnonymousMethod) {
    const i: Types.Interface = this.i;
    if (meth.getter && meth.signatures && meth.signatures[0].params && meth.signatures[0].params!.length === 1) {
      // TypeScript array indexer can only be number or string
      // for string, it must return a more generic type then all
      // the other properties, following the Dictionary pattern
      switch (TypeUtils.convertDomTypeToTsType(meth.signatures[0].params![0])) {
        case 'number':
          return true;
        case 'string':
          if (TypeUtils.convertDomTypeToTsType(meth.signatures[0]) === 'any') {
            return true;
          }
          const sig = meth.signatures[0];
          const mTypes = distinct(
            (i.methods &&
              map(i.methods, m => (m.signatures && m.signatures.length && m.signatures[0].type) || 'void').filter(
                t => t !== 'void',
              )) ||
              [],
          );
          const amTypes = distinct(
            (i.anonymousMethods && i.anonymousMethods!.map(m => m.signatures[0].type).filter(t => t !== 'void')) || [],
          ); // |>  Array.distinct
          const pTypes = distinct((i.properties && map(i.properties, m => m.type).filter(t => t !== 'void')) || []); // |>  Array.distinct

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

  private hasSignatureParams(m: Types.AnonymousMethod) {
    const signatures = m.signatures;
    if (!signatures || !signatures.length) return false;
    if (!signatures[0].params || signatures[0].params!.length) return false;
    return !!signatures[0].params![0];
  }

  private printStaticMethods() {
    if (!this.staticMethods.length) return;
    this.printer.printSeparatorLine(this.skipImplementation ? '' : '// static methods');
    this.staticMethods.forEach(m => this.printMethod(m));
  }
}
