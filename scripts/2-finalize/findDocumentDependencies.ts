import * as Fs from 'fs';
import * as Path from 'path';
import config from '../../config';
import TsBuilder from '../../src/TsBuilder';
import Components from '../../src/Components';
import ICodeModule from '../../src/interfaces/ICodeModule';

interface ICodeModulesByName {
  [name: string]: ICodeModule;
}

async function run() {
  const componentsPath = Path.join(config.filesProcessedDir, 'components-standard.json');
  const componentsData = JSON.parse(Fs.readFileSync(componentsPath, 'utf-8'));
  const components = new Components(componentsData);

  // cleanup components (i.e., remove unused types);
  components.cleanup();

  const typescriptExtractor = new TsBuilder(components);

  const basicTypes: { [name: string]: ICodeModule } = {};
  typescriptExtractor.extractBasicInterfaces().forEach(m => (basicTypes[m.name] = m));

  const interfaceClasses: { [name: string]: ICodeModule } = {};
  typescriptExtractor.extractOfficialInterfaces().forEach(m => (interfaceClasses[m.name] = m));

  const visited: ICodeModulesByName = {};
  const unvisited: ICodeModulesByName = Object.assign({}, basicTypes, interfaceClasses);
  for (const codeModule of Object.values(unvisited)) {
    for (const defined of codeModule.definedObjects) {
      unvisited[defined] = codeModule;
    }
  }
  delete unvisited.Import;
  const codeModulesToVisit: ICodeModule[] = [
    interfaceClasses.Document,
    interfaceClasses.XMLSerializer,
    interfaceClasses.DOMParser,
    interfaceClasses.HTMLDocument,
    interfaceClasses.DOMException,
    ...Object.values(interfaceClasses).filter(m => m.elementNamespace),
  ];

  for (const codeModule of codeModulesToVisit) {
    visit(codeModule, visited, unvisited);
  }

  console.log('UNVISITED: ');
  for (const name of Object.keys(unvisited)) {
    console.log(`- ${name}`);
  }
}

function visit(codeModule: ICodeModule, visited: ICodeModulesByName, unvisited: ICodeModulesByName) {
  for (const defined of codeModule.definedObjects) {
    visited[defined] = codeModule;
    delete unvisited[defined];
  }
  for (const reference of codeModule.referencedObjects) {
    if (unvisited[reference]) {
      visit(unvisited[reference], visited, unvisited);
    } else if (!visited[reference]) {
      console.log(`MISSING ${reference}`);
    }
  }
}

run().catch(error => console.log(error));
