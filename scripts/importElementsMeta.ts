import Axios from 'axios';
import * as Path from 'path';
import * as Fs from 'fs';
import { IElementMeta } from '../src/ElementsMeta';

const outputFilepath = Path.join(__dirname, '../inputs/elementsMeta.json');
const data: Record<string, any> = {};
const sources = {
  preprocessedTypes:
    'https://raw.githubusercontent.com/microsoft/TSJS-lib-generator/master/inputfiles/browser.webidl.preprocessed.json',
  addedTypes: 'https://raw.githubusercontent.com/microsoft/TSJS-lib-generator/master/inputfiles/addedTypes.json',
  overridingTypes:
    'https://raw.githubusercontent.com/microsoft/TSJS-lib-generator/master/inputfiles/overridingTypes.json',
};

async function run() {
  for (const [name, url] of Object.entries(sources)) {
    const response = await Axios.get(url);
    data[name] = response.data;
  }

  const elementsMetaByName: Record<string, IElementMeta> = {};
  const typeNames: Set<string> = new Set([
    ...Object.keys(data.preprocessedTypes.interfaces.interface),
    ...Object.keys(data.addedTypes.interfaces.interface),
    ...Object.keys(data.overridingTypes.interfaces.interface),
  ]);

  for (const typeName of typeNames.values()) {
    const tagsByName: Record<string, any> = {};
    const preprocessedElements = extractElements(data.preprocessedTypes.interfaces.interface[typeName]);
    const addedElements = extractElements(data.addedTypes.interfaces.interface[typeName]);
    const overriddenElements = extractElements(data.overridingTypes.interfaces.interface[typeName]);
    if (!preprocessedElements.length && !addedElements.length && !overriddenElements.length) continue;

    for (const tag of preprocessedElements) {
      tagsByName[tag.name] = Object.assign(tagsByName[tag.name] || {}, tag);
    }
    for (const tag of addedElements) {
      tagsByName[tag.name] = Object.assign(tagsByName[tag.name] || {}, tag);
    }
    for (const tag of overriddenElements) {
      tagsByName[tag.name] = Object.assign(tagsByName[tag.name] || {}, tag);
    }

    const tags = Object.values(tagsByName);
    const tagWithNamespace = tags.find((t: { namespace: string }) => t.namespace);
    const namespace = tagWithNamespace ? tagWithNamespace.namespace : extractNamespaceFromTypeName(typeName);

    tags.forEach((tag: any) => {
      if (tag['html-self-closing']) tag.selfClosing = tag['html-self-closing'];
      if (tag.namespace && tag.namespace !== namespace) {
        throw new Error(`namespaces do not match: ${namespace} vs ${tag.namespace}`);
      }
      delete tag.specs;
      delete tag.namespace;
      delete tag['html-self-closing'];
    });

    elementsMetaByName[typeName] = {
      name: typeName,
      namespace,
      tags,
    };
  }

  Fs.writeFileSync(outputFilepath, JSON.stringify(elementsMetaByName, null, 2));
  console.log('FINISHED PROCESSING ELEMENTS META');
}

run().catch(error => console.log(error));

function extractElements(type: any) {
  return type && type.element ? type.element : [];
}

function extractNamespaceFromTypeName(typeName: string) {
  if (typeName.match(/^HTML/)) {
    return 'HTML';
  }
  if (typeName.match(/^SVG/)) {
    return 'SVG';
  }
  throw new Error('Unable to extract namespace from typeName');
}
