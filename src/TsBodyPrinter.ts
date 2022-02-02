import { compareName, distinct, isEventHandler, makeNullable, map, nameWithForwardedTypes, toIType } from './utils';
import * as Types from './Types';
import Printer from './Printer';
import Components from './Components';
import TsIteratorExtractor from './TsIteratorExtractor';
import TypeUtils from './TypeUtils';
import ParamUtils from './ParamUtils';
import IDomType, { DomType } from './interfaces/IDomType';
import IBuildType, { BuildType } from './interfaces/IBuildType';

interface IOptions {
  domType?: IDomType;
  buildType?: IBuildType;
  skipImplementation?: boolean;
  skipConstructor?: boolean;
  skipEventHandlers?: boolean;
}

export default class TsBodyPrinter {
  public readonly constants: Types.Constant[];
  public readonly properties: Types.Property[];
  public readonly methods: Types.Method[];
  public readonly staticMethods: Types.Method[];
  public readonly indexers: Types.Method[];
  public readonly referencedObjects: Set<string> = new Set();
  public readonly referencedCreateMethods: Set<string> = new Set();
  public readonly iteratorExtractor: TsIteratorExtractor;

  private readonly i: Types.Interface;
  private readonly printer: Printer;
  private readonly components: Components;
  private readonly handler: string;
  private readonly domType: IDomType;
  private readonly buildType: IBuildType;

  private readonly skipImplementation: boolean = false;
  private readonly skipConstructor: boolean = false;
  private readonly skipEventHandlers: boolean = false;

  constructor(i: Types.Interface, printer: Printer, components: Components, options: IOptions = {}) {
    this.i = i;
    this.printer = new Printer(printer);
    this.components = components;

    this.domType = options.domType || DomType.standard;
    this.buildType = options.buildType || BuildType.base;
    this.handler = `${this.domType}Handler`;

    this.skipImplementation = options.skipImplementation || false;
    this.skipConstructor = options.skipConstructor || false;
    this.skipEventHandlers = options.skipEventHandlers || false;

    this.constants = Object.values(i.constants || {}).sort(compareName);

    this.properties = Object.values(i.properties || {})
      .filter(m => !this.skipImplementation || !m.static)
      .filter(p => !this.components.isCovariantEventHandler(i, p))
      .filter(p => this.buildType !== BuildType.impl || this.isAbstract(p))
      .sort(compareName);

    this.methods = Object.values(i.methods || {})
      .filter(m => !m.static)
      .filter(m => this.buildType !== BuildType.impl || this.isAbstract(m));

    if (this.buildType === BuildType.base) {
      if (this.properties.find((p: any) => p.stringifier)) {
        this.methods.push({
          name: 'toString',
          signatures: [{ type: 'DOMString' }],
        });
      }
      if (i.anonymousMethods && i.anonymousMethods.find(m => m.stringifier)) {
        this.methods.push({
          name: 'toString',
          signatures: [{ type: 'DOMString' }],
        });
      }
    }

    this.methods = this.methods.sort(compareName);

    this.staticMethods = Object.values(i.methods || {})
      .filter(m => !!m.static)
      .filter(p => this.buildType !== BuildType.impl || this.isAbstract(p))
      .sort(compareName);

    this.indexers = [];
    const allExtendedMethods = Object.values(i.methods);

    if (i.extends && i.extends !== 'Object') {
      const parent = this.components.interfaces[i.extends];
      allExtendedMethods.push(...Object.values(parent.methods));
    }

    if (i.implements && i.implements.length) {
      for (const impl of i.implements) {
        const isolate = this.components.awaitedIsolates[impl];
        if (!isolate) continue;
        allExtendedMethods.push(...Object.values(isolate.methods));
      }
    }

    for (const method of allExtendedMethods) {
      if (!this.hasIndexerSignature(method)) continue;
      const [signature] = method.signatures;
      const indexType = TypeUtils.convertDomTypeToTsType(signature.params[0]);
      const exists = this.indexers.find(x => TypeUtils.convertDomTypeToTsType(x.signatures[0].params[0]) === indexType);
      if (exists) continue;

      const returnTypes = TypeUtils.extractCustomTypes(signature);
      for (const returnType of returnTypes) this.referencedObjects.add(returnType);
      this.indexers.push(method);
    }

    const { domType, buildType, skipImplementation } = this;
    const iteratorOptions = { domType, buildType, skipImplementation };
    this.iteratorExtractor = new TsIteratorExtractor(this.i, this.components, iteratorOptions);
  }

