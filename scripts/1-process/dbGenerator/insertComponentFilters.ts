#!/usr/bin/env ts-node

import * as Fs from 'fs';
import * as Path from 'path';
import config from '../../../config';
import ComponentFilters from '../../../src/ComponentFilters';
import { IComponentFilter } from '../../../src/interfaces/IComponentFilters';
import { BuildType } from '../../../src/interfaces/IBuildType';

[BuildType.awaited, BuildType.detached].forEach(buildType => {
  const componentFiltersPath = Path.join(config.filesImportedDir, `component-filters-${buildType}.json`);
  const rawComponentFilters = Fs.readFileSync(componentFiltersPath, 'utf-8');
  const componentFiltersMap: { [name: string]: IComponentFilter } = JSON.parse(rawComponentFilters);
  const componentFilters = ComponentFilters.fromMap(buildType, componentFiltersMap);
  componentFilters.saveToDb();
});
