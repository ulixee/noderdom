#!/usr/bin/env ts-node

import * as Fs from 'fs';
import * as Path from 'path';
import config from '../../config';
import ComponentFilters from '../../src/ComponentFilters';
import { IBuildType, BuildType } from '../../src/interfaces/IBuildType';

const buildType = process.argv[2];
if (buildType !== BuildType.awaited && buildType !== BuildType.detached) {
  throw new Error('first arg must be either awaited or detached');
}

const componentFiltersPath = Path.join(config.filesImportedDir, `component-filters-${buildType}.json`);
const componentFiltersMap = new ComponentFilters(buildType as IBuildType).toMap();

Fs.writeFileSync(componentFiltersPath, JSON.stringify(componentFiltersMap, null, 2));
