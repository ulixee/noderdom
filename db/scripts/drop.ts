import * as Fs from 'fs';
import * as Path from 'path';
import config from '../../config';
import ComponentFilters from '../../src/ComponentFilters';
import { IDomType, DomType } from '../../src/interfaces/IDomType';

const shouldForce = process.argv[2] === '-f';

if (!shouldForce) {
  Object.keys(DomType).forEach(domType => {
    const componentFilters = new ComponentFilters(domType as IDomType);
    if (!componentFilters.records.length) return;

    const componentFiltersFilename = `component-filters-${domType}.json`;
    const componentFiltersPath = Path.join(config.filesImportedDir, componentFiltersFilename);
    const componentFiltersSaved = Fs.readFileSync(componentFiltersPath, 'utf-8');
    const componentFiltersMap = componentFilters.toMap();
    const componentFiltersDb = JSON.stringify(componentFiltersMap, null, 2);
    if (componentFiltersSaved !== componentFiltersDb) {
      console.log('\n');
      console.log(`${componentFiltersFilename} does not contain latest from DB.`);
      console.log(`If you want to force-drop the DB, use the force flag (-f)`);
      console.log('\n');
      process.exit(1);
    }
  });
}

try {
  Fs.unlinkSync(config.dbPath);
} catch (err) {} // tslint:disable-line
