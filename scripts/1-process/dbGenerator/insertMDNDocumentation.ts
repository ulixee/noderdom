#!/usr/bin/env ts-node

import * as Path from 'path';
import * as Fs from 'fs';
import db from '../../../db';
import config from '../../../config';
import DocumentationExtractor, { IMDNPropertyItem, IMDNMethodItem } from '../../../src/DocumentationExtractor';
import Components from '../../../src/Components';
import { compareName } from '../../../src/utils';
import Printer from '../../../src/Printer';
import TsBodyPrinter from '../../../src/TsBodyPrinter';

const componentsPath = Path.join(config.filesProcessedDir, 'components-standard.json');
const componentsData = JSON.parse(Fs.readFileSync(componentsPath, 'utf-8'));
const components = new Components(componentsData).cleanup();
const interfaces = db.prepare(`SELECT * FROM interfaces`).all();

if (process.argv[2]) {
  const name = process.argv[2];
  const record = db.prepare(`SELECT * FROM interfaces WHERE name=?`).get([name]);
  interfaces.splice(0, interfaces.length);
  if (record) interfaces.push(record);
}

let interfaceCount = 0;
let accurateCount = 0;

interfaces.forEach(i => {
  if (!components.allInterfacesMap[i.name]) return;
  const name = i.name;
  const fromMDN = fetchFromMDN(name);
  if (!fromMDN) {
    console.log('\n');
    console.log(''.padEnd(150, '='));
    console.log(`${name} `.padEnd(150, '='));
    console.log('');
    console.log(`MISSING DOCUMENTATION :(`);
    console.log(''.padEnd(150, '='));
    return;
  }

  const dbProperties = db.prepare('SELECT * FROM properties WHERE interfaceName=?').all([name]);
  const dbMethods = db.prepare('SELECT * FROM methods WHERE interfaceName=?').all([name]);

  interfaceCount += 1;
  console.log('MDN -> %s', name);
  injectMissingMDNData(name, fromMDN, dbProperties, dbMethods);
  const mdnChromePropertyNames = extractValidPropertyNames(fromMDN, dbProperties);
  const mdnChromeMethodNames = extractValidMethodNames(fromMDN, dbMethods);

  const dbPropertyNames = dbProperties.map(p => p.localName);
  const dbMethodNames = dbMethods.map(p => p.localName);

  const propertyDiffs = extractPropertyDiffs(name, mdnChromePropertyNames, dbPropertyNames);
  const methodDiffs = extractMethodDiffs(name, mdnChromeMethodNames, dbMethodNames);

  if (!propertyDiffs.length && !methodDiffs.length) {
    insertIntoDb(name, fromMDN);
    accurateCount += 1;
    return;
  }
  console.log('\n');
  console.log(''.padEnd(150, '='));
  console.log(`${name} `.padEnd(150, '='));
  console.log('');

  if (propertyDiffs.length) {
    const allPropertyNames = Array.from(new Set([...mdnChromePropertyNames, ...dbPropertyNames])).sort();
    console.log(`${name} Properties`.padEnd(50), 'MDN'.padEnd(25), 'IDL'.padEnd(25), 'Chrome');
    console.log(''.padEnd(50, '-'), ''.padEnd(25, '-'), ''.padEnd(25, '-'), ''.padEnd(50, '-'));
    allPropertyNames.forEach(n => {
      console.log(
        n.padEnd(50),
        (mdnChromePropertyNames.includes(n) ? 'X' : supportedByChrome(fromMDN, n) ? 'PARTIAL' : '').padEnd(25),
        (dbPropertyNames.includes(n) ? 'X' : '').padEnd(25),
        fromMDN.browserSupport[n] ? 'Y' : '',
      );
    });
    if (methodDiffs.length) console.log(''.padEnd(150, '-'));
  }

  if (methodDiffs.length) {
    const allMethodNames = Array.from(new Set([...mdnChromeMethodNames, ...dbMethodNames])).sort();
    console.log('');
    console.log(`${name} Methods`.padEnd(50), 'MDN'.padEnd(25), 'IDL'.padEnd(25), 'Chrome');
    console.log(''.padEnd(50, '-'), ''.padEnd(25, '-'), ''.padEnd(25, '-'), ''.padEnd(50, '-'));
    allMethodNames.forEach(n => {
      console.log(
        n.padEnd(50),
        (mdnChromeMethodNames.includes(n) ? 'X' : supportedByChrome(fromMDN, n) ? 'PARTIAL' : '').padEnd(25),
        (dbMethodNames.includes(n) ? 'X' : '').padEnd(25),
        fromMDN.browserSupport[n] ? 'Y' : '',
      );
    });
  }
});

