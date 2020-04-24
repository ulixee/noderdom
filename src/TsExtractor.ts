import TsTypesExtractor from './TsTypesExtractor';
import TsTagNameMapExtractor from './TsTagNameMapExtractor';
import Components from './Components';
import { compareName } from './utils';
import * as Types from './Types';
import TsMixinExtractor from './TsMixinExtractor';
import TsInterfaceExtractor from './TsInterfaceExtractor';
import TsClassExtractor from './TsClassExtractor';
import ICodeModule from './interfaces/ICodeModule';
import TsIsolateExtractor from './TsIsolateExtractor';
import IBuildType, { BuildType } from './interfaces/IBuildType';

interface IOptions {
  buildType: IBuildType;
}

export default class TsExtractor {
  private mixins: Types.Interface[];
  private interfaces: Types.Interface[];
  private klasses: Types.Interface[];
  private readonly buildType: IBuildType;

  constructor(private components: Components, options: IOptions) {
    const allInterfaces = this.components.allNonCallbackInterfaces;
    this.buildType = options.buildType;
    this.interfaces = allInterfaces.sort(compareName).filter(i => !i.legacyNamespace);
    this.klasses = allInterfaces.sort(compareName).filter(i => !i.legacyNamespace && !i.noInterfaceObject);
    this.mixins = allInterfaces.sort(compareName).filter(i => !i.legacyNamespace && i.noInterfaceObject);
  }

  public extractTypes() {
    return new TsTypesExtractor(this.components).run();
  }

  public extractTagNameMap() {
    return new TsTagNameMapExtractor(this.components).run();
  }

  public extractInterfaces() {
    const { buildType } = this;
    const options = { buildType };
    const codeModules = this.interfaces.map(i => new TsInterfaceExtractor(this.components, i, options).run());
    const defines = codeModules.map(x => x.definedObjects).reduce((a, b) => a.concat(b), []);
    const references = codeModules.map(x => x.referencedObjects).reduce((a, b) => a.concat(b), []);
    const referencedTypes = this.findExternalReferences(references, { ignore: defines });
    const importsCodeModule = this.extractImportCodeModule(referencedTypes, './types');
    if (importsCodeModule) codeModules.unshift(importsCodeModule);
    return codeModules;
  }

  public extractIsolateInterfaces(definedTypes: Set<string>, definedDom: Set<string>) {
    const { buildType } = this;
    const options = { buildType };
    const codeModules: ICodeModule[] = [];
    for (const i of Object.values(this.components.awaitedIsolates)) {
      codeModules.push(new TsIsolateExtractor(this.components, i, options).run());
    }

    const references = codeModules.map(x => x.referencedObjects).reduce((a, b) => a.concat(b), []);
    const referencedTypes = this.findExternalReferences(references, { use: Array.from(definedTypes) });
    const referencedDom = this.findExternalReferences(references, { use: Array.from(definedDom) });
    const importedTypes = this.extractImportCodeModule(referencedTypes, './types');
    const importedDom = this.extractImportCodeModule(referencedDom, './dom');

    if (importedTypes) codeModules.unshift(importedTypes);
    if (importedDom) codeModules.unshift(importedDom);
    return codeModules;
  }

  public extractSuperInterfaces(definedTypes: Set<string>, definedDom: Set<string>, definedIsolates: Set<string>) {
    const { buildType } = this;
    const options = { buildType };
    const codeModules = Object.values(this.components.awaitedSupers).map(i => {
      return new TsInterfaceExtractor(this.components, i, options).run();
    });
    const references = codeModules.map(x => x.referencedObjects).reduce((a, b) => a.concat(b), []);
    const referencedTypes = this.findExternalReferences(references, { use: Array.from(definedTypes) });
    const referencedDom = this.findExternalReferences(references, { use: Array.from(definedDom) });
    const referencedIsolates = this.findExternalReferences(references, { use: Array.from(definedIsolates) });
    const importTypes = this.extractImportCodeModule(referencedTypes, './types');
    const importDom = this.extractImportCodeModule(referencedDom, './dom');
    const importIsolates = this.extractImportCodeModule(referencedIsolates, './isolates');
    const imports: ICodeModule[] = [importTypes, importDom, importIsolates].filter(x => x) as ICodeModule[];
    codeModules.unshift(...imports);
    return codeModules;
  }

