import * as Fs from 'fs';
import * as Path from 'path';
import config from '../../config';
import ComponentFilters from '../../src/ComponentFilters';
import { IBuildType, BuildType } from '../../src/interfaces/IBuildType';

const shouldForce = process.argv[2] === '-f';

if (!shouldForce) {
  Object.keys(BuildType).forEach(buildType => {
    const componentFilters = new ComponentFilters(buildType as IBuildType);
    if (!componentFilters.records.length) return;

    const componentFiltersFilename = `component-filters-${buildType}.json`;
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
