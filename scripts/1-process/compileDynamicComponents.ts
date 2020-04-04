#!/usr/bin/env ts-node

/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 * This script creates components-dynamic.json, which is the JSON output of all the WebIDLs and metaElements.json.
 */

import * as Fs from 'fs';
import * as Path from 'path';
import webIDLFilenames from '../../files/0-imported/webidls';
import Componentizer from '../../src/Componentizer';
import * as Types from '../../src/Types';
import Components from '../../src/Components';
import config from '../../config';
import DependencyCollector from '../../src/DependencyCollector';
import TsBodyPrinter from '../../src/TsBodyPrinter';
import Printer from '../../src/Printer';
import TypeUtils from '../../src/TypeUtils';

const webIDLDir = Path.join(config.filesImportedDir, 'webidls');
const webIDLExtensionsDir = Path.join(config.filesImportedDir, 'webidl-extensions');
const webIDLReplacementsDir = Path.join(config.filesImportedDir, 'webidl-replacements');
const componentFiltersPath = Path.join(config.filesImportedDir, 'component-filters-dynamic.json');

function run() {
  const components = createComponents();
  const dependencyCollector = new DependencyCollector(components);
  const ishInterfaces = createIshInterfacesAndIsolates(components, dependencyCollector);

  resolveConflicts(ishInterfaces, components, 'property');
  resolveConflicts(ishInterfaces, components, 'method');

  const componentsOutputPath = Path.join(config.filesProcessedDir, 'components-dynamic.json');
  Fs.writeFileSync(componentsOutputPath, JSON.stringify(components, null, 2));
}

interface IDefinition {
  klass: string;
  name: string;
  value: string;
}

function resolveConflicts(ishInterfaces: Types.Interface[], components: Components, type: 'property' | 'method') {
  ishInterfaces.forEach(ishInterface => {
    let hasMultipleDefinitions = false;
    const definitionsByName: { [name: string]: IDefinition[] } = {};

    for (const isolateName of ishInterface.implements!) {
      const isolateInterface = components.dynamicIsolates[isolateName];
      const printer = new Printer();
      const tsBodyPrinter = new TsBodyPrinter(isolateInterface, printer, components, { skipImplementation: true });
      const records = Object.values(isolateInterface[type === 'property' ? 'properties' : 'methods'] || {});

      for (const record of records) {
        printer.reset();
        if (type === 'property') {
          tsBodyPrinter.printProperty(record);
        } else if (type === 'method') {
          tsBodyPrinter.printMethod(record);
        }

        const value = printer.getResult().trim();
        definitionsByName[record.name] = definitionsByName[record.name] || [];
        definitionsByName[record.name].push({ klass: isolateName, name: record.name, value: value });
        if (Object.keys(definitionsByName[record.name]).length > 1) hasMultipleDefinitions = true;
      }
    }
    if (!hasMultipleDefinitions) return;

    console.log(''.padEnd(150, '='));
    console.log(`${type.toUpperCase()} CONFLICTS WITHIN ${ishInterface.name}:`);
    for (const definitionName of Object.keys(definitionsByName)) {
      const definitions = definitionsByName[definitionName];
      const foundConflict = definitionsHaveConflict(definitions);
      if (!foundConflict) continue;

      const overrides = createOverrides(type, components, definitions);

      definitions.forEach((definition, index) => {
        const isolateInterface = components.dynamicIsolates[definition.klass];
        if (type === 'property') {
          const properties = isolateInterface.properties!;
          properties[definitionName] = Object.assign({}, properties[definitionName], overrides);
          isolateInterface.properties = properties as Record<string, Types.Property>;
        } else {
          const methods = isolateInterface.methods!;
          const method = (methods[definitionName] = Object.assign({}, methods[definitionName]));
          method.signatures = method.signatures.map((s, idx) => Object.assign({}, s, overrides[idx]));
          isolateInterface.methods = methods as Record<string, Types.Method>;
        }
        console.log(`${index ? '' : definitionName}`.padEnd(25), definition!.klass.padEnd(30), definition!.value);
      });

      const printer = new Printer();
      const relatedIsolate = components.dynamicIsolates[definitions[0].klass];
      const tsBodyPrinter = new TsBodyPrinter(relatedIsolate, printer, components, { skipImplementation: true });
      if (type === 'property') {
        tsBodyPrinter.printProperty(relatedIsolate.properties![definitionName]);
      } else {
        tsBodyPrinter.printMethod(relatedIsolate.methods![definitionName]);
      }
      const compromiseValue = printer.getResult().trim();
      console.log(''.padEnd(25), 'COMPROMISE'.padEnd(30), compromiseValue);
      console.log(''.padEnd(150, '-'));
    }
    console.log('');
  });
}