  public get didPrint() {
    return this.printer.didPrint;
  }

  public printAll(): void {
    if (this.buildType === BuildType.base) {
      this.printConstants();
    }
    this.printConstructor();
    this.printProperties();
    this.printMethods();
    if (this.buildType === BuildType.base) {
      this.printPromiseLike();
    }
    if (!this.skipEventHandlers) this.printEventHandlerMethods();

    const iterators = this.iteratorExtractor.run(m => this.printMethod(m));
    if (this.buildType === BuildType.base && (iterators || this.indexers.length)) {
      this.printer.printSeparatorLine();
      this.printer.printLines(iterators);
      this.printIndexers();
    }

    this.printInspect();
    this.printStaticMethods();
  }

  public printAbstractImplementations(): void {
    this.printConstructor();
    this.printProperties();
    this.printMethods();
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
      if (this.buildType !== BuildType.base && !isChildClass) return;

      this.printer.printLine(`constructor(${args}) {`);
      this.printer.increaseIndent();
      if (isChildClass) {
        this.printer.printLine(`super(${signature ? ParamUtils.paramNames(signature.params!, true).join(', ') : ''});`);
      }
      if (this.buildType === BuildType.base) {
        if (this.i.isAwaitedNodePointer || this.iteratorExtractor.hasIterable()) {
          this.printer.printLine(`setState(this, {`);
          this.printer.increaseIndent();
          this.printer.printLine(`createInstanceName: 'create${i.name}',`);
          // if iterable
          if (this.iteratorExtractor.hasIterable() && !this.iteratorExtractor.hasMaplikeSequence) {
            const interableInterface = this.iteratorExtractor.getIteratableInterface();
            if (interableInterface.startsWith('I')) {
              this.printer.printLine(`createIterableName: 'create${interableInterface.substr(1)}',`);
            } else {
              this.printer.printLine(`createIterableName: '${interableInterface}',`);
            }
          }
          this.printer.decreaseIndent();
          this.printer.printLine(`});`);
        }

        if (this.indexers?.length) {
          const indexers = this.indexers.map(x => ({
            m: x,
            indexType: TypeUtils.convertDomTypeToTsType(x.signatures[0].params![0]),
          }));

          const integerIndexer = indexers.find(x => x.indexType === 'number');
          const stringIndexer = indexers.find(x => x.indexType === 'string');
          this.printer.printSeparatorLine('// proxy supports indexed property access');
          this.printer.printLine(`const proxy = new Proxy(this, {`);
          this.printer.increaseIndent();
          this.printer.printLine(`get(target, prop) {`);
          this.printer.increaseIndent();
          this.printer.printLine(`if (prop in target) {`);
          this.printer.increaseIndent();
          this.printer.printLine(`// @ts-ignore`);
          this.printer.printLine(`const value: any = target[prop];`);
          this.printer.printLine(`if (typeof value === 'function') return value.bind(target);`);
          this.printer.printLine(`return value;`);
          this.printer.decreaseIndent();
          this.printer.printLine(`}`);

          if (integerIndexer) {
            this.printer.printLine();
            this.printer.printLine(`// delegate to indexer property`);
            this.printer.printLine(
              `if ((typeof prop === 'string' || typeof prop === 'number') && !isNaN(prop as unknown as number)) {`,
            );
            this.printer.increaseIndent();
            this.printer.printLine(`const param = parseInt(prop as string, 10);`);
            this.printer.printLine(`return target.${integerIndexer.m.name}(param);`);
            this.printer.decreaseIndent();
            this.printer.printLine(`}`);
          }
          if (stringIndexer) {
            this.printer.printLine();
            this.printer.printLine(`// delegate to string indexer`);
            this.printer.printLine(`if(typeof prop === 'string') {`);
            this.printer.increaseIndent();
            this.printer.printLine(`return target.${stringIndexer.m.name}(prop as string);`);
            this.printer.decreaseIndent();
            this.printer.printLine(`}`);
          }

          this.printer.decreaseIndent();
          this.printer.printLine('},');
          this.printer.decreaseIndent();
          this.printer.printLine('});');
          this.printer.printLine();
          this.printer.printLine('return proxy;');
        }
      }

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
    this.printer.printSeparatorLine(this.skipImplementation ? '' : '\n// properties');
    (properties || this.properties).forEach(p => this.printProperty(p, forceOptional));
  }