console.log('\n');
console.log(''.padEnd(150, '='));
console.log(`${accurateCount} of ${interfaceCount} WEBIDLs ARE ACCURATE`);
console.log('');

function insertIntoDb(interfaceName: string, fromMDN: any) {
  const existing = db.prepare(`SELECT * FROM interfaces WHERE name=?`).get([interfaceName]);
  if (existing) {
    const data = {
      docOverview: JSON.stringify(fromMDN.intro),
    };
    const values = [...Object.values(data), interfaceName];
    db.prepare(`UPDATE interfaces SET ${Object.keys(data).map(k => `${k}=?`)} WHERE name=?`).run(values);
  }
  fromMDN.properties.items.forEach((item: IMDNPropertyItem) => insertPropertyIntoDb(interfaceName, item));
  fromMDN.methods.items.forEach((item: IMDNPropertyItem) => insertMethodIntoDb(interfaceName, item));
}

function insertPropertyIntoDb(interfaceName: string, property: IMDNPropertyItem) {
  const name = `${interfaceName}.${property.name}`;
  const existing = db.prepare(`SELECT * FROM properties WHERE name=?`).get([name]);
  if (existing) {
    const data = {
      docOverview: property.description,
      isExperimental: Number(property.isExperimental || 0),
      isDocumented: Number(true || 0),
      isOnMDN: Number(true || 0),
      mdnDocumentationPath: property.mdnDocumentationPath,
    };
    const values = [...Object.values(data), name];
    db.prepare(`UPDATE properties SET ${Object.keys(data).map(k => `${k}=?`)} WHERE name=?`).run(values);
  }
}

function insertMethodIntoDb(interfaceName: string, method: IMDNMethodItem) {
  const name = `${interfaceName}.${method.name}`;
  const existing = db.prepare(`SELECT * FROM methods WHERE name=?`).get([name]);
  if (existing) {
    const data = {
      docOverview: method.description,
      isExperimental: Number(method.isExperimental || 0),
      isDocumented: Number(true || 0),
      isOnMDN: Number(true || 0),
      mdnDocumentationPath: method.mdnDocumentationPath,
    };
    const values = [...Object.values(data), name];
    db.prepare(`UPDATE methods SET ${Object.keys(data).map(k => `${k}=?`)} WHERE name=?`).run(values);
    // } else {
    //   console.log(`${name} method does not exist in db!!!`);
  }
}

function extractPropertyDiffs(className: string, propNames1: string[], propNames2: string[]) {
  const diffs = arraysDiff(propNames1, propNames2);
  if (className === 'HTMLElement') removeFromArray(diffs, 'autoCapitalize');
  if (className === 'HTMLOptionsCollection') removeFromArray(diffs, 'selectedIndex');
  if (className === 'HTMLSelectElement') removeFromArray(diffs, 'autocomplete');
  if (className === 'TextTrack') removeFromArray(diffs, 'oncuechange');
  return diffs;
}

function extractMethodDiffs(_className: string, methNames1: string[], methNames2: string[]) {
  return arraysDiff(methNames1, methNames2);
}

function removeFromArray(array: string[], ...itemsToRemove: string[]) {
  for (const item of itemsToRemove) {
    const index = array.findIndex((n: string) => n === item);
    if (index >= 0) array.splice(index, 1);
  }
}

function arraysDiff(arr1: string[], arr2: string[]) {
  return arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
}

function extractValidPropertyNames(fromMDN: any, dbProperties: any[]): string[] {
  const mdnChromeProperties = fromMDN.properties.items
    .filter((item: IMDNPropertyItem) => {
      const n = item.name;
      if (!fromMDN.browserSupport[n] && item.isExperimental) return false;
      if (arrayHasLocalName(dbProperties, n)) return true;
      return supportedByChrome(fromMDN, n) && !isDeprecated(fromMDN, n);
    })
    .sort(compareName)
    .map((p: IMDNPropertyItem) => p.name);
  return Array.from(new Set(mdnChromeProperties));
}

