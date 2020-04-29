import TsBuildInterfacesBasic from './TsBuildInterfacesBasic';
import TsElementExtractor from './TsElementExtractor';
import Components from './Components';
import { compareName } from './utils';
import * as Path from 'path';
import * as Types from './Types';
import TsBuildMixin from './TsBuildMixin';
import TsInterfaceExtractor from './TsInterfaceExtractor';
import TsBuildKlass from './TsBuildKlass';
import ICodeModule from './interfaces/ICodeModule';
import TsBuildInterfaceIsolate from './TsBuildInterfaceIsolate';
import IDomType, { DomType } from './interfaces/IDomType';
import IBuildType, { BuildType } from './interfaces/IBuildType';
import IObjectType, { ObjectType } from './interfaces/IObjectType';
import IObjectStruct, { ObjectStruct } from './interfaces/IObjectStruct';
import { IPathsByBuildType, IPathType, PathType } from './interfaces/IPaths';
import TsImporter from './TsImporter';

interface IOptions {
  domType: IDomType;
  buildType: IBuildType;
  pathsByBuildType?: IPathsByBuildType;
  objectMetaByName?: IObjectMetaByName;
}

interface IImportCodeModuleOptions {
  currentDir: string;
  references: string[];
  localReferences?: string[];
}

export interface IObjectMeta {
  objectType: IObjectType;
  pathTypeByObjectStruct: Map<IObjectStruct, string>;
}

export interface IObjectMetaByName {
  [key: string]: IObjectMeta;
}

export default class TsBuilder {
  public readonly objectMetaByName: IObjectMetaByName;
  private mixins: Types.Interface[];
  private interfaces: Types.Interface[];
  private klasses: Types.Interface[];
  private readonly domType: IDomType;
  private readonly buildType: IBuildType;
  private readonly pathsByBuildType: IPathsByBuildType;

  constructor(private components: Components, options: IOptions) {
    const allInterfaces = this.components.allNonCallbackInterfaces;
    this.domType = options.domType;
    this.buildType = options.buildType;
    this.pathsByBuildType = options.pathsByBuildType || {
      base: {
        root: `/tmp/base`,
        interfaces: `/tmp/base/interfaces`,
        officialKlasses: `/tmp/base/official-klasses`,
        officialMixins: `/tmp/base/official-mixins`,
        superKlasses: `/tmp/base/super-klasses`,
        isolateMixins: `/tmp/base/isolate-mixins`,
      },
      impl: {
        root: `/tmp/impl`,
        officialKlasses: `/tmp/impl/official-klasses`,
        officialMixins: `/tmp/impl/official-mixins`,
        superKlasses: `/tmp/impl/super-klasses`,
        isolateMixins: `/tmp/impl/isolate-mixins`,
      },
    };
    this.objectMetaByName = options.objectMetaByName || {};
    this.interfaces = allInterfaces.sort(compareName).filter(i => !i.legacyNamespace);
    this.klasses = allInterfaces.sort(compareName).filter(i => !i.legacyNamespace && !i.noInterfaceObject);
    this.mixins = allInterfaces.sort(compareName).filter(i => !i.legacyNamespace && i.noInterfaceObject);
  }

  public extractElementInterfaces() {
    return new TsElementExtractor(this.components).run();
  }

  public extractBasicInterfaces() {
    const codeModules = new TsBuildInterfacesBasic(this.components).run();

    const importsCodeModule = this.extractImportCodeModule(BuildType.base, ObjectStruct.interface, {
      currentDir: this.pathsByBuildType.base.interfaces,
      references: codeModules.map(x => x.referencedObjects).reduce((a, b) => a.concat(b), []),
      localReferences: codeModules.map(x => x.definedObjects).reduce((a, b) => a.concat(b), []),
    });
    if (importsCodeModule) codeModules.unshift(importsCodeModule);

    this.addToObjectDefinitions(
      ObjectType.basic,
      ObjectStruct.interface,
      PathType.interfaces,
      ([] as string[]).concat(...codeModules.map(x => x.definedObjects)),
    );
    return codeModules;
  }

  public extractOfficialInterfaces() {
    const { domType } = this;
    const options = { domType };
    const codeModules = this.interfaces.map(i => new TsInterfaceExtractor(this.components, i, options).run());

    const importsCodeModule = this.extractImportCodeModule(BuildType.base, ObjectStruct.interface, {
      currentDir: this.pathsByBuildType.base.interfaces,
      references: codeModules.map(x => x.referencedObjects).reduce((a, b) => a.concat(b), []),
      localReferences: codeModules.map(x => x.definedObjects).reduce((a, b) => a.concat(b), []),
    });
    if (importsCodeModule) codeModules.unshift(importsCodeModule);

    this.addToObjectDefinitions(
      ObjectType.official,
      ObjectStruct.interface,
      PathType.interfaces,
      ([] as string[]).concat(...codeModules.map(x => x.definedObjects)),
    );

    return codeModules;
  }

