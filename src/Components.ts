import * as Types from './types';
import {
  arrayToMap,
  baseTypeConversionMap,
  distinct,
  flatMap,
  mapDefined,
  toNameMap,
  makeNullable,
  arrayify,
  makeArrayType,
  isEventHandler,
  toIType,
} from './utils';
import ComponentCleaner from './ComponentCleaner';
import ElementsMeta from './ElementsMeta';
import IComponents from './interfaces/IComponents';

const eventTypeMap: Record<string, string> = {
  abort: 'UIEvent',
  complete: 'Event',
  click: 'MouseEvent',
  error: 'ErrorEvent',
  load: 'Event',
  loadstart: 'Event',
  progress: 'ProgressEvent',
  readystatechange: 'ProgressEvent',
  resize: 'UIEvent',
  timeout: 'ProgressEvent',
};

const defaultEventType = 'Event';
const reservedTsKeywords: Set<string> = new Set(['default', 'delete', 'continue', 'arguments']);

export default class Components implements IComponents {
  public interfaces: Record<string, Types.Interface> = {};
  public enums: Record<string, Types.Enum> = {};
  public mixins: Record<string, Types.Interface> = {};
  public typedefs: Types.TypeDef[] = [];
  public namespaces: Types.Interface[] = [];
  public callbackFunctions: Record<string, Types.CallbackFunction> = {};
  public callbackInterfaces: Record<string, Types.Interface> = {};
  public dictionaries: Record<string, Types.Dictionary> = {};

  public allNonCallbackInterfaces: Types.Interface[];
  public allInterfaces: Types.Interface[];
  public allInterfacesMap: Record<string, Types.Interface>;
  public allLegacyWindowAliases: string[];
  public allDictionariesMap: Record<string, Types.Dictionary> = {};
  public allTypeDefsMap: Set<string>;
  public allCallbackFunctionsMap: Record<string, Types.CallbackFunction>;
  public allEnumsMap: Record<string, Types.Enum>;

  public distinctETypeList: string[];
  public iNameToEhList: Record<string, Types.EventHandler[]>;
  public iNameToAttributelessEhList: Record<string, any[]>;
  public iNameToEhParents: Record<string, Types.Interface[]>;
  public iNameToConstParents: Record<string, Types.Interface[]>;

  private eNameToEType: Record<string, string>;
  private iNameToIDependList: Record<string, string[]>;
  private iNameToConstList: Record<string, Types.Constant[]>;

  constructor(data?: IComponents) {
    if (data) {
      this.load(data);
    }
  }

  public load(data: IComponents) {
    this.interfaces = data ? data.interfaces : {};
    this.enums = data ? data.enums : {};
    this.mixins = data ? data.mixins : {};
    this.typedefs = data ? data.typedefs : [];
    this.namespaces = data ? data.namespaces : [];
    this.callbackFunctions = data ? data.callbackFunctions : {};
    this.callbackInterfaces = data ? data.callbackInterfaces : {};
    this.dictionaries = data ? data.dictionaries : {};
    this.initialize();
    return this;
  }

  public cleanup(): void {
    new ComponentCleaner(this, 'Window').run();
  }

  public toJSON(): IComponents {
    return {
      enums: this.enums,
      mixins: this.mixins,
      typedefs: this.typedefs,
      dictionaries: this.dictionaries,
      interfaces: this.interfaces,
      namespaces: this.namespaces,
      callbackFunctions: this.callbackFunctions,
      callbackInterfaces: this.callbackInterfaces,
    };
  }

  public getTagNameToElementNameMap() {
    type ITagType = 'active' | 'deprecated';
    type ITagsMap = { [status in ITagType]: Record<string, string> };
    const htmlResult: ITagsMap = { active: {}, deprecated: {} };
    const svgResult: ITagsMap = { active: {}, deprecated: {} };
    for (const i of this.allNonCallbackInterfaces) {
      const elementMeta = ElementsMeta.get(i.name);
      if (!elementMeta) continue;
      for (const tag of elementMeta.tags) {
        const status = tag.deprecated ? 'deprecated' : 'active';
        if (elementMeta.namespace === 'SVG') {
          svgResult[status][tag.name] = elementMeta.name;
        } else {
          htmlResult[status][tag.name] = elementMeta.name;
        }
      }
    }
    return { htmlResult, svgResult };
  }

