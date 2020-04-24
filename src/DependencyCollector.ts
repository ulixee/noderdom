import TsExtractor from '../src/TsExtractor';
import Components from '../src/Components';
import ICodeModule from '../src/interfaces/ICodeModule';
import IBuildType from './interfaces/IBuildType';

interface ICodeModulesByName {
  [name: string]: ICodeModule;
}

interface ICodeDependenciesByName {
  [name: string]: Set<string>;
}

export default class DependencyCollector {
  private readonly dependenciesByName: ICodeDependenciesByName = {};

  constructor(components: Components, buildType: IBuildType) {
    const typescriptExtractor = new TsExtractor(components, { buildType });
    const interfaceClasses: { [name: string]: ICodeModule } = {};
    typescriptExtractor.extractInterfaces().forEach(m => (interfaceClasses[m.name] = m));

    const codeModulesByName: ICodeModulesByName = interfaceClasses; // Object.assign({}, basicTypes, interfaceClasses);
    for (const codeModule of Object.values(codeModulesByName)) {
      for (const defined of codeModule.definedObjects) {
        codeModulesByName[defined] = codeModule;
      }
    }
    delete codeModulesByName.Import;

    for (const codeModule of Object.values(codeModulesByName)) {
      findDependencies(codeModule, components, this.dependenciesByName);
    }
  }

  public get(name: string) {
    return collectAllDependencies(this.dependenciesByName, name);
  }
}

function collectAllDependencies(dependenciesByName: ICodeDependenciesByName, name: string): string[] {
  const dependencies: string[] = [];
  if (!dependenciesByName[name]) return dependencies;
  for (const n of dependenciesByName[name]) {
    dependencies.push(n);
    dependencies.push(...collectAllDependencies(dependenciesByName, n));
  }
  return dependencies;
}

function findDependencies(
  codeModule: ICodeModule,
  components: Components,
  dependenciesByName: ICodeDependenciesByName,
) {
  const inter = components.allInterfacesMap[codeModule.name];
  if (inter.extends && inter.extends !== 'Object') {
    const name = inter.extends;
    getDependencies(dependenciesByName, name).add(codeModule.name);
  }
  if (inter.implements) {
    for (const name of inter.implements) {
      if (components.mixins[name]) continue;
      getDependencies(dependenciesByName, name).add(codeModule.name);
    }
  }
}

function getDependencies(dependenciesByName: ICodeDependenciesByName, name: string) {
  return (dependenciesByName[name] = dependenciesByName[name] || new Set());
}
