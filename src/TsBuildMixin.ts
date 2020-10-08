import * as Path from 'path';
import * as Types from './Types';
import Printer from './Printer';
import Components from './Components';
import TsStateMachinePrinter from './TsStateMachinePrinter';
import TsBodyPrinter from './TsBodyPrinter';
import { IObjectMetaByName } from './TsBuilder';
import { IPathsByBuildType } from './interfaces/IPaths';
import IDomType, { DomType } from './interfaces/IDomType';
import IBuildType, { BuildType } from './interfaces/IBuildType';
import { ObjectStruct } from './interfaces/IObjectStruct';
import TsImporter from './TsImporter';

interface IOptions {
  pathsByBuildType: IPathsByBuildType;
  currentDir: string;
  domType: IDomType;
  buildType: IBuildType;
  objectMetaByName: IObjectMetaByName;
}

export default class TsBuildMixin {
  private readonly i: Types.Interface;
  private readonly printer = new Printer();
  private readonly components: Components;
  private readonly bodyPrinter: TsBodyPrinter;
  private readonly pathsByBuildType: IPathsByBuildType;
  private readonly currentDir: string;
  private readonly domType: IDomType;
  private readonly buildType: IBuildType;
  private readonly objectMetaByName: IObjectMetaByName;

  constructor(i: Types.Interface, components: Components, options: IOptions) {
    this.i = i;
    this.components = components;
    this.pathsByBuildType = options.pathsByBuildType;
    this.currentDir = options.currentDir;
    this.domType = options.domType;
    this.buildType = options.buildType;
    this.objectMetaByName = options.objectMetaByName;

    const bodyPrinterOptions = { domType: this.domType, buildType: this.buildType, skipConstructor: true };
    this.bodyPrinter = new TsBodyPrinter(i, this.printer, components, bodyPrinterOptions);
  }

  public run() {
    this.printClassDeclaration();
    this.printer.increaseIndent();

    this.bodyPrinter.printAll();
    if (!this.bodyPrinter.didPrint) this.printer.deleteNewLine();

    this.printer.decreaseIndent();
    this.printer.print('}');

    if (this.buildType === BuildType.base) {
      this.printStateMachineInterfaces();
    }
    this.prependInitializerCode();

    return this.printer.getResult().trim();
  }

  public imports() {
    const isBaseBuild = this.buildType === BuildType.base;
    return isBaseBuild ? this.importsForBase() : this.importsForImpl();
  }

  private printClassDeclaration() {
    const i: Types.Interface = this.i;
    const isBaseBuild = this.buildType === BuildType.base;
    const extendsStr = isBaseBuild ? '' : `extends ${i.name}Base `;
    this.printer.printLine(`export default class ${i.name} ${extendsStr}implements I${i.name} {`);
  }

  private printStateMachineInterfaces() {
    const stateOptions = { domType: this.domType, buildType: BuildType.base };
    const stateMachinePrinter = new TsStateMachinePrinter(
      this.i,
      this.printer,
      this.components,
      stateOptions,
      this.bodyPrinter.iteratorExtractor,
    );
    stateMachinePrinter.printInterfaces([], this.bodyPrinter.constants, this.bodyPrinter.properties);
  }

  private prependInitializerCode() {
    const i: Types.Interface = this.i;
    const name = i.name;
    const printable: string[] = ['// tslint:disable:variable-name'];
    const isAwaited = this.domType === DomType.awaited;
    const handlerClassName = `${isAwaited ? 'Awaited' : 'Detached'}Handler`;
    const printer = new Printer();
    const stateOptions = { domType: this.domType, buildType: BuildType.base };
    new TsStateMachinePrinter(
      this.i,
      printer,
      this.components,
      stateOptions,
      this.bodyPrinter.iteratorExtractor,
    ).printInitializer();

    printable.push(printer.getResult());

    if (this.buildType === BuildType.base) {
      const handlerName = `${this.domType}Handler`;
      printable.push(`export const ${handlerName} = new ${handlerClassName}<I${name}>('${name}', getState, setState);`);
      if (this.bodyPrinter.iteratorExtractor.hasIterable()) {
        printable.push(this.bodyPrinter.iteratorExtractor.getIteratorInitializer(handlerName));
      }
    }

    printable.push('');

    this.printer.prependLine(printable.join('\n'));
  }

  private importsForBase() {
    const i: Types.Interface = this.i;
    const baseDir = Path.relative(this.currentDir, this.pathsByBuildType.base.root) || '.';
    const printable: string[] = [];

    const isAwaited = this.domType === DomType.awaited;
    const handlerClassName = `${isAwaited ? 'Awaited' : 'Detached'}Handler`;
    printable.push(`import ${handlerClassName} from '${baseDir}/${handlerClassName}';`);
    printable.push(`import StateMachine from '${baseDir}/StateMachine';`);
    printable.push(`import AwaitedPath from '${baseDir}/AwaitedPath';`);

    if (this.bodyPrinter.iteratorExtractor.hasIterable()) {
      printable.push(`import AwaitedIterator from '${baseDir}/AwaitedIterator';`);
    }

    const { currentDir, objectMetaByName, pathsByBuildType } = this;
    const tsImporterOptions = { currentDir, objectMetaByName, pathsByBuildType };
    const tsImporter = new TsImporter(tsImporterOptions);

    const references: string[] = [i.name, ...this.bodyPrinter.referencedObjects];
    printable.push(tsImporter.extractAll(references, BuildType.base, ObjectStruct.interface));
    printable.push('');

    return printable.join('\n');
  }

  private importsForImpl() {
    const i: Types.Interface = this.i;
    const baseDir = Path.relative(this.currentDir, this.pathsByBuildType.base.root) || '.';
    const implDir = Path.relative(this.currentDir, this.pathsByBuildType.impl.root) || '.';
    const printable: string[] = [];

    printable.push(`import StateMachine from '${baseDir}/StateMachine';`);

    const { currentDir, objectMetaByName, pathsByBuildType } = this;
    const tsImporterOptions = { currentDir, objectMetaByName, pathsByBuildType };
    const tsImporter = new TsImporter(tsImporterOptions);

    const references: string[] = [i.name, ...this.bodyPrinter.referencedObjects];
    const referencedImports = tsImporter.extractAll(references, BuildType.base, ObjectStruct.interface);
    if (referencedImports) printable.push(referencedImports);

    const baseName = `${i.name}Base`;
    const baseProps = [`I${i.name}Properties`];
    printable.push(tsImporter.extractSingle(i.name, baseName, baseProps, BuildType.base, ObjectStruct.class));

    if (this.bodyPrinter.referencedCreateMethods.size) {
      const names = Array.from(this.bodyPrinter.referencedCreateMethods);
      printable.push(`import { ${names.map(n => `create${n}`).join(', ')} } from '${implDir}/create';`);
    }

    printable.push('');
    return printable.join('\n');
  }
}
