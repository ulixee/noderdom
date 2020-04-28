import * as Fs from 'fs';
import * as Path from 'path';
import Axios from 'axios';
import { DOMParser } from 'noderdom';
import { IDocument, IElement } from 'noderdom/base/interfaces';
import config from '../../config';

const cherryPickedInterfaceNames = [
  'DOMRectReadOnly',
  'DOMRect',
  'CSSStyleDeclaration',
  'CSSRule',
  'CSSStyleSheet',
  'CSSRuleList',
  'StyleSheet',
  'MediaList',
  'DOMParser',
  'XMLSerializer',
  'Blob',
  'File',
  'FileList',
  'FontFace',
  'ShadowRoot',
  'AbstractRange',
  'StaticRange',
  'HTMLDocument',
  'EventListener',
  'DocumentOrShadowRoot',
  'GlobalEventHandlers',
  'HTMLHyperlinkElementUtils',
  'LinkStyle',
  'Slotable',
  'WindowEventHandlers',
];

interface IRecord {
  name: string;
  filename: string;
  urlPath: string;
  category: string;
  isDeprecated: boolean;
  isExperimental: boolean;
  isObsolete: boolean;
  isDocumented: boolean;
  isOnMDN: boolean;
  sourcedAtPath: string;
}

const urlBase = 'https://developer.mozilla.org';
const mdnDir = Path.join(config.filesImportedDir, 'mdn');
const domParser = new DOMParser();
const records: IRecord[] = [];

try {
  Fs.mkdirSync(mdnDir);
} catch (err) {} // tslint:disable-line
const mdnFilesToCheck: Set<string> = new Set(Fs.readdirSync(mdnDir));

async function run() {
  {
    const urlPath = '/en-US/docs/Web/API/Document_Object_Model';
    const html = await loadAndSaveHTML(urlPath);
    const document = domParser.parseFromString(html, 'text/html');

    await extract(urlPath, document, 'DOMCore', '#DOM_interfaces');
    await extract(urlPath, document, 'DOMCore', '#Obsolete_DOM_interfaces', { isObsolete: true });
    await extract(urlPath, document, 'SVGElements', '#SVG_interfaces');
    await extract(urlPath, document, 'SVGStaticTypes', '#Static_type');
    await extract(urlPath, document, 'SVGAnimatedTypes', '#Animated_type');
    await extract(urlPath, document, 'SVGSMIL', '#SMIL_related_interfaces');
    await extract(urlPath, document, 'SVGOther', '#Other_SVG_interfaces');
  }
  {
    const urlPath = '/en-US/docs/Web/API/HTML_DOM_API';
    const html = await loadAndSaveHTML(urlPath);
    const document = domParser.parseFromString(html, 'text/html');

    await extract(urlPath, document, 'BrowserWindow', '#Web_app_and_browser_integration_interfaces');
    await extract(urlPath, document, 'CanvasAndImage', '#Canvas_and_image_interfaces');
    await extract(urlPath, document, 'DragDrop', '#Drag_and_drop_interfaces');
    await extract(urlPath, document, 'HTMLElements', '#HTML_element_interfaces_2');
    await extract(urlPath, document, 'FormSupport', '#Form_support_interfaces');
    await extract(urlPath, document, 'Media', '#Media_interfaces');
    await extract(urlPath, document, 'Miscellaneous', '#Miscellaneous_and_supporting_interfaces');
    await extract(urlPath, document, 'PageHistory', '#Page_history_interfaces');
    await extract(urlPath, document, 'WebComponents', '#Web_Components_interfaces');

    await extract(urlPath, document, 'ExternalWebStorage', '#Web_storage_interfaces');
    await extract(urlPath, document, 'ExternalWebWorkers', '#Web_Workers_interfaces');
    await extract(urlPath, document, 'ExternalWebSocket', '#WebSocket_interfaces');
    await extract(urlPath, document, 'ExternalServerSentEvents', '#Server-sent_events_interfaces');
  }

  await extractCherryPickedInterfaces(cherryPickedInterfaceNames);

  const filename = Path.resolve(mdnDir, '../mdn-interfaces.json');
  Fs.writeFileSync(filename, JSON.stringify(records, null, 2));

  console.log('-'.padEnd(100, '-'));
  console.log(`SAVED TO ${filename}`);
  console.log(''.padEnd(100, '-'));
  console.log('');

  if (mdnFilesToCheck.size) {
    console.log(`${mdnFilesToCheck.size} FILES IN /mdn WERE NOT UPDATED:`);
    mdnFilesToCheck.forEach(f => console.log(`- ${f}`));
  }
}

function extractFilename(urlPath: string): string {
  return urlPath ? `${urlPath.replace(/\//g, ':').replace(/^:/, '')}.html` : '';
}