function extractValidMethodNames(fromMDN: any, dbMethods: any[]): string[] {
  const mdnChromeMethods = fromMDN.methods.items
    .filter((item: IMDNMethodItem) => {
      const n = item.name;
      if (!fromMDN.browserSupport[n] && item.isExperimental) return false;
      return arrayHasLocalName(dbMethods, n) || (supportedByChrome(fromMDN, n) && !isDeprecated(fromMDN, n));
    })
    .sort(compareName)
    .map((p: IMDNMethodItem) => p.name);

  return Array.from(new Set(mdnChromeMethods));
}

function arrayHasLocalName(array: any[], value: any) {
  for (const dbProperty of array) {
    if (dbProperty.localName === value) return true;
  }
  return false;
}

function supportedByChrome(fromMDN: any, n: string) {
  if (!fromMDN.browserSupport) return false;
  if (!fromMDN.browserSupport[n]) return false;
  return fromMDN.browserSupport[n].chrome || false;
}

function isDeprecated(fromMDN: any, n: string) {
  if (!fromMDN.browserSupport) return false;
  if (!fromMDN.browserSupport[n]) return false;
  return fromMDN.browserSupport[n].isDeprecated || false;
}

function fetchFromMDN(name: string) {
  const record = db.prepare(`SELECT * FROM interfaces WHERE name=?`).get([name]);
  if (!record) return;
  if (!record.mdnFilename) return;

  const filepath = Path.resolve(config.filesImportedDir, 'mdn', record.mdnFilename);
  const documentExtractor = new DocumentationExtractor(filepath);
  if (!documentExtractor.foundFile) return;

  const url = `https://developer.mozilla.org${record.mdnDocumentationPath}`;
  // const inheritance = documentExtractor.extractInheritance();
  const intro = documentExtractor.extractIntro();
  const properties = documentExtractor.extractProperties(name);
  const methods = documentExtractor.extractMethods(name);
  const browserSupport = documentExtractor.extractBrowserSupport();

  return { name, url, intro, properties, methods, browserSupport };
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function injectMissingMDNData(className: string, fromMDN: any, dbProperties: any[], dbMethods: any[]) {
  const mdnPropertyItems = fromMDN.properties.items;
  const mdnMethodItems = fromMDN.methods.items;

  if (className === 'CSSRuleList') {
    mdnPropertyItems.push({
      name: 'length',
      mdnDocumentationPath: '',
      isReadonly: false,
      isExperimental: false,
      description: 'Returns the number of items in the collection.',
    });
    mdnMethodItems.push({
      name: 'item',
      mdnDocumentationPath: '',
      isStatic: false,
      isExperimental: false,
      description:
        'Returns the specific node at the given zero-based index into the list. Returns null if the index is out of range.',
    });
  }

  if (className === 'CSSStyleDeclaration') {
    const cssFloat = {
      name: 'cssFloat',
      mdnDocumentationPath: '',
      isReadonly: false,
      isExperimental: false,
      description:
        'The cssFloat attribute can be set for elements that generate boxes that are not absolutely positioned. The cssFloat attribute corresponds to the float Cascading Style Sheets (CSS) property. Getting this attribute is equivalent to calling the getProperty method. Setting this attribute is equivalent to calling the setProperty method.',
    };
    mdnPropertyItems.push(cssFloat);
  }

  if (className === 'DOMParser') {
    mdnMethodItems.push({
      name: 'parseFromString',
      isStatic: false,
      isExperimental: false,
      description: 'Parse XML from a string',
    });
  }

  if (className === 'DOMRect') {
    const mdnReadonly = fetchFromMDN('DOMRectReadOnly');
    if (mdnReadonly) {
      const propertiesByName: { [name: string]: IMDNPropertyItem } = {};
      mdnReadonly.properties.items.forEach(item => (propertiesByName[item.name] = item));
      dbProperties.forEach((p: any) => mdnPropertyItems.push(propertiesByName[p.localName]));

      const methodsByName: { [name: string]: IMDNMethodItem } = {};
      mdnReadonly.methods.items.forEach(item => (methodsByName[item.name] = item));
      dbMethods.forEach((p: any) => mdnMethodItems.push(methodsByName[p.localName]));
    }
  }

  if (className === 'Document') {
    // need to remove properties defined in DocumentAndElementEventHandlers
    {
      const i = components.mixins.DocumentAndElementEventHandlers;
      const printer = new Printer();
      const bodyPrinter = new TsBodyPrinter(i, printer, components);
      bodyPrinter.properties.forEach(p => {
        const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === p.name);
        mdnPropertyItems.splice(index, 1);
      });
    }

    // remove onselectionchange since it's actually defined in GlobalEventHandlers
    {
      const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === 'onselectionchange');
      if (index >= 0) mdnPropertyItems.splice(index, 1);
    }

    // MDN incorrectly shows onpointerlockchange and onpointerlockerror as properties of GlobalEventHandlers
    {
      const globalEventHandlers = fetchFromMDN('GlobalEventHandlers');
      if (globalEventHandlers) {
        ['onpointerlockchange', 'onpointerlockerror'].forEach(name => {
          const index = globalEventHandlers.properties.items.findIndex(item => item.name === name);
          if (index < 0) return;
          mdnPropertyItems.push(globalEventHandlers.properties.items[index]);
        });
      }
    }

    // fullscreenEnabled is listed as property but not displayed in body
    do {
      const name = 'fullscreenEnabled';
      const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === name);
      if (index >= 0) break;
      mdnPropertyItems.push({
        name,
        description: 'Indicates whether or not full-screen mode is available.',
        mdnDocumentationPath: '/en-US/docs/Web/API/Document/fullscreenEnabled',
        isReadonly: true,
      });
    } while (false);

    // remove methods that are defined in inherited classes
    const inherited = ['XPathEvaluatorBase', 'ParentNode'];
    inherited.forEach(name => {
      const i = components.interfaces[name] || components.mixins[name];
      const printer = new Printer();
      const bodyPrinter = new TsBodyPrinter(i, printer, components);
      bodyPrinter.methods.map(method => {
        const index = mdnMethodItems.findIndex((m: IMDNMethodItem) => m.name === method.name);
        if (index >= 0) mdnMethodItems.splice(index, 1);
      });
    });

    // these methods seem to be deprecated even though MDN does not mark them as such
    ['queryCommandIndeterm', 'queryCommandValue'].forEach(name => {
      const index = mdnMethodItems.findIndex((item: IMDNMethodItem) => item.name === name);
      if (index >= 0) mdnMethodItems.splice(index, 1);
    });

    // I could not find webidls for these methods
    ['caretRangeFromPoint'].forEach(name => {
      const index = mdnMethodItems.findIndex((item: IMDNMethodItem) => item.name === name);
      if (index >= 0) mdnMethodItems.splice(index, 1);
    });

    // getSelection is also defined directly on Document
    const documentOrShadowRoot = fetchFromMDN('DocumentOrShadowRoot');
    if (documentOrShadowRoot) {
      const index = documentOrShadowRoot.methods.items.findIndex(item => item.name === 'getSelection');
      if (index) {
        fromMDN.browserSupport.getSelection = documentOrShadowRoot.browserSupport.getSelection;
        mdnMethodItems.push(documentOrShadowRoot.methods.items[index]);
      }
    }

    {
      // exitFullscreen is listed as method but not displayed in body
      const name = 'exitFullscreen';
      const index = mdnMethodItems.findIndex((item: IMDNMethodItem) => item.name === name);
      if (index < 0) {
        mdnMethodItems.push({
          name,
          description:
            'Requests that the element on this document which is currently being presented in full-screen mode be taken out of full-screen mode, restoring the previous state of the screen.',
          mdnDocumentationPath: '/en-US/docs/Web/API/Document/exitFullscreen',
          isStatic: false,
        });
      }
    }
  }

  if (className === 'DocumentFragment') {
    // remove methods that are defined in inherited classes
    const inherited = ['ParentNode'];
    inherited.forEach(name => {
      const i = components.interfaces[name] || components.mixins[name];
      const printer = new Printer();
      const bodyPrinter = new TsBodyPrinter(i, printer, components);
      bodyPrinter.methods.map(method => {
        const index = mdnMethodItems.findIndex((m: IMDNMethodItem) => m.name === method.name);
        if (index >= 0) mdnMethodItems.splice(index, 1);
      });
    });
  }

  if (className === 'DocumentOrShadowRoot') {
    // I cannot find styleSheets in the spec linked from MDN
    const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === 'styleSheets');
    if (index >= 0) mdnPropertyItems.splice(index, 1);
  }

  if (className === 'Element') {
    // remove methods that are defined in inherited classes
    const inherited = ['ParentNode', 'Animatable'];
    inherited.forEach(name => {
      const i = components.interfaces[name] || components.mixins[name];
      const printer = new Printer();
      const bodyPrinter = new TsBodyPrinter(i, printer, components);
      bodyPrinter.methods.map(method => {
        const index = mdnMethodItems.findIndex((m: IMDNMethodItem) => m.name === method.name);
        if (index >= 0) mdnMethodItems.splice(index, 1);
      });
    });
  }

  if (className === 'File') {
    // webkitRelativePath is a webkit specific property
    {
      const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === 'webkitRelativePath');
      if (index >= 0) mdnPropertyItems.splice(index, 1);
    }
    // type is defined in Blob which File extends so should not be listed in File
    {
      const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === 'type');
      if (index >= 0) mdnPropertyItems.splice(index, 1);
    }
  }

  if (className === 'FileList') {
    // item is documented but DocumentationExtractor can't parse it... for the sake of time, this is a HACK:
    const index = fromMDN.methods.items.findIndex((m: any) => m.name === 'item');
    if (index < 0) {
      fromMDN.methods.items.push({
        name: 'item',
        description:
          'Returns a <a href="/en-US/docs/DOM/File" title="DOM/File"><code>File</code></a> object representing the file at the specified index in the file list.',
      });
    }
  }

  if (className === 'HTMLAnchorElement') {
    // cannot find media property in the latest webidl spec
    {
      const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === 'media');
      if (index >= 0) mdnPropertyItems.splice(index, 1);
    }
  }

  if (className === 'HTMLAreaElement') {
    // cannot find media property in the latest webidl spec
    {
      const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === 'media');
      if (index >= 0) mdnPropertyItems.splice(index, 1);
    }
  }

  if (className === 'HTMLButtonElement') {
    // accessKey is now directly defined in inherited HTMLElement
    {
      const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === 'accessKey');
      if (index >= 0) mdnPropertyItems.splice(index, 1);
    }

    // tabIndex is defined in inherited HTMLOrSVGElement
    {
      const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === 'tabIndex');
      if (index >= 0) mdnPropertyItems.splice(index, 1);
    }
  }

  if (className === 'HTMLElement') {
    // remove elements that are defined in inherited mixins
    const mixins = [
      'HTMLOrSVGElement',
      'ElementContentEditable',
      'DocumentAndElementEventHandlers',
      'ElementCSSInlineStyle',
    ];
    mixins.forEach(name => {
      const i = components.mixins[name];
      const printer = new Printer();
      const bodyPrinter = new TsBodyPrinter(i, printer, components);
      bodyPrinter.properties.map(prop => {
        const index = mdnPropertyItems.findIndex((p: IMDNPropertyItem) => p.name === prop.name);
        if (index >= 0) mdnPropertyItems.splice(index, 1);
      });
      bodyPrinter.methods.map(meth => {
        const index = mdnMethodItems.findIndex((m: IMDNMethodItem) => m.name === meth.name);
        if (index >= 0) mdnMethodItems.splice(index, 1);
      });
    });

    // noModule is part of HTMLScriptElement but doesn't seem to fit HTMLElement
    const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === 'noModule');
    if (index >= 0) mdnPropertyItems.splice(index, 1);
  }

  if (className === 'HTMLFormElement') {
    const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === 'encoding');
    const mdnDocumentationPath = '/en-US/docs/Web/API/HTMLFormElement/enctype';
    const enctype = Object.assign({}, mdnPropertyItems[index], { name: 'enctype', mdnDocumentationPath });
    mdnPropertyItems.push(enctype);
  }

  if (className === 'HTMLIFrameElement') {
    const corrections: { [k: string]: string } = { allowfullscreen: 'allowFullscreen' };
    Object.keys(corrections).forEach(name => {
      const correctName = corrections[name];
      const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === name);
      if (index) mdnPropertyItems[index].name = correctName;
      if (index && fromMDN.browserSupport[name]) {
        fromMDN.browserSupport[correctName] = fromMDN.browserSupport[name];
        delete fromMDN.browserSupport[name];
      }
    });
  }

  if (className === 'HTMLInputElement') {
    const corrections: { [k: string]: string } = { inputmode: 'inputMode', formEncType: 'formEnctype' };
    Object.keys(corrections).forEach(name => {
      const correctName = corrections[name];
      const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === name);
      if (index) mdnPropertyItems[index].name = correctName;
      if (index && fromMDN.browserSupport[name]) {
        fromMDN.browserSupport[correctName] = fromMDN.browserSupport[name];
        delete fromMDN.browserSupport[name];
      }
    });
    ['webkitEntries', 'webkitdirectory'].forEach(name => {
      const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === name);
      if (index >= 0) mdnPropertyItems.splice(index, 1);
    });
  }

  if (className === 'HTMLObjectElement') {
    // reportValidity is listed in MDN's browser support table but has no documentation
    const index = fromMDN.methods.items.findIndex((m: any) => m.name === 'reportValidity');
    if (index < 0) {
      fromMDN.methods.items.push({
        name: 'reportValidity',
        description:
          "Returns true if the element's value has no validity problems; otherwise, returns false, fires an invalid event at the element, and (if the event isn't canceled) reports the problem to the user.",
      });
    }
  }

  if (className === 'HTMLOptionsCollection') {
    // add and remove are listed in MDN's browser support table but have no documentation
    const methods: any = {
      add: 'Inserts element before the node given by before.',
      remove: 'Removes the item with index index from the collection.',
    };
    Object.keys(methods).forEach(name => {
      const index = fromMDN.methods.items.findIndex((m: any) => m.name === name);
      if (index < 0) {
        fromMDN.methods.items.push({
          name,
          description: methods[name],
        });
      }
    });
  }

  if (className === 'HTMLStyleElement') {
    // I could not find the disabled attribute in any of the webidl specs
    const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === 'disabled');
    if (index >= 0) mdnPropertyItems.splice(index, 1);
  }

  if (className === 'HTMLTableElement') {
    // createTBody is listed in MDN's browser support table but has no documentation
    const index = fromMDN.methods.items.findIndex((m: any) => m.name === 'createTBody');
    if (index < 0) {
      fromMDN.methods.items.push({
        name: 'createTBody',
        description: 'Creates a tbody element, inserts it into the table, and returns it.',
      });
    }
  }

  if (className === 'HTMLTextAreaElement') {
    // autoCapitalize is defined in HTMLElement
    const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === 'autocapitalize');
    if (index >= 0) mdnPropertyItems.splice(index, 1);
  }

  if (className === 'Location') {
    // MDN says username/password is defined on Location but links to HTMLHyperlinkElementUtils
    ['username', 'password'].forEach(name => {
      const index = mdnPropertyItems.findIndex((item: IMDNPropertyItem) => item.name === name);
      if (index >= 0) mdnPropertyItems.splice(index, 1);
    });
  }

  if (className === 'Range') {
    // remove properties that are defined in inherited classes
    const inherited = ['AbstractRange'];
    inherited.forEach(name => {
      const i = components.interfaces[name];
      const printer = new Printer();
      const bodyPrinter = new TsBodyPrinter(i, printer, components);
      bodyPrinter.properties.map(prop => {
        const index = mdnPropertyItems.findIndex((p: IMDNPropertyItem) => p.name === prop.name);
        if (index >= 0) mdnPropertyItems.splice(index, 1);
      });
    });
  }

  if (className === 'SVGElement') {
    // remove properties that are defined in inherited classes
    const inherited = ['HTMLOrSVGElement'];
    inherited.forEach(name => {
      const i = components.mixins[name];
      const printer = new Printer();
      const bodyPrinter = new TsBodyPrinter(i, printer, components);
      bodyPrinter.properties.map(prop => {
        const index = mdnPropertyItems.findIndex((p: IMDNPropertyItem) => p.name === prop.name);
        if (index >= 0) mdnPropertyItems.splice(index, 1);
      });
    });
  }

  if (className === 'Text') {
    // assignedSlot is inherited from Slotable
    mdnPropertyItems.splice(
      0,
      mdnPropertyItems.length,
      ...mdnPropertyItems.filter((item: IMDNPropertyItem) => item.name !== 'assignedSlot'),
    );
  }
}
