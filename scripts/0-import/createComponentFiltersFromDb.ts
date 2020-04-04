#!/usr/bin/env ts-node

import * as Fs from 'fs';
import * as Path from 'path';
import db from '../../db';
import config from '../../config';
import IComponentFilters, { IComponentFilterItem } from '../../src/interfaces/IComponentFilters';

const buildType = process.argv[2];
if (!['static', 'dynamic'].includes(buildType)) {
  throw new Error('first arg must be either static or dynamic');
}

const componentFiltersPath = Path.join(config.filesImportedDir, `component-filters-${buildType}.json`);
const allInterfaces = db.prepare('SELECT * FROM interfaces WHERE hasDefinedIDL=1').all();
const allSelectionChoices = db.prepare('SELECT * FROM selection_choices WHERE buildType=?').all(buildType);
const choicesByName: { [name: string]: IComponentFilterItem } = {};
const componentFiltersMap: IComponentFilters = {};

allSelectionChoices.forEach((choice: any) => {
  if (choice.buildType !== buildType) return;
  choicesByName[choice.name] = {
    isEnabled: choice.isCore || choice.isEnabled ? true : false,
  };
  if (choice.isWritable) choicesByName[choice.name].isWritable = true;
});

allInterfaces.forEach(inter => {
  if (!choicesByName[inter.name]) return;

  const choice = choicesByName[inter.name];
  componentFiltersMap[inter.name] = Object.assign({}, choice, { propertiesByName: {}, methodsByName: {} });
  if (!choice.isEnabled) return;

  const properties = db.prepare(`SELECT * FROM properties WHERE interfaceName=?`).all([inter.name]);
  properties.forEach(p => {
    if (!choicesByName[p.name]) return;
    componentFiltersMap[inter.name].propertiesByName[p.localName] = choicesByName[p.name];
  });

  const methods = db.prepare(`SELECT * FROM methods WHERE interfaceName=?`).all([inter.name]);
  methods.forEach(m => {
    if (!choicesByName[m.name]) return;
    componentFiltersMap[inter.name].methodsByName[m.localName] = choicesByName[m.name];
  });
});

Fs.writeFileSync(componentFiltersPath, JSON.stringify(componentFiltersMap, null, 2));
