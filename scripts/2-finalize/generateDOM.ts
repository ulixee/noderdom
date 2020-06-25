#!/usr/bin/env ts-node

import * as Fs from 'fs';
import * as Path from 'path';
import config from '../../config';
import Components from '../../src/Components';
import DOMCreator from '../../src/DOMCreator';
import { IDomType, DomType } from '../../src/interfaces/IDomType';

const domType = process.argv[2] as IDomType;
if (!DomType[domType]) {
  throw new Error('first arg must be awaited, detached, or standard');
}

async function run() {
  const baseDir = Path.join(config.filesFinalizedDir, `${domType}-dom`, 'base');
  const implDir = Path.join(config.filesFinalizedDir, `${domType}-dom`, 'impl');

  const componentsPath = Path.join(config.filesProcessedDir, `components-${domType}.json`);
  const componentsData = JSON.parse(Fs.readFileSync(componentsPath, 'utf-8'));
  const components = new Components(componentsData);

  new DOMCreator(components, { baseDir, implDir, domType: domType }).create();
}

run().catch(error => console.log(error));
