import TsBuilder from './TsBuilder';
import Components from '../src/Components';
import ICodeModule from '../src/interfaces/ICodeModule';
import IDomType from './interfaces/IDomType';
import { BuildType } from './interfaces/IBuildType';

interface ICodeModulesByName {
  [name: string]: ICodeModule;
}

interface ICodeDependenciesByName {
  [name: string]: Set<string>;
}

export default class DependencyCollector {
  private readonly isolateMixinsByName: ICodeDependenciesByName = {};
  private readonly officialMixinsByName: ICodeDependenciesByName = {};
  private readonly officialKlassesByName: ICodeDependenciesByName = {};

  constructor(components: Components, domType: IDomType) {
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
      findIsolateMixins(codeModule, components, this.isolateMixinsByName);
      findOfficialMixins(codeModule, components, this.officialMixinsByName);
      findOfficialKlasses(codeModule, components, this.officialKlassesByName);
    }
  }

  public get(name: string) {
    return {
      isolateMixins: this.collectAll(this.isolateMixinsByName, name),
      officialMixins: this.collectAll(this.officialMixinsByName, name),
      officialKlasses: this.collectAll(this.officialKlassesByName, name),
    };
  }

  private collectAll(byName: ICodeDependenciesByName, name: string): string[] {
    const names: string[] = [];
    if (!byName[name]) return names;
    for (const n of byName[name]) {
      names.push(n);
      names.push(...this.collectAll(byName, n));
    }
    return names;
  }
}

function findIsolateMixins(
  codeModule: ICodeModule,
  components: Components,
  isolateMixinsByName: ICodeDependenciesByName,
) {
  const inter = components.allInterfacesMap[codeModule.name];
  if (inter.extends && inter.extends !== 'Object') {
    const name = inter.extends;
    getByName(isolateMixinsByName, name).add(codeModule.name);
  }
  if (inter.implements) {
    for (const name of inter.implements) {
      if (components.mixins[name]) continue;
      getByName(isolateMixinsByName, name).add(codeModule.name);
    }
  }
}

function findOfficialMixins(
  codeModule: ICodeModule,
  components: Components,
  officialMixinsByName: ICodeDependenciesByName,
) {
  const inter = components.allInterfacesMap[codeModule.name];
  if (inter.implements) {
    for (const name of inter.implements) {
      if (!components.mixins[name]) continue;
      getByName(officialMixinsByName, codeModule.name).add(name);
    }
  }
}

function findOfficialKlasses(
  codeModule: ICodeModule,
  components: Components,
  officialKlassesByName: ICodeDependenciesByName,
) {
  const inter = components.allInterfacesMap[codeModule.name];
  if (inter.extends && inter.extends !== 'Object') {
    const name = inter.extends;
    getByName(officialKlassesByName, codeModule.name).add(name);
  }
  if (inter.implements) {
    for (const name of inter.implements) {
      if (components.mixins[name]) continue;
      getByName(officialKlassesByName, codeModule.name).add(name);
    }
  }
}

function getByName(mixinsByName: ICodeDependenciesByName, name: string) {
  return (mixinsByName[name] = mixinsByName[name] || new Set());
}