  public getExtendList(iName: string): string[] {
    const i = this.allInterfacesMap[iName];
    if (!i || !i.extends || i.extends === 'Object') return [];
    return this.getExtendList(i.extends).concat(i.extends);
  }

  public getImplementList(iName: string) {
    const i = this.allInterfacesMap[iName];
    return (i && i.implements) || [];
  }

  public getParentEventHandler(i: Types.Interface): Types.Interface[] {
    const hasEventListener = this.iNameToEhList[i.name] && this.iNameToEhList[i.name].length;
    if (hasEventListener) {
      return [i];
    }
    const ehParents = this.getParentsWithEventHandler(i);
    if (ehParents.length > 1) {
      return [i];
    }
    return ehParents;
  }

  public getParentsWithEventHandler(inter: Types.Interface) {
    if (!inter.name) {
      throw new Error(`Unexpected nameless object: ${JSON.stringify(inter)}`);
    }

    const iExtends = inter.extends && inter.extends.replace(/<.*>$/, '');
    const parentWithEventHandler =
      (this.allInterfacesMap[iExtends] && this.getParentEventHandler(this.allInterfacesMap[iExtends])) || [];
    const mixinsWithEventHandler = flatMap(inter.implements || [], i =>
      this.getParentEventHandler(this.allInterfacesMap[i]),
    );

    return distinct(parentWithEventHandler.concat(mixinsWithEventHandler));
  }

  public getParentConstant(i: Types.Interface): Types.Interface[] {
    const hasConst = this.iNameToConstList[i.name] && this.iNameToConstList[i.name].length;
    return (hasConst ? [i] : []).concat(this.getParentsWithConstant(i));
  }

  public getParentsWithConstant(inter: Types.Interface) {
    const mixinsWithConstant = flatMap(inter.implements || [], v => this.getParentConstant(this.allInterfacesMap[v]));
    return distinct(mixinsWithConstant);
  }

  public getEventTypeInInterface(eName: string, i: Types.Interface) {
    if (i.events) {
      const event = i.events.event.find(e => e.name === eName);
      if (event && event.type) {
        return this.getGenericEventType(event.type, i);
      }
    }
    if (i['attributeless-events']) {
      const event = i['attributeless-events'].event.find(e => e.name === eName);
      if (event && event.type) {
        return this.getGenericEventType(event.type, i);
      }
    }
    return this.getGenericEventType(this.eNameToEType[eName], i) || 'Event';
  }

  // A covariant EventHandler is one that is defined in a parent interface as then redefined in current interface with a more specific argument types
  // These patterns are unsafe, and flagged as error under --strictFunctionTypes.
  // Here we know the property is already defined on the interface, we elide its declaration if the parent has the same handler defined
  public isCovariantEventHandler(inter: Types.Interface, p: Types.Property) {
    return (
      isEventHandler(p) &&
      this.iNameToEhParents[inter.name] &&
      this.iNameToEhParents[inter.name].length > 0 &&
      !!this.iNameToEhParents[inter.name].find(
        i =>
          this.iNameToEhList[i.name] &&
          this.iNameToEhList[i.name].length > 0 &&
          !!this.iNameToEhList[i.name].find(e => e.name === p.name),
      )
    );
  }

  public convertDomTypeToTsTypeSimple(objDomType: string): string {
    if (objDomType === 'sequence') {
      // && flavor === Flavor.ES6Iterators
      return 'Iterable';
    }
    if (baseTypeConversionMap.has(objDomType)) {
      return baseTypeConversionMap.get(objDomType)!;
    }
    switch (objDomType) {
      case 'DOMHighResTimeStamp':
        return 'number';
      case 'DOMTimeStamp':
        return 'number';
      case 'EventListener':
        return 'EventListenerOrEventListenerObject';
    }
    // Name of an interface / enum / dict. Just return itself
    if (
      this.allInterfacesMap[objDomType] ||
      this.allLegacyWindowAliases.includes(objDomType) ||
      this.allCallbackFunctionsMap[objDomType] ||
      this.allDictionariesMap[objDomType] ||
      this.allEnumsMap[objDomType]
    ) {
      return objDomType;
    }
    // Name of a type alias. Just return itself
    if (this.allTypeDefsMap.has(objDomType)) return objDomType;

    // throw new Error(`Unknown DOM type: ${objDomType}`);
    console.log(`Unknown DOM type: ${objDomType}`);

    return objDomType;
  }

