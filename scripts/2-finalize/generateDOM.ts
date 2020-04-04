#!/usr/bin/env ts-node

import * as Fs from 'fs';
import * as Path from 'path';
import config from '../../config';
import Components from '../../src/Components';
import DOMCreator from '../../src/DOMCreator';

const buildType = process.argv[2];
if (!['static', 'dynamic', 'standard'].includes(buildType)) {
  throw new Error('first arg must be static, dynamic, or standard');
}

async function run() {
  const outputDir = Path.join(config.filesFinalizedDir, buildType);

  const componentsPath = Path.join(config.filesProcessedDir, `components-${buildType}.json`);
  const componentsData = JSON.parse(Fs.readFileSync(componentsPath, 'utf-8'));
  const components = new Components(componentsData);

  const options = { baseDir: outputDir, isDynamic: buildType === 'dynamic' };
  const domCreator = new DOMCreator(components, options);
  domCreator.createBasics();

  if (options.isDynamic) {
    domCreator.createIsolates();
    domCreator.createIshes();
  }
}

run().catch(error => console.log(error));
