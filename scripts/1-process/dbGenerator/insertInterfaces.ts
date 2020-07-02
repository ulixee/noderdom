#!/usr/bin/env ts-node

import * as Fs from 'fs';
import * as Path from 'path';
import Components from '../../../src/Components';
import config from '../../../config';
import db from '../../../db';

const mdnInterfacesPath = Path.resolve(__dirname, config.filesImportedDir, 'mdn-interfaces.json');
if (!Fs.existsSync(mdnInterfacesPath)) throw new Error(`mdn-interfaces.json was not found: ${mdnInterfacesPath}`);

const componentsPath = Path.resolve(__dirname, config.filesProcessedDir, 'components-standard.json');
if (!Fs.existsSync(componentsPath)) throw new Error(`components-standard.json was not found: ${componentsPath}`);

const mdnInterfaces = JSON.parse(Fs.readFileSync(mdnInterfacesPath, 'utf-8'));
const componentsData = JSON.parse(Fs.readFileSync(componentsPath, 'utf-8'));
const components = new Components(componentsData);

const interfacesByName: { [key: string]: any } = {};

for (const mdnInterface of mdnInterfaces) {
  const name = mdnInterface.name;

  if (interfacesByName[name]) {
    const title = `${name} ALREADY EXISTS: `;
    console.log(''.padEnd(100, '-'));
    console.log(title);
    console.log(''.padEnd(title.length, '-'));
    console.log(''.padEnd(7), 'Field'.padEnd(20), 'Previous Value'.padEnd(50), 'New Value'.padEnd(50));
    Object.keys(mdnInterface).forEach((field: string) => {
      const value1 = `${interfacesByName[name][field]}`;
      const value2 = `${mdnInterface[name]}`;
      const outcome = value1 === value2 ? 'SAME' : 'DIFF';
      console.log(outcome.padEnd(7), field.padEnd(20), value1.padEnd(50), `${value2}`.padEnd(50));
    });
    console.log('');
    continue;
  }

  const tags: string[] = [];
  if (['Document', 'HTMLDocument', 'XMLDocument', 'DocumentFragment'].includes(mdnInterface.name)) {
    tags.push('Document');
  } else if (['Node', 'Element', 'Comment', 'Text'].includes(mdnInterface.name)) {
    tags.push('Node');
  } else if (['NodeList', 'RadioNodeList', 'HTMLCollection', 'HTMLOptionsCollection'].includes(mdnInterface.name)) {
    tags.push('ArrayLike');
  } else if (['EventTarget', 'Attr', 'CharacterData'].includes(mdnInterface.name)) {
    tags.push('Miscellaneous');
  }
  if (mdnInterface.category === 'HTMLElements') {
    tags.push('HTMLElement');
  } else if (mdnInterface.category === 'SVGElements') {
    tags.push('SVGElement');
  }

  interfacesByName[mdnInterface.name] = {
    ...mdnInterface,
    mdnFilename: mdnInterface.filename,
    mdnCategory: mdnInterface.category,
    tags: tags.filter(t => t).join(','),
  };
}

const interfaceRelationships = [];

console.log(''.padEnd(100, '-'));
console.log('LOADING COMPONENTS...');
for (const inter of components.allInterfaces) {
  const mdnInterface = interfacesByName[inter.name];
  if (!mdnInterface) {
    console.log(`- Missing mdn interface: ${inter.name}`);
    interfacesByName[inter.name] = {
      name: inter.name,
      isDeprecated: false,
      isExperimental: false,
      isObsolete: false,
      isDocumented: false,
      hasDefinedIDL: true,
      isOnMDN: false,
      sourcedAtPath: '',
      mdnFilename: '',
      mdnDocumentationPath: '',
    };
    continue;
  }
  mdnInterface.hasDefinedIDL = true;
  if (inter.extends && inter.extends !== 'Object') {
    interfaceRelationships.push({
      parent: inter.extends,
      child: mdnInterface.name,
      type: 'extends',
    });
  }
  inter.implements = inter.implements || [];
  for (const parent of inter.implements) {
    interfaceRelationships.push({
      parent,
      child: mdnInterface.name,
      type: 'implements',
    });
  }
}

console.log(''.padEnd(100, '-'));
console.log('INSERTING INTO DB...');

for (const inter of Object.values(interfacesByName)) {
  const data = {
    name: inter.name,
    type: inter.hasDefinedIDL ? extractComponentType(inter.name) : 'unknown',
    tags: inter.tags || '',
    isDeprecated: Number(inter.isDeprecated || 0),
    isExperimental: Number(inter.isExperimental || 0),
    isObsolete: Number(inter.isObsolete || 0),
    isDocumented: Number(inter.isDocumented || 0),
    hasDefinedIDL: Number(inter.hasDefinedIDL || 0),
    isOnMDN: Number(inter.isOnMDN || 0),
    sourcedAtPath: inter.sourcedAtPath,
    mdnDocumentationPath: inter.mdnDocumentationPath,
    mdnFilename: inter.mdnFilename,
    mdnCategory: inter.mdnCategory,
  };
  const existing = db.prepare(`SELECT * FROM interfaces WHERE name=?`).get([inter.name]);
  if (existing) {
    const values = [data.isDocumented, data.tags, inter.name];
    db.prepare('UPDATE interfaces SET isDocumented=?, tags=? WHERE name=?').run(values);
  } else {
    const fields = Object.keys(data).join(', ');
    const values = Object.values(data);
    const placeholders = [...values].fill('?').join(', ');
    db.prepare(`INSERT INTO interfaces (${fields}) VALUES(${placeholders})`).run(values);
  }
}

for (const { parent, child, type } of interfaceRelationships) {
  const existing = db.prepare(`SELECT * FROM interface_relationships WHERE parent=? AND child=?`).get([parent, child]);
  if (existing) {
    db.prepare('UPDATE interface_relationships SET type=? WHERE parent=? AND child=?').run([type, parent, child]);
  } else {
    const fields = ['parent', 'child', 'type'];
    const values = [parent, child, type].map(v => `'${v}'`);
    const sql = `INSERT INTO interface_relationships (${fields.join(', ')}) VALUES(${values.join(', ')})`;
    try {
      db.prepare(sql).run();
    } catch (error) {
      console.log(sql);
      const parentResult = db.prepare(`SELECT * FROM interfaces WHERE name=?`).get([parent]);
      console.log('parent: ', parentResult);
      const childResult = db.prepare(`SELECT * FROM interfaces WHERE name=?`).get([child]);
      console.log('child: ', childResult);
      throw error;
    }
  }
}

console.log(''.padEnd(100, '-'));
console.log('DONE');
console.log(''.padEnd(100, '-'));
console.log('');

function extractComponentType(name: string) {
  if (components.callbackInterfaces[name]) return 'callbackInterface';
  if (components.interfaces[name]) return 'interface';
  if (components.mixins[name]) return 'mixin';
  throw new Error('unknown component type');
}

// create additional tables: properties, methods (include args and returns).
