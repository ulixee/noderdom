import Path from 'path';
import TsImporter from './TsImporter';
import { BuildType } from './interfaces/IBuildType';
import { ObjectStruct } from './interfaces/IObjectStruct';
import { IObjectMetaByName } from './TsBuilder';
import { IPathsByBuildType, IPathType, PathType } from './interfaces/IPaths';

interface IOptions {
  objectMetaByName: IObjectMetaByName;
  pathsByBuildType: IPathsByBuildType;
}

export default class TsBuildCreateFunctions {
  private readonly objectMetaByName: IObjectMetaByName;
  private readonly pathsByBuildType: IPathsByBuildType;

  constructor(options: IOptions) {
    this.objectMetaByName = options.objectMetaByName;
    this.pathsByBuildType = options.pathsByBuildType;
  }

  public run() {
    const printable: string[] = [];
    const names: string[] = [];

    Object.keys(this.objectMetaByName).forEach(name => {
      const objectMeta = this.objectMetaByName[name];
      const pathType = objectMeta.pathTypeByObjectStruct.get(ObjectStruct.class) as IPathType;
      if (pathType !== PathType.officialKlasses && pathType !== PathType.superKlasses) return;
      names.push(name);
      printable.push(this.functionCode(name, pathType));
    });

    printable.unshift(this.imports(names));

    return printable.join('\n\n');
  }

  private functionCode(klassName: string, pathType: IPathType) {
    const printable: string[] = [];
    const paths = this.pathsByBuildType[BuildType.impl];
    const klassDir = Path.relative(paths.root, (paths as any)[pathType as string]);
    const klassPath = `./${klassDir}/${klassName}`;
    const args = 'awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions';
    printable.push(`export function create${klassName}<IAwaitedOptions = {}>(${args}): I${klassName} {`);
    printable.push(`  const ${klassName} = require('${klassPath}').default; // tslint:disable-line:variable-name`);
    printable.push(`  const instance = new ${klassName}();`);
    printable.push('  setState(instance, { awaitedPath, awaitedOptions });');
    printable.push('  return instance;');
    printable.push('}');
    return printable.join('\n');
  }

  private imports(names: string[]) {
    const { objectMetaByName, pathsByBuildType } = this;
    const currentDir = pathsByBuildType.impl.root;
    const baseDir = Path.relative(currentDir, pathsByBuildType.base.root);
    const tsImporterOptions = { currentDir, objectMetaByName, pathsByBuildType };
    const tsImporter = new TsImporter(tsImporterOptions);
    const printable: string[] = [];
    printable.push(`import AwaitedPath from '${baseDir}/AwaitedPath';`);
    printable.push(`import StateMachine from '${baseDir}/StateMachine';`);
    printable.push(tsImporter.extractAll(names, BuildType.base, ObjectStruct.interface));
    printable.push('');
    printable.push(`export const { setState } = StateMachine<any, any>();`);
    return printable.join('\n');
  }
}
