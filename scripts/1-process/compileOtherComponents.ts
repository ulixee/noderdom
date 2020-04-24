#!/usr/bin/env ts-node

/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 * This script creates components-standard.json and components-static.json, which is the JSON output of all the
 * WebIDLs and metaElements.json.
 */

import * as Fs from 'fs';
import * as Path from 'path';
import webIDLFilenames from '../../files/0-imported/webidls';
import Componentizer from '../../src/Componentizer';
import config from '../../config';

const buildType = process.argv[2];
if (!['static', 'standard'].includes(buildType)) {
  throw new Error('first arg must be static or standard');
}

const componentFiltersPath = Path.join(config.filesImportedDir, 'component-filters-static.json');

async function run() {
  const webIDLDir = Path.join(config.filesImportedDir, 'webidls');
  const webIDLExtensionsDir = Path.join(config.filesImportedDir, 'webidl-extensions');
  const webIDLReplacementsDir = Path.join(config.filesImportedDir, 'webidl-replacements');

  // load componentizer
  const componentizer = new Componentizer();
  loadWebidls(componentizer, webIDLDir, webIDLFilenames);
  loadWebidls(componentizer, webIDLExtensionsDir, Fs.readdirSync(webIDLExtensionsDir));
  loadWebidls(componentizer, webIDLReplacementsDir, Fs.readdirSync(webIDLReplacementsDir));

  // compile components
  const components = componentizer.run().cleanup(buildType === 'static' ? componentFiltersPath : undefined);
  const componentsOutputPath = Path.join(config.filesProcessedDir, `components-${buildType}.json`);
  Fs.writeFileSync(componentsOutputPath, JSON.stringify(components, null, 2));
}

function loadWebidls(componentizer: Componentizer, dir: string, filenames: string[]) {
  for (const filename of filenames) {
    if (!filename.match(/\.webidl$/)) continue;
    const filepath = Path.resolve(dir, filename);
    const webidl = Fs.readFileSync(filepath, 'utf-8');
    componentizer.addWebIDL(webidl, filename);
  }
}

run().catch(error => console.log(error));