async function loadAndSaveHTML(urlPath: string): Promise<string> {
  const nameMatches = urlPath.match(/([^\/]+)$/);
  const name = nameMatches ? nameMatches[1] : 'UNKNOWN';
  const filename = extractFilename(urlPath);
  console.log('-'.padEnd(100, '-'));

  let html: string | null = loadLocalHTMLFile(filename);
  if (html) {
    console.log(`FOUND LOCAL ${name}: `.padEnd(50), `mdn/${filename}`);
    return html;
  }
  console.log(`LOADING ${name}: `.padEnd(50), urlPath);
  html = await loadRemoteHTMLFile(urlPath);
  if (html !== null) {
    saveLocalHTMLFile(filename, html);
  }
  return html || '';
}

async function loadRemoteHTMLFile(urlPath: string): Promise<string | null> {
  try {
    const response = await Axios.get(`${urlBase}${urlPath}`);
    return response.data;
  } catch (error) {
    console.log('ERROR: ', error.response.status);
    return null;
  }
}

function loadLocalHTMLFile(filename: string): string {
  const filepath = Path.join(mdnDir, filename);
  mdnFilesToCheck.delete(filename);
  try {
    return Fs.readFileSync(filepath, 'utf-8');
  } catch (_error) {
    return '';
  }
}

function saveLocalHTMLFile(filename: string, html: string) {
  const filepath = Path.join(mdnDir, filename);
  Fs.writeFileSync(filepath, html);
}

interface IFlags {
  isDeprecated?: boolean;
  isExperimental?: boolean;
  isObsolete?: boolean;
}

function extractBoolean(...values: any[]) {
  for (const value of values) {
    if (value === undefined) continue;
    return !!value;
  }
  return false;
}

async function extract(
  sourcedAtPath: string,
  document: IDocument,
  category: string,
  selector: string,
  flags: IFlags = {},
) {
  console.log(`- loading ${category}`);
  let elem = document.querySelector(selector);
  if (!elem) {
    console.log('could not find: ', selector);
    process.exit();
  }
  while (elem.className !== 'index') {
    elem = elem.nextElementSibling!;
  }
  for (const anchor of elem.querySelectorAll('li a')) {
    const name = anchor.textContent || '';
    const urlPath = (anchor as IElement).getAttribute('href') || ''; // n.href;
    const parentElement = anchor.parentElement!;
    const isDeprecated = extractBoolean(flags.isDeprecated, parentElement.querySelector('i.icon-thumbs-down-alt'));
    const isExperimental = extractBoolean(flags.isExperimental, parentElement.querySelector('i.icon-beaker'));
    const isObsolete = extractBoolean(flags.isObsolete, parentElement.querySelector('i.icon-trash'));
    const isDocumented = extractBoolean(urlPath ? await loadAndSaveHTML(urlPath) : false);
    const filename = extractFilename(urlPath);

    records.push({
      name,
      filename,
      urlPath,
      category,
      isDeprecated,
      isExperimental,
      isObsolete,
      isDocumented,
      isOnMDN: true,
      sourcedAtPath,
    });
  }
}

async function extractCherryPickedInterfaces(interfaceNames: string[]) {
  console.log(''.padEnd(100, '-'));
  console.log('EXTRACTING SPECIFIC INTERFACES...');
  const sourcedAtPath = '/en-US/docs/Web/API';
  const html = await loadRemoteHTMLFile(sourcedAtPath);
  if (html === null) throw new Error('could not load API page');
  const document = domParser.parseFromString(html, 'text/html');
  const elemsByName: any = {};
  for (const code of document.querySelectorAll('li code')) {
    const name = code.textContent || '';
    elemsByName[name] = (code as IElement).closest('li');
  }

  for (const name of interfaceNames) {
    const elem = elemsByName[name];
    if (!elem) {
      console.log(`MISSING ${name} from ${sourcedAtPath}`);
      continue;
    }
    const anchor = elem.querySelector('a');
    const urlPath = (anchor as IElement).getAttribute('href') || ''; // n.href;
    const isDeprecated = extractBoolean(elem.querySelector('i.icon-thumbs-down-alt'));
    const isExperimental = extractBoolean(elem.querySelector('i.icon-beaker'));
    const isObsolete = extractBoolean(elem.querySelector('i.icon-trash'));
    const isDocumented = extractBoolean(urlPath ? await loadAndSaveHTML(urlPath) : false);
    const filename = extractFilename(urlPath);
    records.push({
      name,
      filename,
      urlPath,
      category: 'CherryPicked',
      isDeprecated,
      isExperimental,
      isObsolete,
      isDocumented,
      isOnMDN: true,
      sourcedAtPath,
    });
  }
}

run().catch(error => console.log(error));