  public convertDomTypeToTsTypeWorker(
    obj: Types.Typed,
    convertToIType: boolean = false,
  ): { name: string; nullable: boolean } {
    let type;
    if (typeof obj.type === 'string') {
      const name = this.convertDomTypeToTsTypeSimple(obj.type);
      type = { name: convertToIType ? toIType(name) : name, nullable: !!obj.nullable };
    } else {
      const types = obj.type.map(t => {
        const typeObj = typeof t === 'string' ? { type: t } : t;
        return this.convertDomTypeToTsTypeWorker(typeObj, convertToIType);
      });
      const isAny = types.find(t => t.name === 'any');
      if (isAny) {
        type = {
          name: 'any',
          nullable: false,
        };
      } else {
        type = {
          name: types.map(t => t.name).join(' | '),
          nullable: !!types.find(t => t.nullable) || !!obj.nullable,
        };
      }
    }

    const subtypes = arrayify(obj.subtype).map(t => this.convertDomTypeToTsTypeWorker(t, convertToIType));
    const subtypeString = subtypes
      .map(subtype => (subtype.nullable ? makeNullable(subtype.name) : subtype.name))
      .join(', ');

    return {
      name:
        type.name === 'Array' && subtypeString
          ? makeArrayType(subtypeString, obj)
          : `${type.name}${subtypeString ? `<${subtypeString}>` : ''}`,
      nullable: type.nullable,
    };
  }

  public matchParamMethodSignature(
    m: Types.Method,
    expectedMName: string,
    expectedMType: string,
    expectedParamType: string | string[],
  ) {
    if (!Array.isArray(expectedParamType)) {
      expectedParamType = [expectedParamType];
    }

    return (
      expectedMName === m.name &&
      m.signature &&
      m.signature.length === 1 &&
      this.convertDomTypeToTsType(m.signature[0]) === expectedMType &&
      m.signature[0].param &&
      m.signature[0].param!.length === expectedParamType.length &&
      expectedParamType.every((pt, idx) => this.convertDomTypeToTsType(m.signature[0].param![idx]) === pt)
    );
  }

  /// Get typescript type using object dom type, object name, and it's associated interface name
  public convertDomTypeToTsType(obj: Types.Typed, convertToIType: boolean = false): string {
    if (!obj.type) throw new Error(`Missing type ${JSON.stringify(obj)}`);
    const type = this.convertDomTypeToTsTypeWorker(obj, convertToIType);
    return type.nullable ? makeNullable(type.name) : type.name;
  }

  /// Determine if interface1 depends on interface2
  public dependsOn(i1Name: string, i2Name: string) {
    return this.iNameToIDependList[i1Name] ? this.iNameToIDependList[i1Name].includes(i2Name) : i2Name === 'Object';
  }

  /// Generate the parameters string for function signatures
  public paramsToString(ps: Types.Param[], convertToIType: boolean = false, isUnused: boolean = false) {
    return ps.map(p => this.paramToString(p, convertToIType, isUnused)).join(', ');
  }

  public paramNames(ps: Types.Param[]) {
    return ps.map(p => this.adjustParamName(p.name));
  }

  private paramToString(p: Types.Param, convertToIType: boolean = false, isUnused: boolean = false) {
    if (p.type === 'Promise' && !Array.isArray(p.subtype)) {
      p = { name: p.name, type: [p.subtype!, p] };
    }
    const isOptional = !p.variadic && p.optional;
    const pType = this.convertDomTypeToTsType(p, convertToIType);
    const variadicParams = p.variadic && pType.indexOf('|') !== -1;
    return (
      (p.variadic ? '...' : '') +
      this.adjustParamName(p.name, isUnused) +
      (isOptional ? '?: ' : ': ') +
      (variadicParams ? '(' : '') +
      pType +
      (variadicParams ? ')' : '') +
      (p.variadic ? '[]' : '')
    );
  }

