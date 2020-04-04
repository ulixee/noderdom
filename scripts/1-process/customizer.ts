#!/usr/bin/env ts-node

import * as Path from 'path';
import VueRunner from 'vue-runner';
import db from '../../db';
import IChoiceMeta from './customizer/IChoiceMeta';

const allInterfaces = db.prepare('SELECT * FROM interfaces WHERE hasDefinedIDL=1').all();
const allSelectionChoices = db.prepare('SELECT * FROM selection_choices').all();
const coreInterfaceNames = ['Document'];
const referencesByName: { [name: string]: Set<string> } = {};
const interfacesByName: { [name: string]: any } = {};
const choicesMetaMap: { [buildType: string]: { [name: string]: IChoiceMeta } } = { static: {}, dynamic: {} };

allSelectionChoices.forEach((choice: any) => {
  const choicesByName = choicesMetaMap[choice.buildType as string];
  const isCore = choice.isCore || (choice.itemType === 'interface' && coreInterfaceNames.includes(choice.name));
  choicesByName[choice.name] = {
    itemType: choice.itemType,
    isEnabled: isCore || choice.isEnabled ? true : false,
    isHidden: choice.isHidden,
  };
  if (isCore) {
    choicesByName[choice.name].isCore = true;
  }
  if (choice.isWritable) choicesByName[choice.name].isWritable = true;
});

function createChoiceMeta(name: string, itemType: 'interface' | 'property' | 'method'): IChoiceMeta {
  const isCore = itemType === 'interface' && coreInterfaceNames.includes(name);
  const meta: IChoiceMeta = {
    itemType,
    isEnabled: isCore,
    isHidden: false,
    isWritable: false,
  };
  if (itemType === 'interface') meta.isCore = isCore;
  else if (itemType === 'property') meta.isWritable = false;
  return meta;
}

function ensureChoiceMeta(name: string, itemType: 'interface' | 'property' | 'method') {
  choicesMetaMap.static[name] = choicesMetaMap.static[name] || createChoiceMeta(name, itemType);
  choicesMetaMap.dynamic[name] = choicesMetaMap.dynamic[name] || createChoiceMeta(name, itemType);
}

const interfaces = allInterfaces.map(inter => {
  const name = inter.name;
  const dependencies = fetchDependencies(name);
  const dependents = fetchDependents(name);
  const isDocumented = inter ? inter.isDocumented : false;
  const docOverview = JSON.parse(inter.docOverview);
  ensureChoiceMeta(name, 'interface');

  const properties = db.prepare(`SELECT * FROM properties WHERE interfaceName=?`).all([inter.name]);
  properties.forEach(property => {
    ensureChoiceMeta(property.name, 'property');
    property.nativeReturnTypes = (property.nativeReturnTypes || '').split(',').filter((t: string) => t);
    property.customReturnTypes = (property.customReturnTypes || '').split(',').filter((t: string) => t);
    property.returnTypes = property.nativeReturnTypes.concat(property.customReturnTypes);

    property.nativeTypes = property.nativeReturnTypes;
    property.customTypes = property.customReturnTypes;
    property.customTypes.forEach((t: string) => {
      referencesByName[t] = referencesByName[t] || new Set();
      referencesByName[t].add(name);
    });
  });

  const methods = db.prepare(`SELECT * FROM methods WHERE interfaceName=?`).all([inter.name]);
  methods.forEach(method => {
    ensureChoiceMeta(method.name, 'method');
    method.nativeArtTypes = (method.nativeArtTypes || '').split(',').filter((t: string) => t);
    method.customArgTypes = (method.customArgTypes || '').split(',').filter((t: string) => t);
    method.argTypes = method.nativeArtTypes.concat(method.customArgTypes);

    method.nativeReturnTypes = (method.nativeReturnTypes || '').split(',').filter((t: string) => t);
    method.customReturnTypes = (method.customReturnTypes || '').split(',').filter((t: string) => t);
    method.returnTypes = method.nativeReturnTypes.concat(method.customReturnTypes);

    method.nativeTypes = method.nativeArtTypes.concat(method.nativeReturnTypes);
    method.customTypes = method.customArgTypes.concat(method.customReturnTypes);
    method.customTypes.forEach((t: string) => {
      referencesByName[t] = referencesByName[t] || new Set();
      referencesByName[t].add(name);
    });
  });

  interfacesByName[name] = {
    name,
    docOverview,
    isDocumented,
    dependencies,
    dependents,
    properties,
    methods,
    referencedBy: [],
  };
  return interfacesByName[name];
});

coreInterfaceNames.reverse().forEach(name => {
  const index = interfaces.findIndex(i => i.name === name);
  if (index < 0) return;
  const inter = interfaces[index];
  inter.isCore = true;
  interfaces.splice(index, 1);
  interfaces.unshift(inter);
});

interfaces.forEach(klass => {
  klass.referencedBy.push(...(referencesByName[klass.name] || []));
});

function fetchDependencies(name: string) {
  const records = db.prepare(`SELECT parent FROM interface_relationships WHERE child=?`).all([name]);
  return records.map(r => r.parent);
}

function fetchDependents(name: string) {
  const records = db.prepare(`SELECT child FROM interface_relationships WHERE parent=?`).all([name]);
  return records.map(r => r.child);
}

// SERVER //////////////////////////////////////////////////////////////////////////////////////////////////////////////

const vuePath = Path.resolve(__dirname, './customizer.vue');
const vueRunner = new VueRunner(vuePath, { title: 'Noderdom Selector'});

vueRunner.attachAPI((apiServer: any) => {
  apiServer.get('/data', (_req: any, res: any) => {
    res.send({ klasses: interfaces, choicesMetaMap });
  });

  apiServer.post('/choices', (req: any, res: any) => {
    const { buildType, metasByName } = req.body;
    Object.entries(metasByName).forEach(entry => {
      const [name, meta]: [string, any] = entry;
      const primaryKey = [name, buildType];
      const existing = db.prepare('SELECT * FROM selection_choices WHERE name=? AND buildType=?').get(primaryKey);
      const data = {
        name,
        buildType,
        itemType: meta.itemType,
        isCore: Number(meta.isCore || 0),
        isEnabled: Number(meta.isEnabled || 0),
        isHidden: Number(meta.isHidden || 0),
        isWritable: Number(meta.isWritable || 0),
      };
      if (existing) {
        const values = [...Object.values(data), ...primaryKey];
        const sql = `UPDATE selection_choices SET ${Object.keys(data).map(k => `${k}=?`)} WHERE name=? AND buildType=?`;
        db.prepare(sql).run(values);
      } else {
        const fields = Object.keys(data).join(', ');
        const values = Object.values(data);
        const placeholders = [...values].fill('?').join(', ');
        db.prepare(`INSERT INTO selection_choices (${fields}) VALUES(${placeholders})`).run(values);
      }
    });

    res.send({ saved: true });
  });
});