  public extractIsolateMixins(definedTypes: Set<string>, definedDom: Set<string>) {
    if (this.buildType !== BuildType.awaited) throw new Error('Isolates can only be created for AwaitedDOM');
    const { buildType } = this;
    const response = [];
    for (const i of Object.values(this.components.awaitedIsolates)) {
      const definedIsolates = new Set([i.name]);
      const baseDir = '..';
      const options = { baseDir, definedTypes, definedDom, definedIsolates, buildType };
      const tsMixinExtractor = new TsMixinExtractor(i, this.components, options);
      const code = tsMixinExtractor.run();
      response.push({ type: 'IsolateClass', name: i.name, code });
    }
    return response;
  }

  public extractSuperClasses(
    definedTypes: Set<string>,
    definedDom: Set<string>,
    definedSupers: Set<string>,
    definedIsolates: Set<string>,
  ) {
    if (this.buildType !== BuildType.awaited) throw new Error('Supers can only be created for AwaitedDOM');
    const baseDir = '..';
    const { buildType } = this;
    const options = { baseDir, definedTypes, definedDom, definedIsolates, definedSupers, buildType };
    return Object.values(this.components.awaitedSupers).map(i => {
      const tsClassExtractor = new TsClassExtractor(i, this.components, options);
      const code = tsClassExtractor.run();
      return { type: 'Super', name: i.name, code };
    });
  }

  public extractClasses(definedTypes: Set<string>, definedDom: Set<string>) {
    const { buildType } = this;
    return this.klasses.map(i => {
      const name = i.name;
      const baseDir = '..';
      const options = { baseDir, definedTypes, definedDom, buildType };
      const tsClassExtractor = new TsClassExtractor(i, this.components, options);
      const code = tsClassExtractor.run();
      return { type: 'Class', name, code };
    });
  }

  public extractMixins(definedTypes: Set<string>, definedDom: Set<string>) {
    const { buildType } = this;
    return this.mixins.map(i => {
      const baseDir = '..';
      const options = { baseDir, definedTypes, definedDom, buildType };
      const tsMixinExtractor = new TsMixinExtractor(i, this.components, options);
      const name = i.name;
      const code = tsMixinExtractor.run();
      return { type: 'Mixin', name, code };
    });
  }

  public findExternalReferences(references: string[], options: { use?: string[]; ignore?: string[] } = {}) {
    return TsExtractor.locateReferences(references, options);
  }

  public extractImportCodeModule(externalReferences: string[], path: string): ICodeModule | null {
    return TsExtractor.extractImportCodeModule(externalReferences, path);
  }

  public static locateReferences(references: string[], options: { use?: string[]; ignore?: string[] } = {}) {
    const { use, ignore } = options;
    const useSet = new Set(use || []);
    const ignoreSet = new Set(ignore || []);
    const referencesSet: Set<string> = new Set(references);
    if (use) {
      return [...referencesSet].filter(x => useSet.has(x));
    }
    return [...referencesSet].filter(x => !ignoreSet.has(x));
  }

  public static extractImportCodeModule(externalReferences: string[], path: string): ICodeModule | null {
    const namesToImport: string[] = [...new Set(externalReferences)];
    if (!namesToImport.length) return null;
    return {
      name: 'Import',
      definedObjects: [],
      referencedObjects: [],
      category: 'Import',
      code: `import { ${namesToImport.map(x => `I${x}`).join(', ')} } from '${path}';`,
    };
  }
}
