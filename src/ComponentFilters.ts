import db from '../db';
import IComponentFilters, { IComponentFilter, IComponentFilterItem } from './interfaces/IComponentFilters';
import IDomType from './interfaces/IDomType';

export default class ComponentFilters {
  public readonly records: any[];

  constructor(domType: IDomType, records?: any[]) {
    this.records = records || db.prepare('SELECT * FROM component_filters WHERE domType=?').all(domType);
  }

  public saveToDb() {
    this.records.forEach(record => {
      const primaryKey = [record.name, record.domType];
      const existing = db.prepare('SELECT * FROM component_filters WHERE name=? AND domType=?').get(primaryKey);
      if (existing) {
        const values = [...Object.values(record), ...primaryKey];
        const sql = `UPDATE component_filters SET ${Object.keys(record).map(k => `${k}=?`)} WHERE name=? AND domType=?`;
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
      if (record.isAbstract) choicesByName[record.name].isAbstract = true;
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

  public static fromMap(domType: IDomType, map: { [name: string]: IComponentFilter }) {
    const records: any[] = [];
    Object.entries(map).forEach(([interName, interObj]) => {
      records.push({
        name: interName,
        domType,
        itemType: 'interface',
        isEnabled: interObj.isEnabled ? 1 : 0,
      });
      Object.entries(interObj.propertiesByName).forEach(([propName, propObj]) => {
        records.push({
          name: `${interName}.${propName}`,
          domType,
          itemType: 'property',
          isEnabled: propObj.isEnabled ? 1 : 0,
          isWritable: propObj.isWritable ? 1 : 0,
        });
      });
      Object.entries(interObj.methodsByName).forEach(([methodName, methodObj]) => {
        records.push({
          name: `${interName}.${methodName}`,
          domType,
          itemType: 'property',
          isEnabled: methodObj.isEnabled ? 1 : 0,
        });
      });
    });

    return new ComponentFilters(domType, records);
  }
}
