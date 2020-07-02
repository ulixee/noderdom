import TsBuilder from './TsBuilder';
import Components from '../src/Components';
import ICodeModule from '../src/interfaces/ICodeModule';
import IDomType from './interfaces/IDomType';
import { BuildType } from './interfaces/IBuildType';

interface ICodeModulesByName {
  [name: string]: ICodeModule;
}

type ICodeDependencies = Set<string>;

interface ICodeDependenciesByName {
  [name: string]: ICodeDependencies;
}

interface IClassCollection {
  mixinNames: Set<string>;
  klassNames: Set<string>;
}

interface IVisits {
  upstream: Set<string>;
  downstream: Set<string>;
}

export default class DependencyCollector {
  private readonly components: Components;
  private readonly upstreamByName: ICodeDependenciesByName = {};
  private readonly downstreamByName: ICodeDependenciesByName = {};

  constructor(components: Components, domType: IDomType) {
    this.components = components;
    const tsBuilder = new TsBuilder(components, { domType, buildType: BuildType.base });
    const codeModulesByName: ICodeModulesByName = {};
    tsBuilder.extractOfficialInterfaces().forEach(m => (codeModulesByName[m.name] = m));

    for (const codeModule of Object.values(codeModulesByName)) {
      for (const defined of codeModule.definedObjects) {
        codeModulesByName[defined] = codeModule;
      }
    }
    delete codeModulesByName.Import;

    for (const codeModule of Object.values(codeModulesByName)) {
      this.organizeDependencies(codeModule, components);
    }
  }

  public get(name: string, collectUpstream: boolean = true, collectDownstream: boolean = true) {
    const visits: IVisits = { upstream: new Set(), downstream: new Set() };
    const classCollection: IClassCollection = {
      klassNames: new Set(),
      mixinNames: new Set(),
    };

    if (collectUpstream) this.collectUpstreamClasses(name, classCollection, visits);
    if (collectDownstream) this.collectDownstreamClasses(name, classCollection, visits);

    return {
      klassNames: Array.from(classCollection.klassNames),
      mixinNames: Array.from(classCollection.mixinNames),
    };
  }

  private collectUpstreamClasses(name: string, classCollection: IClassCollection, visits: IVisits) {
    if (!this.upstreamByName[name] || visits.upstream.has(name)) return;
    visits.upstream.add(name);
    for (const n of this.upstreamByName[name]) {
      if (this.components.mixins[n]) {
        classCollection.mixinNames.add(n);
      } else {
        classCollection.klassNames.add(n);
      }
      this.collectUpstreamClasses(n, classCollection, visits);
    }
  }

  private collectDownstreamClasses(name: string, classCollection: IClassCollection, visits: IVisits) {
    if (!this.downstreamByName[name] || visits.downstream.has(name)) return;
    visits.downstream.add(name);
    for (const n of this.downstreamByName[name]) {
      if (this.components.mixins[n]) {
        classCollection.mixinNames.add(n);
      } else {
        classCollection.klassNames.add(n);
      }
      this.collectUpstreamClasses(n, classCollection, visits);
      this.collectDownstreamClasses(n, classCollection, visits);
    }
  }

  private organizeDependencies(codeModule: ICodeModule, components: Components) {
    const inter = components.allInterfacesMap[codeModule.name];
    const dependencies = inter.implements || [];
    if (inter.extends && inter.extends !== 'Object') dependencies.push(inter.extends);

    for (const name of dependencies) {
      getByName(this.downstreamByName, name).add(codeModule.name);
      getByName(this.upstreamByName, codeModule.name).add(name);
    }
  }
}

function getByName(mixinsByName: ICodeDependenciesByName, name: string) {
  return (mixinsByName[name] = mixinsByName[name] || new Set());
}
