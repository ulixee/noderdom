#!/usr/bin/env ts-node

import * as Fs from 'fs';
import * as Path from 'path';
import config from '../../../config';
import ComponentFilters from '../../../src/ComponentFilters';
import { IComponentFilter } from '../../../src/interfaces/IComponentFilters';
import { DomType } from '../../../src/interfaces/IDomType';

[DomType.awaited, DomType.detached].forEach(domType => {
  const componentFiltersPath = Path.join(config.filesImportedDir, `component-filters-${domType}.json`);
  const rawComponentFilters = Fs.readFileSync(componentFiltersPath, 'utf-8');
  const componentFiltersMap: { [name: string]: IComponentFilter } = JSON.parse(rawComponentFilters);
  const componentFilters = ComponentFilters.fromMap(domType, componentFiltersMap);
  componentFilters.saveToDb();
});