  public extractIsolateInterfaces() {
    const { domType } = this;
    const options = { domType };
    const codeModules: ICodeModule[] = [];
    for (const i of Object.values(this.components.awaitedIsolates)) {
      codeModules.push(new TsBuildInterfaceIsolate(this.components, i, options).run());
    }

    const importsCodeModule = this.extractImportCodeModule(BuildType.base, ObjectStruct.interface, {
      currentDir: this.pathsByBuildType.base.interfaces,
      references: codeModules.map(x => x.referencedObjects).reduce((a, b) => a.concat(b), []),
    });
    if (importsCodeModule) codeModules.unshift(importsCodeModule);

    this.addToObjectDefinitions(
      ObjectType.isolate,
      ObjectStruct.interface,
      PathType.interfaces,
      ([] as string[]).concat(...codeModules.map(x => x.definedObjects)),
    );

    return codeModules;
  }

  public extractSuperInterfaces() {
    const { domType } = this;
    const codeModules = Object.values(this.components.awaitedSupers).map(i => {
      return new TsInterfaceExtractor(this.components, i, { domType }).run();
    });

    const importsCodeModule = this.extractImportCodeModule(BuildType.base, ObjectStruct.interface, {
      currentDir: this.pathsByBuildType.base.interfaces,
      references: codeModules.map(x => x.referencedObjects).reduce((a, b) => a.concat(b), []),
    });
    if (importsCodeModule) codeModules.unshift(importsCodeModule);

    this.addToObjectDefinitions(
      ObjectType.super,
      ObjectStruct.interface,
      PathType.interfaces,
      codeModules.map(x => x.name),
    );

    return codeModules;
  }

  public extractOfficialKlasses() {
    const { domType, buildType, pathsByBuildType, objectMetaByName } = this;
    const isBaseBuild = buildType === BuildType.base;
    const currentDir = isBaseBuild ? pathsByBuildType.base.officialKlasses : pathsByBuildType.impl.officialKlasses;
    const codeModules = this.klasses.map(i => {
      const name = i.name;
      const tsBuildOptions = { pathsByBuildType, currentDir, objectMetaByName, domType, buildType };
      const tsBuildKlass = new TsBuildKlass(i, this.components, tsBuildOptions);
      const code = tsBuildKlass.run();
      return { type: 'Class', name, code, tsBuildKlass };
    });

    this.addToObjectDefinitions(
      ObjectType.official,
      ObjectStruct.class,
      PathType.officialKlasses,
      codeModules.map(x => x.name),
    );

    return codeModules.map(codeModule => {
      const imports = codeModule.tsBuildKlass.imports();
      codeModule.code = `${imports}\n${codeModule.code}`;
      delete codeModule.tsBuildKlass;
      return codeModule;
    });
  }

  public extractOfficialMixins() {
    const { domType, buildType, objectMetaByName, pathsByBuildType } = this;
    const isBaseBuild = buildType === BuildType.base;
    const currentDir = isBaseBuild ? pathsByBuildType.base.officialMixins : pathsByBuildType.impl.officialMixins;
    const codeModules = this.mixins.map(i => {
      const tsBuildOptions = { pathsByBuildType, currentDir, objectMetaByName, domType, buildType };
      const tsBuildMixin = new TsBuildMixin(i, this.components, tsBuildOptions);
      const name = i.name;
      const code = tsBuildMixin.run();
      return { type: 'Mixin', name, code, tsBuildMixin };
    });

    this.addToObjectDefinitions(
      ObjectType.official,
      ObjectStruct.class,
      PathType.officialMixins,
      codeModules.map(x => x.name),
    );

    return codeModules.map(codeModule => {
      const imports = codeModule.tsBuildMixin.imports();
      codeModule.code = `${imports}\n${codeModule.code}`;
      delete codeModule.tsBuildMixin;
      return codeModule;
    });
  }

