import * as Types from './types';
import { arrayToMap, distinct, flatMap, mapDefined, toNameMap, isEventHandler } from './utils';
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

export default class Components implements IComponents {
  public interfaces: Record<string, Types.Interface> = {};
  public enums: Record<string, Types.Enum> = {};
  public mixins: Record<string, Types.Interface> = {};
  public typedefs: Types.TypeDef[] = [];
  public callbackFunctions: Record<string, Types.CallbackFunction> = {};
  public callbackInterfaces: Record<string, Types.Interface> = {};
  public dictionaries: Record<string, Types.Dictionary> = {};
  public awaitedSupers: Record<string, Types.Interface>;
  public awaitedIsolates: Record<string, Types.Interface>;

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
    this.callbackFunctions = data ? data.callbackFunctions : {};
    this.callbackInterfaces = data ? data.callbackInterfaces : {};
    this.dictionaries = data ? data.dictionaries : {};
    this.awaitedSupers = data ? data.awaitedSupers || {} : {};
    this.awaitedIsolates = data ? data.awaitedIsolates || {} : {};

    this.initialize();
    return this;
  }

  public cleanup(componentFiltersPath?: string): Components {
    new ComponentCleaner(this, componentFiltersPath).run();
    return this;
  }

  public toJSON(): IComponents {
    return {
      enums: this.enums,
      mixins: this.mixins,
      typedefs: this.typedefs,
      dictionaries: this.dictionaries,
      interfaces: this.interfaces,
      callbackFunctions: this.callbackFunctions,
      callbackInterfaces: this.callbackInterfaces,
      awaitedSupers: Object.values(this.awaitedSupers).length ? this.awaitedSupers : undefined,
      awaitedIsolates: Object.values(this.awaitedIsolates).length ? this.awaitedIsolates : undefined,
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
    const mixinsWithEventHandler = flatMap(inter.implements || [], i => {
      return this.getParentEventHandler(this.allInterfacesMap[i]);
    });

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
      const event = i.events.find(e => e.name === eName);
      if (event && event.type) {
        return this.getGenericEventType(event.type, i);
      }
    }
    if (i.attributelessEvents) {
      const event = i.attributelessEvents.find(e => e.name === eName);
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

  /// Determine if interface1 depends on interface2
  public dependsOn(i1Name: string, i2Name: string) {
    return this.iNameToIDependList[i1Name] ? this.iNameToIDependList[i1Name].includes(i2Name) : i2Name === 'Object';
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
    this.allLegacyWindowAliases = flatMap(this.allInterfaces, i => i.legacyWindowAlias);
    this.allDictionariesMap = this.dictionaries;
    this.allEnumsMap = this.enums;
    this.allCallbackFunctionsMap = this.callbackFunctions;
    this.allTypeDefsMap = new Set(this.typedefs.map(td => td.newType));

    /// Event name to event type map
    this.eNameToEType = arrayToMap(
      flatMap(this.allNonCallbackInterfaces, i => i.events || []),
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
      flatMap(this.allNonCallbackInterfaces, i => (i.events ? i.events.map(e => e.type) : [])).concat(
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
          : mapDefined<Types.Property, Types.EventHandler>(Object.values(i.properties), p => {
              const eventName = p.eventHandler!;
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
        !i.attributelessEvents
          ? []
          : i.attributelessEvents.map(e => {
              return { name: `on${e.name}`, eventName: e.name, eventType: e.type };
            }),
    );

    this.iNameToConstList = arrayToMap(
      this.allInterfaces,
      i => i.name,
      i => (!i.constants ? [] : Object.values(i.constants)),
    );

    // Map of interface.Name -> List of base interfaces with event handlers
    this.iNameToEhParents = arrayToMap(this.allInterfaces, i => i.name, this.getParentsWithEventHandler.bind(this));

    this.iNameToConstParents = arrayToMap(this.allInterfaces, i => i.name, this.getParentsWithConstant.bind(this));
  }
}
