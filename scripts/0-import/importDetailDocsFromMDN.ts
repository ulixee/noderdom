#!/usr/bin/env ts-node

import * as Fs from 'fs';
import * as Path from 'path';
import Axios from 'axios';
import { DOMParser } from 'noderdom-detached';
import { IElement } from 'noderdom-detached/base/interfaces';
import config from '../../config';

const urlBase = 'https://developer.mozilla.org';
const mdnDocsDir = Path.join(config.filesImportedDir, 'mdn');
const mdnSpecsDir = Path.join(config.filesImportedDir, 'mdn-specs');
const mdnInterfacesPath = Path.resolve(__dirname, config.filesImportedDir, 'mdn-interfaces.json');
const domParser = new DOMParser();

try {
  Fs.mkdirSync(mdnSpecsDir);
} catch (err) {} // tslint:disable-line

const mdnFilesToCheck: Set<string> = new Set(Fs.readdirSync(mdnSpecsDir));

const mdnInterfaces = JSON.parse(Fs.readFileSync(mdnInterfacesPath, 'utf-8'));

async function run() {
  const mdnDocs = Fs.readdirSync(mdnDocsDir);
  for (const filename of mdnDocs) {
    const html = Fs.readFileSync(`${mdnDocsDir}/${filename}`, 'utf-8');
    const mdnInterface = mdnInterfaces.find((x: any) => x.filename === filename);
    if (!mdnInterface) {
      console.log('DOC NOT IN mdnInterface.json', filename);
      continue;
    }
    const document = domParser.parseFromString(html, 'text/html');
    for (const anchor of document.querySelectorAll('.sidebar a')) {
      const urlPath = (anchor as IElement).getAttribute('href') || ''; // n.href;
      const extractedFilename = extractFilename(urlPath);
      if (urlPath.endsWith(mdnInterface.urlPath)) continue;
      if (!urlPath.includes(mdnInterface.urlPath) || mdnFilesToCheck.has(extractedFilename)) {
        continue;
      }

      const isDocumented = extractBoolean(urlPath ? await loadAndSaveHTML(urlPath) : false);

      if (isDocumented) {
        console.log('-'.padEnd(100, '-'));
        console.log(`SAVED TO ${extractedFilename}`);
        console.log(''.padEnd(100, '-'));
        console.log('');
      }
    }
  }

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
  const filepath = Path.join(mdnSpecsDir, filename);
  mdnFilesToCheck.delete(filename);
  try {
    return Fs.readFileSync(filepath, 'utf-8');
  } catch (_error) {
    return '';
  }
}

function saveLocalHTMLFile(filename: string, html: string) {
  const filepath = Path.join(mdnSpecsDir, filename);
  Fs.writeFileSync(filepath, html);
}

function extractBoolean(...values: any[]) {
  for (const value of values) {
    if (value === undefined) continue;
    return !!value;
  }
  return false;
}

run().catch(error => console.log(error));