function createComponents() {
  const componentizer = new Componentizer();
  loadWebidls(componentizer, webIDLDir, webIDLFilenames);
  loadWebidls(componentizer, webIDLExtensionsDir, Fs.readdirSync(webIDLExtensionsDir));
  loadWebidls(componentizer, webIDLReplacementsDir, Fs.readdirSync(webIDLReplacementsDir));

  return componentizer.run().cleanup(componentFiltersPath);
}

function createIshInterfacesAndIsolates(components: Components, dependencyCollector: DependencyCollector) {
  const ishBaseNames = [
    'Document',
    'Element',
    'Node',
    'NodeList',
    'HTMLCollection',
    'Text',
    'CharacterData',
    'HTMLElement',
    'StyleSheet',
  ];
  ishBaseNames.forEach(baseName => {
    const ishName = `${baseName}Ish`;
    if (!components.allInterfacesMap[baseName]) return;
    const ishInterface = Object.assign({}, components.allInterfacesMap[baseName], { name: ishName });
    delete ishInterface.extends;
    const inheritsFrom = dependencyCollector.get(baseName);

    ishInterface.implements = inheritsFrom.map(n => {
      const isolateName = `${n}Isolate`;
      const isolateInterface = Object.assign({}, components.allInterfacesMap[n], { name: isolateName });

      isolateInterface.properties = Object.assign({}, isolateInterface.properties);
      isolateInterface.methods = Object.assign({}, isolateInterface.methods);

      components.dynamicIsolates[isolateName] = isolateInterface;
      return isolateName;
    });
    components.dynamicIshes[ishName] = ishInterface;
  });
  return Object.values(components.dynamicIshes);
}

function createOverrides(type: 'property' | 'method', components: Components, definitions: IDefinition[]) {
  if (type === 'property') {
    return createPropertyOverrides(components, definitions);
  }
  return createMethodOverrides(components, definitions);
}

function createPropertyOverrides(components: Components, propDefinitions: IDefinition[]): any {
  const overrides: { readOnly?: 1; nullable?: 1; type?: string | Types.Typed[] } = { readOnly: 1 };
  const typeByCleanType: { [key: string]: string } = {};
  for (const prop of propDefinitions) {
    const i = components.allInterfacesMap[prop.klass.replace('Isolate', '')];
    const property = i.properties![prop.name];
    if (property.readOnly !== 1) overrides.readOnly = undefined;
    if (property.nullable === 1) overrides.nullable = 1;
    if (typeof property.type === 'string') {
      const cleanType = TypeUtils.convertDomTypeToTsType({ type: property.type });
      typeByCleanType[cleanType] = property.type;
    } else {
      throw new Error('property type must be a string');
    }
  }

  const types = Object.values(typeByCleanType);
  if (types.length > 1) overrides.type = types.map(t => ({ type: t }));

  return overrides;
}

function createMethodOverrides(components: Components, methDefinitions: IDefinition[]): any {
  const overrides: { nullable?: 1; type?: string | Types.Typed[] }[] = [];
  const typesByCleanType: { [key: string]: string }[] = [];
  for (const meth of methDefinitions) {
    const i = components.allInterfacesMap[meth.klass.replace('Isolate', '')];
    const method = i.methods![meth.name];
    if (!overrides.length) {
      method.signatures.forEach(_ => overrides.push({}));
      method.signatures.forEach(_ => typesByCleanType.push({}));
    }

    method.signatures.forEach((signature, index) => {
      const override = overrides[index];
      const typeByCleanType = typesByCleanType[index];
      if (signature.nullable === 1) override.nullable = 1;
      if (typeof signature.type === 'string') {
        const cleanType = TypeUtils.convertDomTypeToTsType({ type: signature.type });
        typeByCleanType[cleanType] = signature.type;
      } else {
        throw new Error('signature type must be a string');
      }
    });
  }

  typesByCleanType.forEach((typeByCleanType, index) => {
    const types = Object.values(typeByCleanType);
    if (types.length > 1) overrides[index].type = types.map(t => ({ type: t }));
  });

  return overrides;
}

function definitionsHaveConflict(definitions: { value: string }[]): boolean {
  if (definitions.length === 1) return false;
  let definition;
  for (const def of definitions) {
    if (!definition) definition = def.value;
    if (definition !== def.value) return true;
  }
  return false;
}

function loadWebidls(componentizer: Componentizer, dir: string, filenames: string[]) {
  for (const filename of filenames) {
    if (!filename.match(/\.webidl$/)) continue;
    const filepath = Path.resolve(dir, filename);
    const webidl = Fs.readFileSync(filepath, 'utf-8');
    componentizer.addWebIDL(webidl, filename);
  }
}

run();
