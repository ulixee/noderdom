import { getNameWithTypeParameter, toIType } from './utils';
import * as Path from 'path';
import * as Types from './Types';
import Printer from './Printer';
import Components from './Components';
import TsBodyPrinter from './TsBodyPrinter';
import TsStateMachinePrinter from './TsStateMachinePrinter';
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

export default class TsBuildKlass {
  private readonly i: Types.Interface;
  private readonly printer = new Printer();
  private readonly components: Components;
  private readonly inheritsFrom: string[];
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

    const inheritsFrom = [i.extends || 'Object'].concat((i.implements || []).sort()).filter(e => e !== 'Object');
    this.inheritsFrom = [...new Set(inheritsFrom)];

    const bodyOptions = { domType: this.domType, buildType: this.buildType };
    this.bodyPrinter = new TsBodyPrinter(i, this.printer, components, bodyOptions);

    if (this.bodyPrinter.iteratorExtractor.hasIterable()) this.i.isNodeAttached = true;
  }

  public run() {
    if (this.buildType === BuildType.base) {
      this.printClassGeneratorFunction();
      this.printBaseClassDeclaration();
    } else {
      this.printImplClassDeclaration();
    }

    this.printer.increaseIndent();
    this.bodyPrinter.printAll();
    this.printer.decreaseIndent();

    if (!this.bodyPrinter.didPrint) {
      this.printer.deleteNewLine();
    }
    this.printer.print('}');

    if (this.buildType === BuildType.base) {
      this.printer.printLine(';');
      this.printer.decreaseIndent();
      this.printer.print(`}`);

      this.printStateMachineInterfaces();
    }

    this.prependInitializerCode();

    return this.printer.getResult().trim();
  }

  public extractImports() {
    const isBaseBuild = this.buildType === BuildType.base;
    return isBaseBuild ? this.importsForBase() : this.importsForImpl();
  }

  private printClassGeneratorFunction() {
    const i: Types.Interface = this.i;
    const args: string[] = this.inheritsFrom.map(extension => {
      return `${extension}: Constructable<I${extension}>`;
    });
    this.printer.printLine(`export function ${i.name}Generator(${args.join(', ')}) {`);
    this.printer.increaseIndent();
  }

  private printBaseClassDeclaration() {
    const i: Types.Interface = this.i;
    const inheritsFrom = this.inheritsFrom;

    let extendsStr = '';
    if (inheritsFrom.length > 1) {
      const klass = inheritsFrom[0];
      const mixins = inheritsFrom.slice(1);
      const mixedClass = `ClassMixer(${klass}, [${mixins.join(', ')}])`;
      const interfacesStr = inheritsFrom.map(e => `I${e}`).join(' & ');
      const parent = `(${mixedClass} as unknown) as Constructable<${interfacesStr}>`;
      this.printer.printLine(`const Parent = ${parent};`);
      this.printer.printSeparatorLine();
      extendsStr = `extends Parent `;
    } else if (i.extends && i.extends !== 'Object') {
      extendsStr = `extends ${i.extends} `;
    } else if (inheritsFrom.length === 1) {
      extendsStr = `extends ${inheritsFrom[0]} `;
    }

    const className = getNameWithTypeParameter(i.typeParameters, i.name, false);
    const typeParameterName = i.typeParameters && i.typeParameters[0] && i.typeParameters[0].name;
    const iClassName = typeParameterName ? `${toIType(i.name)}<${typeParameterName}>` : toIType(i.name);
    const implementsList = [iClassName];
    if (this.i.isNodeAttached) {
      implementsList.push(`PromiseLike<${iClassName}>`);
    }
    this.printer.printLine(`return class ${className} ${extendsStr}implements ${implementsList.join(', ')} {`);
  }

  private printImplClassDeclaration() {
    const i: Types.Interface = this.i;
    const className = getNameWithTypeParameter(i.typeParameters, i.name, false);
    const typeParameterName = i.typeParameters && i.typeParameters[0] && i.typeParameters[0].name;
    const iClassName = typeParameterName ? `${toIType(i.name)}<${typeParameterName}>` : toIType(i.name);
    this.printer.printLine(`export default class ${className} extends ${i.name}BaseClass implements ${iClassName} {`);
  }

  private printStateMachineInterfaces() {
    const stateOptions = { domType: this.domType, buildType: BuildType.base };
    const stateMachinePrinter = new TsStateMachinePrinter(this.i, this.printer, this.components, stateOptions);
    stateMachinePrinter.printInterfaces(this.inheritsFrom, this.bodyPrinter.constants, this.bodyPrinter.properties);
  }

  private prependInitializerCode() {
    const i: Types.Interface = this.i;
    const name = i.name;
    const printable: string[] = ['// tslint:disable:variable-name'];
    const isAwaited = this.domType === DomType.awaited;
    const handlerClassName = `${isAwaited ? 'Awaited' : 'Detached'}Handler`;
    const printer = new Printer();
    const stateOptions = { domType: this.domType, buildType: BuildType.base };
    new TsStateMachinePrinter(this.i, printer, this.components, stateOptions).printInitializer();

    printable.push(printer.getResult());

    if (this.buildType === BuildType.base) {
      const handlerName = `${this.domType}Handler`;
      printable.push(`export const ${handlerName} = new ${handlerClassName}<I${name}>('${name}', getState, setState);`);

      if (this.bodyPrinter.iteratorExtractor.hasIterable()) {
        printable.push(this.bodyPrinter.iteratorExtractor.getIteratorInitializer(handlerName));
      }

      if (this.i.isNodeAttached) {
        printable.push(`export const nodeAttacher = new NodeAttacher<I${name}>(getState, ${handlerName});`);
      }
    } else {
      printable.push(`const ${i.name}BaseClass = ${i.name}Generator(${this.inheritsFrom.join(', ')});`);
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
    printable.push(`import initializeConstantsAndProperties from '${baseDir}/initializeConstantsAndProperties';`);
    printable.push(`import StateMachine from '${baseDir}/StateMachine';`);
    printable.push(`import AwaitedPath from '${baseDir}/AwaitedPath';`);
    if (this.inheritsFrom.length > 1) {
      printable.push(`import ClassMixer from '${baseDir}/ClassMixer';`);
    }
    printable.push(`import Constructable from '${baseDir}/Constructable';`);
    if (this.bodyPrinter.iteratorExtractor.hasIterable()) {
      printable.push(`import AwaitedIterator from '${baseDir}/AwaitedIterator';`);
    }
    if (this.i.isNodeAttached) {
      printable.push(`import NodeAttacher from '${baseDir}/NodeAttacher';`);
    }

    const { currentDir, objectMetaByName, pathsByBuildType } = this;
    const tsImporterOptions = { currentDir, objectMetaByName, pathsByBuildType };
    const tsImporter = new TsImporter(tsImporterOptions);

    const references: string[] = [i.name, ...this.inheritsFrom, ...this.bodyPrinter.referencedObjects];
    printable.push(tsImporter.extractAll(references, BuildType.base, ObjectStruct.interface));

    this.inheritsFrom.forEach(name => {
      const objectsToImport = [`I${name}Properties`, `${name}PropertyKeys`, `${name}ConstantKeys`];
      const importCode = tsImporter.extractSingle(name, null, objectsToImport, BuildType.base, ObjectStruct.class);
      if (importCode) printable.push(importCode);
    });

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

    const baseProps = [`${i.name}Generator`, `I${i.name}Properties`];
    printable.push(tsImporter.extractSingle(i.name, null, baseProps, BuildType.base, ObjectStruct.class));

    if (this.bodyPrinter.referencedCreateMethods.size) {
      const names = Array.from(this.bodyPrinter.referencedCreateMethods);
      printable.push(`import { ${names.map(n => `create${n}`).join(', ')} } from '${implDir}/create';`);
    }

    this.inheritsFrom.forEach(name => {
      const importCode = tsImporter.extractSingle(name, name, [], BuildType.impl, ObjectStruct.class);
      if (importCode) printable.push(importCode);
    });

    printable.push('');

    return printable.join('\n');
  }
}