  public extractSuperKlasses() {
    if (this.domType !== DomType.awaited) throw new Error('Supers can only be created for AwaitedDOM');
    const { domType, buildType, pathsByBuildType, objectMetaByName } = this;
    const isBaseBuild = buildType === BuildType.base;
    const currentDir = isBaseBuild ? pathsByBuildType.base.superKlasses : pathsByBuildType.impl.superKlasses;
    const options = { pathsByBuildType, currentDir, objectMetaByName, domType, buildType };
    const codeModules = Object.values(this.components.awaitedSupers).map(i => {
      const tsBuildKlass = new TsBuildKlass(i, this.components, options);
      const code = tsBuildKlass.run();
      return { type: 'Super', name: i.name, code, tsBuildKlass };
    });

    this.addToObjectDefinitions(
      ObjectType.super,
      ObjectStruct.class,
      PathType.superKlasses,
      codeModules.map(x => x.name),
    );

    return codeModules.map(codeModule => {
      const imports = codeModule.tsBuildKlass.imports();
      codeModule.code = `${imports}\n${codeModule.code}`;
      delete codeModule.tsBuildKlass;
      return codeModule;
    });
  }

  public extractIsolateMixins() {
    if (this.domType !== DomType.awaited) throw new Error('Isolates can only be created for AwaitedDOM');
    const { domType, buildType, pathsByBuildType, objectMetaByName } = this;
    const isBaseBuild = buildType === BuildType.base;
    const currentDir = isBaseBuild ? pathsByBuildType.base.isolateMixins : pathsByBuildType.impl.isolateMixins;
    const codeModules = [];
    for (const i of Object.values(this.components.awaitedIsolates)) {
      // const definedIsolates = new Set([i.name]);
      const tsBuildOptions = { pathsByBuildType, currentDir, objectMetaByName, domType, buildType };
      const tsBuildMixin = new TsBuildMixin(i, this.components, tsBuildOptions);
      const code = tsBuildMixin.run();
      codeModules.push({ type: 'IsolateClass', name: i.name, code, tsBuildMixin });
    }

    this.addToObjectDefinitions(
      ObjectType.isolate,
      ObjectStruct.class,
      PathType.isolateMixins,
      codeModules.map(x => x.name),
    );

    return codeModules.map(codeModule => {
      const imports = codeModule.tsBuildMixin.imports();
      codeModule.code = `${imports}\n${codeModule.code}`;
      delete codeModule.tsBuildMixin;
      return codeModule;
    });
  }

  public extractCreateDocumentForNode() {
    const { objectMetaByName, pathsByBuildType } = this;
    const printable: string[] = [];
    const currentDir = pathsByBuildType.impl.root;
    const baseDir = Path.relative(currentDir, pathsByBuildType.base.root);
    const tsImporterOptions = { currentDir, objectMetaByName, pathsByBuildType };
    const tsImporter = new TsImporter(tsImporterOptions);

    printable.push(`import AwaitedPath from '${baseDir}/AwaitedPath';`);
    printable.push(tsImporter.extractAll(['Document'], BuildType.base, ObjectStruct.interface));
    printable.push(tsImporter.extractSingle('Document', null, ['setState'], BuildType.base, ObjectStruct.class));
    printable.push('');
    printable.push('// tslint:disable-next-line:variable-name');
    printable.push('let Document: any;');
    printable.push('');
    printable.push(
      'export default function createDocument<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDocument {',
    );
    printable.push("  const instance = new (Document = Document || require('./Document'))();");
    printable.push('  setState(instance, { awaitedPath, awaitedOptions });');
    printable.push('  return instance;');
    printable.push('}');

    return printable.join('\n');
  }

  private extractImportCodeModule(
    importFromBuildType: IBuildType,
    importFromObjectStruct: IObjectStruct,
    options: IImportCodeModuleOptions,
  ): ICodeModule | null {
    const { objectMetaByName, pathsByBuildType } = this;
    const { references, localReferences, currentDir } = options;
    const tsImporterOptions = { localReferences, currentDir, objectMetaByName, pathsByBuildType };
    const tsImporter = new TsImporter(tsImporterOptions);
    const importCode = tsImporter.extractAll(references, importFromBuildType, importFromObjectStruct);
    return {
      name: 'Import',
      definedObjects: [],
      referencedObjects: [],
      category: 'Import',
      code: importCode,
    } as ICodeModule;
  }

  private addToObjectDefinitions(
    objectType: IObjectType,
    objectStruct: IObjectStruct,
    pathType: IPathType,
    names: string[],
  ) {
    names.forEach(name => {
      const objectMeta = this.objectMetaByName[name] || { objectType, pathTypeByObjectStruct: new Map() };
      if (this.objectMetaByName[name] && objectMeta.objectType !== objectType) {
        throw new Error(`${name} has mismatched ObjectType: ${objectMeta.objectType} != ${objectType}`);
      }
      objectMeta.pathTypeByObjectStruct.set(objectStruct, pathType);
      this.objectMetaByName[name] = objectMeta;
    });
  }
}