import * as Path from 'path';
import IBuildType, { BuildType } from './interfaces/IBuildType';
import IObjectStruct, { ObjectStruct } from './interfaces/IObjectStruct';
import { IObjectMeta, IObjectMetaByName } from './TsBuilder';
import { IPathsByBuildType, IPathType, PathType } from './interfaces/IPaths';

export interface IImporterOptions {
  currentDir: string;
  objectMetaByName: IObjectMetaByName;
  pathsByBuildType: IPathsByBuildType;
  localReferences?: string[];
}

interface IImportsByPath {
  [path: string]: {
    filename: string;
    defaultImportName: string | null;
    importNames: Set<string>;
  };
}

export default class TsImporter {
  private readonly currentDir: string;
  private readonly localReferences: Set<string>;
  private readonly objectMetaByName: IObjectMetaByName;
  private readonly pathsByBuildType: IPathsByBuildType;

  constructor(options: IImporterOptions) {
    this.currentDir = options.currentDir;
    this.localReferences = new Set(options.localReferences || []);
    this.objectMetaByName = options.objectMetaByName;
    this.pathsByBuildType = options.pathsByBuildType;
  }

  public extractSingle(
    filename: string,
    defaultImportName: string | null,
    importNames: string[],
    buildType: IBuildType,
    objectStruct: IObjectStruct,
  ) {
    const objectMeta = this.objectMetaByName[filename];

    if (!objectMeta) {
      throw new Error(`${filename} does not exist in objectMetaByName`);
    } else if (!objectMeta.pathTypeByObjectStruct.has(objectStruct)) {
      return '';
      // throw new Error(`${filename} does not have requested ObjectStruct: ${objectStruct}`);
    }

    const { path } = this.extractPathAndFilename(buildType, objectStruct, objectMeta, filename);
    const importsByPath: IImportsByPath = {
      [path]: { filename: filename, defaultImportName, importNames: new Set(importNames) },
    };

    return this.importsToString(importsByPath);
  }

  public extractAll(
    references: string[],
    buildType: IBuildType,
    objectStruct: IObjectStruct,
    entrypoint?: string,
  ): string {
    const importsByPath: IImportsByPath = {};

    references.forEach(name => {
      if (this.localReferences.has(name)) return;
      const objectMeta = this.objectMetaByName[name];
      if (!objectMeta) {
        return;
        // throw new Error(`${name} does not exist in objectMetaByName`);
      }
      if (!objectMeta.pathTypeByObjectStruct.has(objectStruct)) {
        throw new Error(`${name} does not have requested ObjectStruct: ${objectStruct}`);
      }

      const { path, filename } = this.extractPathAndFilename(buildType, objectStruct, objectMeta, name);
      if (entrypoint && Path.basename(entrypoint) === filename + '.ts') {
        return;
      }
      const objectName = objectStruct === ObjectStruct.interface ? `I${name}` : name;

      importsByPath[path] = importsByPath[path] || {
        filename: filename,
        importNames: new Set(),
        defaultImportName: undefined,
      };
      importsByPath[path].importNames.add(objectName);
      if (name === filename) {
        importsByPath[path].defaultImportName = name;
      }
    });

    return this.importsToString(importsByPath);
  }

  private importsToString(importsByPath: IImportsByPath) {
    const lines = Object.keys(importsByPath).map(path => {
      const { defaultImportName, importNames } = importsByPath[path];
      const imports = [];

      if (defaultImportName) {
        imports.push(defaultImportName);
      }

      if (importNames.size) {
        imports.push(`{ ${Array.from(importNames).join(', ')} }`);
      }

      return `import ${imports.join(', ')} from '${path}';`;
    });

    return lines.join('\n');
  }

  private extractPathAndFilename(
    buildType: IBuildType,
    objectStruct: IObjectStruct,
    objectMeta: IObjectMeta,
    name: string,
  ) {
    const objectType = objectMeta.objectType;
    const paths = this.pathsByBuildType[buildType];

    let path: string;
    let filename: string = name;
    if (buildType === BuildType.base && objectStruct === ObjectStruct.interface) {
      path = `${this.pathsByBuildType.base.interfaces}`;
      filename = objectMeta.objectType;
    } else if (objectStruct !== ObjectStruct.interface && objectMeta.pathTypeByObjectStruct.has(objectStruct)) {
      const pathType = objectMeta.pathTypeByObjectStruct.get(objectStruct) as Omit<IPathType, PathType.interfaces>;
      path = (paths as any)[pathType as string];
    } else {
      throw new Error(`Could not extract path for ${name}: ${JSON.stringify({ buildType, objectType, objectStruct })}`);
    }

    path = Path.relative(this.currentDir, path) || '.';
    return { path: `${path}/${filename}`, filename };
  }
}
