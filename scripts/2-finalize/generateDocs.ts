#!/usr/bin/env ts-node

import * as Fs from 'fs';
import * as Path from 'path';
import db from '../../db';
import config from '../../config';
import IDomType, { DomType } from '../../src/interfaces/IDomType';
import Components from '../../src/Components';
import DependencyCollector from '../../src/DependencyCollector';
import IComponentFilters from '../../src/interfaces/IComponentFilters';

const componentFilteringPath = Path.join(config.filesImportedDir, 'component-filters-awaited.json');
const componentsPath = Path.resolve(__dirname, config.filesProcessedDir, 'components-standard.json');
if (!Fs.existsSync(componentsPath)) throw new Error(`components-standard.json was not found: ${componentsPath}`);

const componentFilters: IComponentFilters = JSON.parse(Fs.readFileSync(componentFilteringPath, 'utf-8'));
const componentsData = JSON.parse(Fs.readFileSync(componentsPath, 'utf-8'));
const components = new Components(componentsData);
const dependencyCollector = new DependencyCollector(components, DomType.awaited);

const domType: IDomType = DomType.awaited;
const docs: any[] = [];
const docsByName: { [name: string]: any } = {};
const allInheritedKlassNames: Set<string> = new Set();

const allInterfaces = db.prepare('SELECT * FROM interfaces WHERE hasDefinedIDL=1 ORDER BY name').all();
const allSupers = db.prepare('SELECT * FROM supers ORDER BY name').all();
const docsPath = Path.join(config.filesFinalizedDir, `${domType}-dom`, 'docs.json');

console.log('\n-- SKIPPING ------------------');
const filteredInterfaces = allInterfaces.filter(i => {
  if (i.tags) return true;
  console.log(i.name);
  return false;
});

console.log('\n-- DOCUMENTING ---------------');

filteredInterfaces.map(inter => {
  const name = inter.name;
  const tags = inter.tags.split(',').filter((t: string) => t);
  const variableName = extractVariableName(name, tags);
  const inheritsFrom = dependencyCollector.get(inter.name, true, false);
  const inheritedKlassNames = inheritsFrom.klassNames.concat(inheritsFrom.mixinNames);
  inheritedKlassNames.forEach(n => allInheritedKlassNames.add(n));
  console.log(name);

  const directPropsSql = `SELECT * FROM properties WHERE interfaceName=? AND hasDefinedIDL=1 ORDER BY localName COLLATE NOCASE`;
  const directProps = db.prepare(directPropsSql).all([inter.name]);
  const properties = directProps.map(p => convertToProperty(name, p));

  const directMethodsSql = `SELECT * FROM methods WHERE interfaceName=? AND hasDefinedIDL=1 ORDER BY localName COLLATE NOCASE`;
  const directMethods = db.prepare(directMethodsSql).all([inter.name]);
  const methods = directMethods.map(m => convertToMethod(name, m));


  for (const klassName of inheritedKlassNames) {
    const inheritedPropsSql = `SELECT * FROM properties WHERE interfaceName=? AND hasDefinedIDL=1 ORDER BY localName COLLATE NOCASE`;
    const inheritedProps = db.prepare(inheritedPropsSql).all([klassName]);
    inheritedProps.forEach(p => properties.push(convertToProperty(klassName, p)));

    const inheritedMethodsSql = `SELECT * FROM methods WHERE interfaceName=? AND hasDefinedIDL=1 ORDER BY localName COLLATE NOCASE`;
    const inheritedMethods = db.prepare(inheritedMethodsSql).all([klassName]);
    inheritedMethods.forEach(m => methods.push(convertToMethod(klassName, m)));
  }

  const doc = {
    name,
    variableName,
    mdnCategory: inter.mdnCategory,
    tags: tags.join(','),
    overview: inter.docOverview,
    properties: properties,
    methods: methods,
  };
  docs.push(doc);
  docsByName[doc.name] = doc;
});

allSupers.map(sup => {
  const name = sup.name;

  const interSql = `SELECT * FROM interfaces WHERE name=? AND hasDefinedIDL=1`;
  const inter = db.prepare(interSql).get([sup.interfaceName]);

  const isolatesSql = `SELECT * FROM super_isolates WHERE superName=? ORDER BY interfaceName COLLATE NOCASE`;
  const isolates = db.prepare(isolatesSql).all([sup.name]);
  const dependencies: { name: string }[] = [];

  isolates.forEach(d => {
    const iSql = `SELECT * FROM interfaces WHERE name=? AND hasDefinedIDL=1`;
    const i = db.prepare(iSql).get([d.interfaceName]);
    if (i.type !== 'interface') return;
    if (!componentFilters[i.name]) return;
    if (!docsByName[d.interfaceName]) {
      console.log('MISSING DEPENDENCY: ', d.interfaceName, allInheritedKlassNames.has(d.interfaceName));
    }
    dependencies.push({
      name: d.interfaceName,
    });
  });

  docs.push({
    name,
    tags: 'Super',
    overview: inter.docOverview,
    dependencies: dependencies,
    properties: [],
    methods: [],
  });
});

Fs.writeFileSync(docsPath, JSON.stringify(docs, null, 2));

function extractVariableName(name: string, tags: string[]) {
  if (name === 'Element' || tags.includes('HTMLElement') || tags.includes('SVGElement')) {
    return 'elem';
  }
  if (tags.includes('Node')) {
    return 'node';
  }
  if (tags.includes('Document')) {
    return 'doc';
  }
}

function convertToProperty(componentName: string, property: any) {
  const componentFilter = componentFilters[componentName];
  if (!componentFilter) throw new Error(`MISSING COMPONENT FILTER: ${componentName}`);

  return {
    name: property.localName,
    overview: property.docOverview,
    componentName: componentName,
    returnType: property.customReturnTypes || property.nativeReturnTypes,
    isImplemented: !!componentFilter.propertiesByName[property.localName]?.isEnabled,
  };
}

function convertToMethod(componentName: string, method: any) {
  const componentFilter = componentFilters[componentName];
  if (!componentFilter) throw new Error(`MISSING COMPONENT FILTER: ${componentName}`);

  return {
    name: method.localName,
    overview: method.docOverview,
    componentName: componentName,
    isImplemented: !!componentFilter.methodsByName[method.localName]?.isEnabled,
  };
}
