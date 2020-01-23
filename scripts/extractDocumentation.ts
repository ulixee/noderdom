import * as Fs from 'fs';
import * as Path from 'path';
import Components from '../src/Components';
import Documenter from '../src/Documenter';

async function run() {
  // const outputsDir = Path.join(__dirname, '../outputs');
  const compiledDir = Path.join(__dirname, '../compiled');
  const componentsFilepath = Path.join(compiledDir, 'components.json');

  // load components
  const data = JSON.parse(Fs.readFileSync(componentsFilepath, 'utf8'));
  const components = new Components(data);
  components.cleanup();

  const documenter = new Documenter(components);
  await documenter.extractDocumentation(components.interfaces.Attr);

  // for (const document of documents) {
  //   console.log('----------------------------------------');
  //   console.log(JSON.stringify(document, null, 2));
  // }
  console.log('----------------------------------------');
}

run().catch(error => console.log(error));
