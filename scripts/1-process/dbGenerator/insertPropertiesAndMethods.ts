#!/usr/bin/env ts-node

// import db from '../../../db';
import * as Path from 'path';
import config from '../../../config';
import * as Fs from 'fs';
import Components from '../../../src/Components';
import * as Types from '../../../src/Types';
import { compareName } from '../../../src/utils';
import Printer from '../../../src/Printer';
import TsBodyPrinter from '../../../src/TsBodyPrinter';
import db from '../../../db';
import TypeUtils from '../../../src/TypeUtils';

const componentsPath = Path.join(config.filesProcessedDir, 'components-standard.json');
const componentsData = JSON.parse(Fs.readFileSync(componentsPath, 'utf-8'));
const components = new Components(componentsData).cleanup();
const allInterfaces = Object.values(components.allInterfacesMap).sort(compareName);

interface IIDLPropertyItem {
  name: string;
  isReadonly: boolean;
  nativeReturnTypes: string[];
  customReturnTypes: string[];
}

interface IIDLMethodItem {
  name: string;
  isStatic: boolean;
  nativeArgTypes: string[];
  customArgTypes: string[];
  nativeReturnTypes: string[];
  customReturnTypes: string[];
}

interface IFromIDL {
  name: string;
  properties: IIDLPropertyItem[];
  methods: IIDLMethodItem[];
  referencedBy: any[];
}

if (process.argv[2]) {
  const name = process.argv[2];
  const filteredInterfaces = allInterfaces.filter(i => i.name === name);
  allInterfaces.splice(0, allInterfaces.length, ...filteredInterfaces);
}

allInterfaces.forEach(i => {
  const name = i.name;
  const fromIDL: IFromIDL = fetchFromIDL(name, i);

  injectMissingIDLData(name, fromIDL);

  console.log(''.padEnd(150, '-'));
  console.log(`${name} has ${fromIDL.properties.length} properties + ${fromIDL.methods.length} methods`);
  insertProperties(name, fromIDL.properties);
  insertMethods(name, fromIDL.methods);
});

console.log('\n');
console.log(''.padEnd(150, '='));
console.log(`DONE!`);
console.log('');

function insertProperties(interfaceName: string, properties: IIDLPropertyItem[]) {
  properties.forEach(property => {
    const name = `${interfaceName}.${property.name}`;
    const isStatic = false;
    const hasDefinedIDL = true;
    const data = {
      name,
      interfaceName: interfaceName,
      localName: property.name,
      nativeReturnTypes: property.nativeReturnTypes.join(','),
      customReturnTypes: property.customReturnTypes.join(','),
      isReadonly: Number(property.isReadonly || 0),
      isStatic: Number(isStatic || 0),
      hasDefinedIDL: Number(hasDefinedIDL || 0),
    };
    const existing = db.prepare(`SELECT * FROM properties WHERE name=?`).get([name]);
    if (!existing) {
      const fields = Object.keys(data).join(', ');
      const values = Object.values(data);
      const placeholders = [...values].fill('?').join(', ');
      db.prepare(`INSERT INTO properties (${fields}) VALUES(${placeholders})`).run(values);
    }
  });
}

function insertMethods(interfaceName: string, methods: IIDLMethodItem[]) {
  methods.forEach(method => {
    const name = `${interfaceName}.${method.name}`;
    const isStatic = false;
    const hasDefinedIDL = true;
    const data = {
      name,
      interfaceName: interfaceName,
      localName: method.name,
      nativeArgTypes: method.nativeArgTypes.join(','),
      customArgTypes: method.customArgTypes.join(','),
      nativeReturnTypes: method.nativeReturnTypes.join(','),
      customReturnTypes: method.customReturnTypes.join(','),
      isStatic: Number(isStatic || 0),
      hasDefinedIDL: Number(hasDefinedIDL || 0),
    };
    const existing = db.prepare(`SELECT * FROM methods WHERE name=?`).get([name]);
    if (!existing) {
      const fields = Object.keys(data).join(', ');
      const values = Object.values(data);
      const placeholders = [...values].fill('?').join(', ');
      db.prepare(`INSERT INTO methods (${fields}) VALUES(${placeholders})`).run(values);
    }
  });
}

function fetchFromIDL(name: string, i: Types.Interface) {
  const printer = new Printer();
  const bodyPrinter = new TsBodyPrinter(i, printer, components);
  const properties: IIDLPropertyItem[] = bodyPrinter.properties.map(p => createPropertyItem(p.name, !!p.readOnly, p));
  const methods: IIDLMethodItem[] = [];
  bodyPrinter.methods.forEach(m => {
    methods.push(createMethodItem(m.name, false, m));
  });
  bodyPrinter.staticMethods.forEach(m => {
    methods.push(createMethodItem(m.name, true, m));
  });
  bodyPrinter.iteratorExtractor.methodNames.forEach(n => {
    methods.push(createMethodItem(n, false));
  });

  return { name, properties, methods, referencedBy: [] };
}

function createPropertyItem(name: string, isReadonly: boolean, p?: Types.Property) {
  const nativeReturnTypes = p ? TypeUtils.extractNativeTypes(p) : [];
  const customReturnTypes = p ? TypeUtils.extractCustomTypes(p) : [];
  return { name, isReadonly, nativeReturnTypes, customReturnTypes };
}

function createMethodItem(name: string, isStatic: boolean, method?: Types.Method) {
  const nativeReturnTypes: Set<string> = new Set();
  const customReturnTypes: Set<string> = new Set();
  const nativeArgTypes: Set<string> = new Set();
  const customArgTypes: Set<string> = new Set();

  if (method) {
    method.signatures.forEach(s => {
      TypeUtils.extractCustomTypesFromParams(s.params).forEach(t => nativeArgTypes.add(t));
      TypeUtils.extractCustomTypesFromParams(s.params).forEach(t => customArgTypes.add(t));
      TypeUtils.extractNativeTypes(s).forEach(t => nativeReturnTypes.add(t));
      TypeUtils.extractCustomTypes(s).forEach(t => customReturnTypes.add(t));
    });
  }

  return {
    name,
    isStatic,
    nativeArgTypes: Array.from(nativeArgTypes),
    customArgTypes: Array.from(customArgTypes),
    nativeReturnTypes: Array.from(nativeReturnTypes),
    customReturnTypes: Array.from(customReturnTypes),
  };
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function injectMissingIDLData(className: string, fromIDL: IFromIDL) {
  if (className === 'DOMRectReadOnly') {
    const index = fromIDL.methods.findIndex((m: any) => m.name === 'toJSON');
    fromIDL.methods.splice(index, 1);
  }

  if (className === 'DOMTokenList') {
    const index = fromIDL.methods.findIndex((m: any) => m.name === 'toString');
    fromIDL.methods.splice(index, 1);
  }

  if (className === 'HTMLCollection') {
    const i = components.interfaces.HTMLCollectionBase;
    const printer = new Printer();
    const bodyPrinter = new TsBodyPrinter(i, printer, components);
    const properties: IIDLPropertyItem[] = bodyPrinter.properties.map(p => createPropertyItem(p.name, !!p.readOnly, p));
    fromIDL.properties.push(...properties);

    const methods: IIDLMethodItem[] = bodyPrinter.methods.map(m => createMethodItem(m.name, !!m.static, m));
    fromIDL.methods.push(...methods);
  }

  if (className === 'MediaList') {
    const index = fromIDL.methods.findIndex((m: any) => m.name === 'toString');
    fromIDL.methods.splice(index, 1);
  }
}