  public printMethods() {
    if (!this.methods.length) return;
    this.printer.printSeparatorLine(this.skipImplementation ? '' : '\n// methods');
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
    const i: Types.Interface = this.i;
    const isReadonly = property.readOnly === 1;
    const isAbstract = this.isAbstract(property);
    const genericsType: string = this.extractPropertyGenericsType(property);
    const genericsTypeCleaned: string = genericsType.replace(' | any', '');
    const returnType: string = this.extractPropertyReturnType(property);

    let abstractClass = returnType.replace(' | any', '');
    if (isAbstract && property.compromiseType && abstractClass.includes('|')) {
      const officialType = property.compromiseType!.find(x => x.isOfficial === 1)!;
      abstractClass = TypeUtils.convertDomTypeToTsType(officialType, true);
    } else if (isAbstract && abstractClass.includes('Promise')) {
      abstractClass = abstractClass.replace('Promise<', '').replace('>', '');
    }
    const abstractClassCleaned = abstractClass.replace(/^I([A-Z])/, '$1');

    if (this.skipImplementation) {
      const isRequired = forceOptional ? false : property.required === undefined || property.required === 1;
      const requiredModifier = isRequired ? '' : '?';
      const readOnlyModifier = isReadonly ? 'readonly ' : '';
      this.printer.printLine(`${readOnlyModifier}${property.name}${requiredModifier}: ${returnType};`);
      return;
    }

    const hasNullDefault = this.extractPropertyTypeHasNullDefault(property);
    this.printer.printSeparatorLine();
    this.printer.printLine(`public get ${property.name}(): ${returnType} {`);
    this.printer.increaseIndent();
    if (isAbstract && this.buildType === BuildType.base) {
      this.printer.printLine(`throw new Error('${i.name}.${property.name} getter not implemented');`);
    } else if (isAbstract) {
      this.printer.printLine(`const { awaitedPath, awaitedOptions } = getState(this);`);
      this.printer.printLine(
        `return create${abstractClassCleaned}(awaitedPath.addProperty(this, '${property.name}'), awaitedOptions);`,
      );
      this.referencedCreateMethods.add(abstractClassCleaned);
    } else {
      this.printer.printLine(
        `return ${this.handler}.getProperty<${genericsTypeCleaned}>(this, '${property.name}', ${hasNullDefault});`,
      );
    }
    this.printer.decreaseIndent();
    this.printer.printLine('}');

    if (!isReadonly) {
      this.printer.printSeparatorLine();
      this.printer.printLine(`public set ${property.name}(value: ${genericsType}) {`);
      this.printer.increaseIndent();
      if (isAbstract) {
        this.printer.printLine(`throw new Error('${i.name}.${property.name} setter not implemented');`);
      } else {
        this.printer.printLine(`${this.handler}.setProperty<${genericsTypeCleaned}>(this, '${property.name}', value);`);
      }
      this.printer.decreaseIndent();
      this.printer.printLine('}');
    }
  }

