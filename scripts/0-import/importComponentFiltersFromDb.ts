#!/usr/bin/env ts-node

import * as Fs from 'fs';
import * as Path from 'path';
import config from '../../config';
import ComponentFilters from '../../src/ComponentFilters';
import { IDomType, DomType } from '../../src/interfaces/IDomType';

const domType = process.argv[2];
if (domType !== DomType.awaited && domType !== DomType.detached) {
  throw new Error('first arg must be either awaited or detached');
}

const componentFiltersPath = Path.join(config.filesImportedDir, `component-filters-${domType}.json`);
const componentFiltersMap = new ComponentFilters(domType as IDomType).toMap();

Fs.writeFileSync(componentFiltersPath, JSON.stringify(componentFiltersMap, null, 2));
