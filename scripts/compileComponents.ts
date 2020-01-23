/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 * This script creates compiled/components.json, which is the JSON output of all the WebIDLs and metaElements.json.
 */

import * as Fs from 'fs';
import * as Path from 'path';
import webIDLFilenames from '../inputs/webidls';
import Componentizer from '../src/Componentizer';

async function run() {
  const compiledDir = Path.join(__dirname, '../compiled');
  const inputsDir = Path.join(__dirname, '../inputs');

  // load componentizer
  const componentizer = new Componentizer();
  for (const filename of webIDLFilenames) {
    const filepath = Path.resolve(inputsDir, 'webidls', filename);
    const webidl = Fs.readFileSync(filepath, 'utf-8');
    componentizer.addWebIDL(webidl, filename);
  }

  // compile components
  const components = componentizer.run();

  // save components.json in case we want to investigate
  const componentsOutputPath = Path.join(compiledDir, 'components.json');
  Fs.writeFileSync(componentsOutputPath, JSON.stringify(components, null, 2));
}

run().catch(error => console.log(error));