  public printMethod(method: Types.Method) {
    const i: Types.Interface = this.i;
    const isAbstract = this.isAbstract(method);

    method.signatures.forEach(signature => {
      const signatureStr = this.createMethodSignature(method, signature);
      if (this.skipImplementation && method.static) {
        this.printer.printLine(`// ${signatureStr}`);
        return;
      }

      if (this.skipImplementation) {
        this.printer.printLine(`${signatureStr};`);
      } else {
        this.printer.printSeparatorLine();
        const argNames = signature.params ? ParamUtils.paramNames(signature.params).join(', ') : '';
        const valueType = this.extractMethodValueType(method, signature);
        const returnType = this.extractMethodReturnType(method, signature);
        const returnCmd = ['void', 'any'].includes(returnType) ? '' : 'return ';
        const handlerMethod = method.static ? 'runStatic' : 'runMethod';
        this.printer.printLine(`public ${signatureStr} {`);
        this.printer.increaseIndent();
        if (isAbstract && this.buildType === BuildType.base) {
          this.printer.printLine(`throw new Error('${i.name}.${method.name} not implemented');`);
        } else if (isAbstract) {
          const returnClass = returnType.replace(/^I([A-Z])/, '$1');
          this.printer.printLine(`const { awaitedPath, awaitedOptions } = getState(this);`);
          this.printer.printLine(
            `return create${returnClass}(awaitedPath.addMethod(this, '${method.name}', ${argNames}), awaitedOptions);`,
          );
          this.referencedCreateMethods.add(returnClass);
        } else {
          this.printer.printLine(
            `${returnCmd}${this.handler}.${handlerMethod}<${valueType}>(this, '${method.name}', [${argNames}]);`,
          );
        }
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

  public printPromiseLike() {
    if (this.buildType !== BuildType.base || this.skipImplementation || !this.i.isAwaitedNodePointer) return;
    this.printer.printSeparatorLine();

    this.printer.printLine(
      `public then<TResult1 = I${this.i.name}, TResult2 = never>(onfulfilled?: ((value: I${this.i.name}) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {`,
    );
    this.printer.increaseIndent();
    this.printer.printLine(`return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);`);
    this.printer.decreaseIndent();
    this.printer.printLine('}');
  }

  public printInspect() {
    if (this.buildType !== BuildType.base || this.skipImplementation || this.skipConstructor) return;
    this.printer.printSeparatorLine();

    this.printer.printLine(`public [Symbol.for('nodejs.util.inspect.custom')]() {`);
    this.printer.increaseIndent();
    const i = this.i;
    this.printer.printLine(`return inspectInstanceProperties(this, ${i.name}PropertyKeys, ${i.name}ConstantKeys);`);
    this.printer.decreaseIndent();
    this.printer.printLine('}');
  }
  //////////////////////////////////////////////////////////////////////////////

  private extractMethodReturnType(method: Types.Method, signature: Types.Signature) {
    const isAbstract = this.isAbstract(method);
    let mType = TypeUtils.convertDomTypeToTsType(signature, true);
    mType = signature.nullable ? makeNullable(mType) : mType;
    if (this.domType === DomType.awaited) {
      if (isAbstract) {
        mType = mType.replace(/^Promise<(.+)>/, '$1').replace(' | null', '');
      } else if (!mType.startsWith('Promise<')) {
        mType = `Promise<${mType}>`;
      }
    }
    return mType;
  }

  private extractMethodValueType(method: Types.Method, signature: Types.Signature) {
    const isAbstract = this.isAbstract(method);
    let mType = TypeUtils.convertDomTypeToTsType(signature, true);
    mType = signature.nullable ? makeNullable(mType) : mType;
    if (this.domType === DomType.awaited) {
      if (isAbstract) {
        mType = mType.replace(' | null', '');
      } else if (mType.startsWith('Promise<')) {
        mType = mType.replace(/Promise<(\w+)>/, '$1');
      }
    }
    return mType;
  }

  private extractPropertyReturnType(p: Types.Property): string {
    const i: Types.Interface = this.i;
    const isReadonly = p.readOnly === 1;
    const isRequired = p.required === undefined || p.required === 1;

    // if compromise type, work around case where one part is abstract, and rest is not
    if (p.compromiseType) {
      const parts: string[] = [];
      for (const cType of p.compromiseType) {
        let typePart = TypeUtils.convertDomTypeToTsType(cType, true);
        if (this.domType === DomType.awaited) {
          if (cType.isAbstract === 1) {
            typePart.replace(' | null', '');
          } else {
            if (!typePart.startsWith('Promise<')) typePart = `Promise<${typePart}>`;
          }
        } else if (!isRequired) {
          typePart += ' | undefined';
        }
        parts.push(typePart);
      }
      TypeUtils.extractCustomTypes(p).forEach(this.referencedObjects.add, this.referencedObjects);
      let pType = parts.join(' | ');
      if (!isReadonly) {
        pType += ' | any';
      }
      return pType;
    }

    const isAbstract = this.isAbstract(p);
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

    if (this.domType === DomType.awaited) {
      if (isAbstract) {
        pType = pType.replace(' | null', '');
      } else {
        pType = pType.startsWith('Promise<') ? pType : `Promise<${pType}>`;
        if (!isReadonly) {
          pType += ' | any';
        }
      }
    } else {
      if (!isRequired) {
        pType += ' | undefined';
      }
    }
    return pType;
  }

  private extractPropertyGenericsType(p: Types.Property) {
    const i: Types.Interface = this.i;
    const isAbstract = this.isAbstract(p);
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
      const officialType = p.compromiseType?.find(x => x.isOfficial === 1);
      pType = TypeUtils.convertDomTypeToTsType(officialType || p, true);

      TypeUtils.extractCustomTypes(p).forEach(this.referencedObjects.add, this.referencedObjects);
      const isReadonly = p.readOnly === 1;
      if (!isAbstract && !isReadonly) {
        pType += ' | any';
      }
    }

    return pType;
  }

  private extractPropertyTypeHasNullDefault(p: Types.Property) {
    if (isEventHandler(p)) {
      if (typeof p.type === 'string' && !p.type.endsWith('NonNull')) {
        return true;
      }
    }
    return !!p.nullable;
  }

  private createMethodSignature(method: Types.Method, signature: Types.Signature) {
    const isStatic = !!method.static;
    const args = signature.params ? ParamUtils.paramsToString(signature.params, true) : '';
    const returnType = this.extractMethodReturnType(method, signature);
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
        this.printer.printLine(`  ${this.handler}.runMethod<void>(this, '${methodName}', [type, listener, options]);`);
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
    this.indexers.forEach(m => {
      if (!this.isTypescriptCompatibleIndexer(m)) {
        return;
      }
      const indexer = m.signatures[0].params![0];
      const tsType1 = TypeUtils.convertDomTypeToTsType(indexer);
      const tsType2 = this.getIndexerReturnType(m);

      this.printer.printSeparatorLine();
      this.printer.printLine(`[${indexer.name}: ${tsType1}]: ${tsType2};`);
    });
  }

  private getIndexerReturnType(method: Types.Method): string {
    const i: Types.Interface = this.i;
    const firstTypeParam = i.typeParameters && i.typeParameters[0];
    const extendedType = firstTypeParam && firstTypeParam.extends ? firstTypeParam.name : null;
    const typeObj2 = {
      type: method.signatures[0].type,
      subtype: method.signatures[0].subtype,
      nullable: undefined,
    };
    return TypeUtils.convertDomTypeToTsType(typeObj2, !extendedType);
  }

  // To decide if a given method is an indexer and should be emitted
  private hasIndexerSignature(meth: Types.Method) {
    if (meth.getter && meth.signatures && meth.signatures[0].params && meth.signatures[0].params!.length === 1) {
      // TypeScript array indexer can only be number or string
      switch (TypeUtils.convertDomTypeToTsType(meth.signatures[0].params![0])) {
        case 'number':
          return true;
        case 'string':
          return true;
      }
    }
    return false;
  }

  private isTypescriptCompatibleIndexer(meth: Types.Method) {
    // Typescript string indexers must return a more generic type then all
    // the other properties, following the Dictionary pattern
    const i: Types.Interface = this.i;
    if (TypeUtils.convertDomTypeToTsType(meth.signatures[0]) === 'any') {
      return true;
    }
    const tsType = TypeUtils.convertDomTypeToTsType(meth.signatures[0].params![0]);
    if (tsType === 'number') {
      return true;
    }
    // if string, need to ensure Typescript will accept it
    if (tsType !== 'string') return false;
    const sig = meth.signatures[0];
    const mTypes = distinct(
      (i.methods &&
        map(i.methods, m => (m.signatures && m.signatures.length && m.signatures[0].type) || 'void').filter(
          t => t !== 'void',
        )) ||
        [],
    );
    const amTypes = distinct(
      (i.anonymousMethods && i.anonymousMethods.map(m => m.signatures[0].type).filter(t => t !== 'void')) || [],
    ); // |>  Array.distinct
    const pTypes = distinct((i.properties && map(i.properties, m => m.type).filter(t => t !== 'void')) || []); // |>  Array.distinct
    if (mTypes.length === 0 && amTypes.length === 1 && pTypes.length === 0) {
      return amTypes[0] === sig.type;
    }
    if (mTypes.length === 1 && amTypes.length === 1 && pTypes.length === 0) {
      return mTypes[0] === amTypes[0] && amTypes[0] === sig.type;
    }
    if (mTypes.length === 0 && amTypes.length === 1 && pTypes.length === 1) {
      return amTypes[0] === pTypes[0] && amTypes[0] === sig.type;
    }
    if (mTypes.length === 1 && amTypes.length === 1 && pTypes.length === 1) {
      return mTypes[0] === amTypes[0] && amTypes[0] === pTypes[0] && amTypes[0] === sig.type;
    }
    return false;
  }

  private isAbstract(property: Types.Property | Types.Method) {
    const isAwaited = this.domType === DomType.awaited;
    return isAwaited && property.isAbstract === 1;
  }

  private printStaticMethods() {
    if (!this.staticMethods.length) return;
    this.printer.printSeparatorLine(this.skipImplementation ? '' : '// static methods');
    this.staticMethods.forEach(m => this.printMethod(m));
  }
}
