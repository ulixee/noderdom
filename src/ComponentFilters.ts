import db from '../db';
import IComponentFilters, { IComponentFilter, IComponentFilterItem } from './interfaces/IComponentFilters';
import IBuildType from './interfaces/IBuildType';

export default class ComponentFilters {
  public readonly records: any[];

  constructor(buildType: IBuildType, records?: any[]) {
    this.records = records || db.prepare('SELECT * FROM component_filters WHERE buildType=?').all(buildType);
  }

  public saveToDb() {
    this.records.forEach(record => {
      const primaryKey = [record.name, record.buildType];
      const existing = db.prepare('SELECT * FROM component_filters WHERE name=? AND buildType=?').get(primaryKey);
      if (existing) {
        const values = [...Object.values(record), ...primaryKey];
        const sql = `UPDATE component_filters SET ${Object.keys(record).map(k => `${k}=?`)} WHERE name=? AND buildType=?`;
        db.prepare(sql).run(values);
      } else {
        const fields = Object.keys(record).join(', ');
        const values = Object.values(record);
        const placeholders = [...values].fill('?').join(', ');
        db.prepare(`INSERT INTO component_filters (${fields}) VALUES(${placeholders})`).run(values);
      }
    });
  }

  public toMap() {
    const choicesByName: { [name: string]: IComponentFilterItem } = {};
    const componentFiltersMap: IComponentFilters = {};
    const allInterfaces = db.prepare('SELECT * FROM interfaces WHERE hasDefinedIDL=1').all();

    this.records.forEach((record: any) => {
      choicesByName[record.name] = {
        isEnabled: record.isCore || record.isEnabled ? true : false,
      };
      if (record.isWritable) choicesByName[record.name].isWritable = true;
      if (record.isLocal) choicesByName[record.name].isLocal = true;
    });

    allInterfaces.forEach(inter => {
      if (!choicesByName[inter.name]) return;

      const choice = choicesByName[inter.name];
      componentFiltersMap[inter.name] = Object.assign({}, choice, { propertiesByName: {}, methodsByName: {} });
      if (!choice.isEnabled) return;

      const properties = db.prepare(`SELECT * FROM properties WHERE interfaceName=?`).all([inter.name]);
      properties.forEach(p => {
        if (!choicesByName[p.name]) return;
        componentFiltersMap[inter.name].propertiesByName[p.localName] = choicesByName[p.name];
      });

      const methods = db.prepare(`SELECT * FROM methods WHERE interfaceName=?`).all([inter.name]);
      methods.forEach(m => {
        if (!choicesByName[m.name]) return;
        componentFiltersMap[inter.name].methodsByName[m.localName] = choicesByName[m.name];
      });
    });

    return componentFiltersMap;
  }

  public static fromMap(buildType: IBuildType, map: { [name: string]: IComponentFilter }) {
    const records: any[] = [];
    Object.entries(map).forEach(([interName, interObj]) => {
      records.push({
        name: interName,
        buildType,
        itemType: 'interface',
        isEnabled: interObj.isEnabled ? 1 : 0,
      });
      Object.entries(interObj.propertiesByName).forEach(([propName, propObj]) => {
        records.push({
          name: `${interName}.${propName}`,
          buildType,
          itemType: 'property',
          isEnabled: propObj.isEnabled ? 1 : 0,
          isWritable: propObj.isWritable ? 1 : 0,
        });
      });
      Object.entries(interObj.methodsByName).forEach(([methodName, methodObj]) => {
        records.push({
          name: `${interName}.${methodName}`,
          buildType,
          itemType: 'property',
          isEnabled: methodObj.isEnabled ? 1 : 0,
        });
      });
    });

    return new ComponentFilters(buildType, records);
  }
}
