#!/usr/bin/env ts-node

import * as Fs from 'fs';
import * as Path from 'path';
import config from '../../config';
import Components from '../../src/Components';
import DOMCreator from '../../src/DOMCreator';
import { IBuildType, BuildType } from '../../src/interfaces/IBuildType';

const buildType = process.argv[2] as IBuildType;
if (!BuildType[buildType]) {
  throw new Error('first arg must be awaited, detached, or standard');
}

async function run() {
  const outputDir = Path.join(config.filesFinalizedDir, `${buildType}-base`);

  const componentsPath = Path.join(config.filesProcessedDir, `components-${buildType}.json`);
  const componentsData = JSON.parse(Fs.readFileSync(componentsPath, 'utf-8'));
  const components = new Components(componentsData);

  const options = { baseDir: outputDir, buildType: buildType };
  const domCreator = new DOMCreator(components, options);
  domCreator.createBasics();

  if (buildType === BuildType.awaited) {
    domCreator.createIsolates();
    domCreator.createSupers();
  }
}

run().catch(error => console.log(error));