  /// Parameter cannot be named "default" in JavaScript/Typescript so we need to rename it.
  private adjustParamName(name: string, isUnused: boolean = false) {
    if (reservedTsKeywords.has(name)) throw new Error(`${name} is a reserved typescript keyword`);
    return isUnused ? `${name}_` : name;
  }

  private getGenericEventType(baseName: string, i: Types.Interface) {
    if (baseName === 'ProgressEvent' && !i.mixin) {
      return `${baseName}<${i.name}>`;
    }
    return baseName;
  }

  private initialize() {
    // Global print target
    this.allNonCallbackInterfaces = Object.values(this.interfaces).concat(Object.values(this.mixins));

    this.allInterfaces = Object.values(this.interfaces).concat(
      Object.values(this.callbackInterfaces),
      Object.values(this.mixins),
    );

    this.allInterfacesMap = toNameMap(this.allInterfaces);
    this.allLegacyWindowAliases = flatMap(this.allInterfaces, i => i['legacy-window-alias']);
    this.allDictionariesMap = this.dictionaries;
    this.allEnumsMap = this.enums;
    this.allCallbackFunctionsMap = this.callbackFunctions;
    this.allTypeDefsMap = new Set(this.typedefs.map(td => td['new-type']));

    /// Event name to event type map
    this.eNameToEType = arrayToMap(
      flatMap(this.allNonCallbackInterfaces, i => (i.events ? i.events.event : [])),
      e => e.name,
      e => eventTypeMap[e.name] || e.type,
    );

    /// Interface name to all its implemented / inherited interfaces name list map
    /// e.g. If i1 depends on i2, i2 should be in dependencyMap.[i1.Name]
    this.iNameToIDependList = arrayToMap(
      this.allNonCallbackInterfaces,
      i => i.name,
      i => this.getExtendList(i.name).concat(this.getImplementList(i.name)),
    );

    /// Distinct event type list, used in the "createEvent" function
    this.distinctETypeList = distinct(
      flatMap(this.allNonCallbackInterfaces, i => (i.events ? i.events.event.map(e => e.type) : [])).concat(
        this.allNonCallbackInterfaces
          .filter(i => i.extends && i.extends.endsWith('Event') && i.name.endsWith('Event'))
          .map(i => i.name),
      ),
    ).sort();

    /// Interface name to its related eventhandler name list map
    /// Note:
    /// In the xml file, each event handler has
    /// 1. eventhandler name: "onready", "onabort" etc.
    /// 2. the event name that it handles: "ready", "SVGAbort" etc.
    /// And they don't just differ by an "on" prefix!
    this.iNameToEhList = arrayToMap(
      this.allInterfaces,
      i => i.name,
      i =>
        !i.properties
          ? []
          : mapDefined<Types.Property, Types.EventHandler>(Object.values(i.properties.property), p => {
              const eventName = p['event-handler']!;
              if (eventName === undefined) return undefined;
              const eType = this.eNameToEType[eventName] || defaultEventType;
              const eventType = eType === 'Event' || this.dependsOn(eType, 'Event') ? eType : defaultEventType;
              return { name: p.name, eventName, eventType };
            }),
    );

    this.iNameToAttributelessEhList = arrayToMap(
      this.allInterfaces,
      i => i.name,
      i =>
        !i['attributeless-events']
          ? []
          : i['attributeless-events'].event.map(e => {
              return { name: `on${e.name}`, eventName: e.name, eventType: e.type };
            }),
    );

    this.iNameToConstList = arrayToMap(
      this.allInterfaces,
      i => i.name,
      i => (!i.constants ? [] : Object.values(i.constants.constant)),
    );

    // Map of interface.Name -> List of base interfaces with event handlers
    this.iNameToEhParents = arrayToMap(this.allInterfaces, i => i.name, this.getParentsWithEventHandler.bind(this));

    this.iNameToConstParents = arrayToMap(this.allInterfaces, i => i.name, this.getParentsWithConstant.bind(this));
  }
}
