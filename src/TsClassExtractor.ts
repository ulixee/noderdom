import { getNameWithTypeParameter, toIType } from './utils';
import * as Types from './Types';
import Printer from './Printer';
import Components from './Components';
import TsBodyPrinter from './TsBodyPrinter';
import TsStateMachinePrinter from './TsStateMachinePrinter';
import TsExtractor from './TsExtractor';
import IBuildType, { BuildType } from './interfaces/IBuildType';

interface IOptions {
  baseDir: string;
  buildType: IBuildType;
  definedTypes: Set<string>;
  definedDom: Set<string>;
  definedIsolates?: Set<string>;
  definedSupers?: Set<string>;
}

export default class TsClassExtractor {
  private readonly i: Types.Interface;
  private readonly printer = new Printer();
  private readonly components: Components;
  private readonly inheritsFrom: string[];
  private readonly bodyPrinter: TsBodyPrinter;
  private readonly baseDir: string;
  private readonly buildType: IBuildType;
  private readonly definedTypes: Set<string>;
  private readonly definedDom: Set<string>;
  private readonly definedIsolates: Set<string>;
  private readonly definedSupers: Set<string>;

  constructor(i: Types.Interface, components: Components, options: IOptions) {
    this.i = i;
    this.components = components;
    this.baseDir = options.baseDir;
    this.definedTypes = options.definedTypes;
    this.definedDom = options.definedDom;
    this.definedIsolates = options.definedIsolates || new Set();
    this.definedSupers = options.definedSupers || new Set();
    this.buildType = options.buildType;
    this.inheritsFrom = [i.extends || 'Object'].concat((i.implements || []).sort()).filter(e => e !== 'Object');
    this.bodyPrinter = new TsBodyPrinter(i, this.printer, components, { buildType: this.buildType });
  }

  public run() {
    if (this.inheritsFrom.length) {
      this.printClassGeneratorFunction();
    }
    this.printClassDeclaration();
    this.printer.increaseIndent();

    this.bodyPrinter.printAll();

    this.printer.decreaseIndent();
    if (!this.bodyPrinter.didPrint) {
      this.printer.deleteNewLine();
    }
    this.printer.print('}');

    if (this.inheritsFrom.length) {
      this.printer.printLine(';');
      this.printer.decreaseIndent();
      this.printer.print(`}`);
    }

    this.printStateMachineInterfaces();

    this.prependImports();

    return this.printer.getResult().trim();
  }

  private printClassGeneratorFunction() {
    const i: Types.Interface = this.i;
    const args: string[] = this.inheritsFrom.map(extension => {
      return `${extension}: Constructable<I${extension}>`;
    });
    this.printer.printLine(`export function ${i.name}Generator(${args.join(', ')}) {`);
    this.printer.increaseIndent();
  }

  private printClassDeclaration() {
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

    const exportCmd = inheritsFrom.length ? 'return' : 'export default';
    const className = getNameWithTypeParameter(i.typeParameters, i.name, false);
    const typeParameterName = i.typeParameters && i.typeParameters[0] && i.typeParameters[0].name;
    const iClassName = typeParameterName ? `${toIType(i.name)}<${typeParameterName}>` : toIType(i.name);
    this.printer.printLine(`${exportCmd} class ${className} ${extendsStr}implements ${iClassName} {`);
  }

  private printStateMachineInterfaces() {
    const stateMachinePrinter = new TsStateMachinePrinter(this.i, this.printer, this.components, this.buildType);
    stateMachinePrinter.printInterfaces(this.inheritsFrom, this.bodyPrinter.constants, this.bodyPrinter.properties);
  }

  private prependImports() {
    const i: Types.Interface = this.i;
    const name = i.name;

    const printer = new Printer();
    new TsStateMachinePrinter(this.i, printer, this.components, this.buildType).printInitializer(true);
    const stateMachineInitializerCode = printer.getResult();

    const references: string[] = [name, ...this.inheritsFrom, ...this.bodyPrinter.referencedObjects];
    const referencedTypes = TsExtractor.locateReferences(references, { use: Array.from(this.definedTypes) });
    const referencedDom = TsExtractor.locateReferences(references, { use: Array.from(this.definedDom) });
    const referencedSupers = TsExtractor.locateReferences(references, { use: Array.from(this.definedSupers) });
    const referencedIsolates = TsExtractor.locateReferences(references, { use: Array.from(this.definedIsolates) });
    const printable = ['// tslint:disable:variable-name'];

    if (this.inheritsFrom.length > 0) {
      if (this.inheritsFrom.length > 1) {
        printable.push(`import ClassMixer from '${this.baseDir}/ClassMixer';`);
      }
      printable.push(`import Constructable from '${this.baseDir}/Constructable';`);
    }

    const isAwaited = this.buildType === BuildType.awaited;
    const handlerClassName = `${isAwaited ? 'Awaited' : 'Detached'}Handler`;
    printable.push(`import ${handlerClassName} from '${this.baseDir}/${handlerClassName}';`);
    printable.push(`import initializeConstantsAndProperties from '${this.baseDir}/initializeConstantsAndProperties';`);
    printable.push(`import StateMachine from '${this.baseDir}/StateMachine';`);

    if (referencedTypes.length) {
      const imports = referencedTypes.map(n => `I${n}`).join(', ');
      printable.push(`import { ${imports} } from '${this.baseDir}/interfaces/types';`);
    }

    if (referencedDom.length) {
      const imports = referencedDom.map(n => `I${n}`).join(', ');
      printable.push(`import { ${imports} } from '${this.baseDir}/interfaces/dom';`);
    }

    if (referencedSupers.length) {
      const imports = referencedSupers.map(n => `I${n}`).join(', ');
      printable.push(`import { ${imports} } from '${this.baseDir}/interfaces/supers';`);
    }

    if (referencedIsolates.length) {
      const imports = referencedIsolates.map(n => `I${n}`).join(', ');
      printable.push(`import { ${imports} } from '${this.baseDir}/interfaces/isolates';`);
    }

    for (const inheritName of this.inheritsFrom) {
      const isIsolate = this.definedIsolates.has(inheritName);
      const classesDir = `${this.baseDir}/classes`;
      const mixinsDir = isIsolate ? `${this.baseDir}/isolates` : `${this.baseDir}/mixins`;
      const filePath = `${inheritName === i.extends ? classesDir : mixinsDir}/${inheritName}`;
      printable.push(
        `import { I${inheritName}Properties, I${inheritName}ReadonlyProperties, ${inheritName}PropertyKeys, ${inheritName}ConstantKeys } from '${filePath}';`,
      );
    }
    printable.push('');
    printable.push(stateMachineInitializerCode);

    const handlerName = `${this.buildType}Handler`;
    printable.push(`export const ${handlerName} = new ${handlerClassName}<I${name}>('${name}', getState, setState);`);
    printable.push('');

    this.printer.prependLine(printable.join('\n'));
  }
}
