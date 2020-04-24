import db from '../../../db';
import IChoiceMeta, { ChoiceItemType, IChoiceItemType } from './IChoiceMeta';

export default class Customizer {
  public readonly klasses: any[];
  public readonly choicesMetaMap: { [buildType: string]: { [name: string]: IChoiceMeta } } = { detached: {}, awaited: {} };
  private allInterfaces = db.prepare('SELECT * FROM interfaces WHERE hasDefinedIDL=1').all();
  private allComponentFilters = db.prepare('SELECT * FROM component_filters').all();
  private coreInterfaceNames = ['Document'];
  private referencesByName: { [name: string]: Set<string> } = {};
  private interfacesByName: { [name: string]: any } = {};
  private supersByName: { [name: string]: any } = {};

  constructor() {
    this.allComponentFilters.forEach((componentFilter: any) => {
      const name = componentFilter.name;
      const choicesByName = this.choicesMetaMap[componentFilter.buildType as string];
      const { isCore, isEnabled, isHidden, isWritable, isLocal } = componentFilter;
      const options = { isCore, isEnabled, isHidden, isWritable, isLocal };
      choicesByName[name] = this.createChoiceMeta(componentFilter.name, componentFilter.itemType, options);
    });

    this.klasses = this.createClasses();
    this.coreInterfaceNames.reverse().forEach(name => {
      const index = this.klasses.findIndex(i => i.name === name);
      if (index < 0) return;
      const inter = this.klasses[index];
      inter.isCore = true;
      this.klasses.splice(index, 1);
      this.klasses.unshift(inter);
    });

    this.klasses.forEach(klass => {
      klass.referencedBy.push(...(this.referencesByName[klass.name] || []));
    });
  }

  private getSuper(name: string) {
    const sql = 'SELECT * FROM supers WHERE interfaceName=?';
    this.supersByName[name] = this.supersByName[name] || db.prepare(sql).get([name]);
    return this.supersByName[name];
  }

  private isSuper(itemType: IChoiceItemType, name: string) {
    if (itemType !== ChoiceItemType.interface) return false;
    return !!this.getSuper(name);
  }

  private isSuperDescendent(itemType: IChoiceItemType, name: string) {
    if (itemType !== ChoiceItemType.interface) return false;
    return !!db.prepare('SELECT * FROM super_isolates WHERE interfaceName=?').get([name]);
  }

  private isCore(itemType: IChoiceItemType, name: string) {
    if (itemType !== ChoiceItemType.interface) return false;
    if (this.coreInterfaceNames.includes(name)) return true;
    return !!this.getSuper(name);
  }

  private createChoiceMeta(
    name: string,
    itemType: IChoiceItemType,
    options: { [key: string]: boolean } = {},
  ): IChoiceMeta {
    const isInterface = itemType === ChoiceItemType.interface;
    const isSuper = this.isSuper(itemType, name);
    const isSuperDescendent = this.isSuperDescendent(itemType, name);
    const isCore = options.isCore || this.isCore(itemType, name);
    const isEnabled = isCore || options.isEnabled;
    const isHidden = options.isHidden || (isInterface && !isEnabled);

    const meta: IChoiceMeta = {
      itemType,
      isEnabled,
      isHidden,
    };
    if (itemType === ChoiceItemType.interface) meta.isCore = isCore;
    else if (itemType === ChoiceItemType.property) meta.isWritable = options.isWritable || false;

    if (isCore) {
      meta.isCore = true;
    }
    if (isSuper) {
      meta.isSuper = true;
    }
    if (isSuperDescendent) {
      meta.isSuperDescendent = true;
    }
    if (itemType === ChoiceItemType.property || itemType === ChoiceItemType.method) {
      meta.isLocal = options.isLocal || false;
    }
    return meta;
  }

  private ensureChoiceMeta(name: string, itemType: IChoiceItemType) {
    this.choicesMetaMap.detached[name] = this.choicesMetaMap.detached[name] || this.createChoiceMeta(name, itemType);
    this.choicesMetaMap.awaited[name] = this.choicesMetaMap.awaited[name] || this.createChoiceMeta(name, itemType);
  }

  private createClasses() {
    return this.allInterfaces.map(inter => {
      const name = inter.name;
      const dependencies = this.fetchDependencies(name);
      const dependents = this.fetchDependents(name);
      const isDocumented = inter ? inter.isDocumented : false;
      const docOverview = JSON.parse(inter.docOverview);
      this.ensureChoiceMeta(name, 'interface');

      const properties = db.prepare(`SELECT * FROM properties WHERE interfaceName=?`).all([inter.name]);
      properties.forEach(property => {
        this.ensureChoiceMeta(property.name, 'property');
        Object.assign(this.choicesMetaMap.awaited[property.name], { itemType: 'property' });
        Object.assign(this.choicesMetaMap.detached[property.name], { itemType: 'property' });
        property.nativeReturnTypes = (property.nativeReturnTypes || '').split(',').filter((t: string) => t);
        property.customReturnTypes = (property.customReturnTypes || '').split(',').filter((t: string) => t);
        property.returnTypes = property.nativeReturnTypes.concat(property.customReturnTypes);

        property.nativeTypes = property.nativeReturnTypes;
        property.customTypes = property.customReturnTypes;
        property.customTypes.forEach((t: string) => {
          this.referencesByName[t] = this.referencesByName[t] || new Set();
          this.referencesByName[t].add(name);
        });
      });

      const methods = db.prepare(`SELECT * FROM methods WHERE interfaceName=?`).all([inter.name]);
      methods.forEach(method => {
        this.ensureChoiceMeta(method.name, 'method');
        Object.assign(this.choicesMetaMap.awaited[method.name], { itemType: 'method', isLocal: false });
        Object.assign(this.choicesMetaMap.detached[method.name], { itemType: 'method', isLocal: false });
        method.nativeArtTypes = (method.nativeArtTypes || '').split(',').filter((t: string) => t);
        method.customArgTypes = (method.customArgTypes || '').split(',').filter((t: string) => t);
        method.argTypes = method.nativeArtTypes.concat(method.customArgTypes);

        method.nativeReturnTypes = (method.nativeReturnTypes || '').split(',').filter((t: string) => t);
        method.customReturnTypes = (method.customReturnTypes || '').split(',').filter((t: string) => t);
        method.returnTypes = method.nativeReturnTypes.concat(method.customReturnTypes);

        method.nativeTypes = method.nativeArtTypes.concat(method.nativeReturnTypes);
        method.customTypes = method.customArgTypes.concat(method.customReturnTypes);
        method.customTypes.forEach((t: string) => {
          this.referencesByName[t] = this.referencesByName[t] || new Set();
          this.referencesByName[t].add(name);
        });
      });

      this.interfacesByName[name] = {
        name,
        docOverview,
        isDocumented,
        dependencies,
        dependents,
        properties,
        methods,
        referencedBy: [],
      };
      return this.interfacesByName[name];
    });
  }

  private fetchDependencies(name: string) {
    const records = db.prepare(`SELECT parent FROM interface_relationships WHERE child=?`).all([name]);
    return records.map(r => r.parent);
  }

  private fetchDependents(name: string) {
    const records = db.prepare(`SELECT child FROM interface_relationships WHERE parent=?`).all([name]);
    return records.map(r => r.child);
  }
}
