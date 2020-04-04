import * as Types from './Types';
import Printer from './Printer';
import Components from './Components';
import TsStateMachinePrinter from './TsStateMachinePrinter';
import TsBodyPrinter from './TsBodyPrinter';
import TsExtractor from './TsExtractor';

interface IOptions {
  baseDir: string;
  definedTypes: Set<string>;
  definedDom: Set<string>;
  definedIsolates?: Set<string>;
  isDynamic?: boolean;
}

export default class TsMixinExtractor {
  private readonly i: Types.Interface;
  private readonly printer = new Printer();
  private readonly components: Components;
  private readonly bodyPrinter: TsBodyPrinter;
  private readonly baseDir: string;
  private readonly definedTypes: Set<string>;
  private readonly definedDom: Set<string>;
  private readonly definedIsolates: Set<string>;
  private readonly isDynamic: boolean;

  constructor(i: Types.Interface, components: Components, options: IOptions) {
    this.i = i;
    this.components = components;
    this.baseDir = options.baseDir;
    this.definedTypes = options.definedTypes;
    this.definedDom = options.definedDom;
    this.definedIsolates = options.definedIsolates || new Set();
    this.isDynamic = options.isDynamic || false;
    this.bodyPrinter = new TsBodyPrinter(i, this.printer, components, { skipConstructor: true });
  }

  public run() {
    this.printClassDeclaration();
    this.printer.increaseIndent();

    this.bodyPrinter.printAll();
    if (!this.bodyPrinter.didPrint) this.printer.deleteNewLine();

    this.printer.decreaseIndent();
    this.printer.print('}');

    this.printStateMachineInterfaces();

    this.prependImports();

    return this.printer.getResult().trim();
  }

  private printClassDeclaration() {
    const i: Types.Interface = this.i;
    this.printer.printLine(`export default class ${i.name} implements I${i.name} {`);
  }

  private printStateMachineInterfaces() {
    const stateMachinePrinter = new TsStateMachinePrinter(this.i, this.printer, this.components);
    stateMachinePrinter.printInterfaces([], this.bodyPrinter.constants, this.bodyPrinter.properties);
  }

  private prependImports() {
    const i: Types.Interface = this.i;
    const name = i.name;

    const printer = new Printer();
    new TsStateMachinePrinter(this.i, printer, this.components).printInitializer(true);
    const stateMachineInitializerCode = printer.getResult();

    const references: string[] = [name, ...this.bodyPrinter.referencedObjects];
    const referencedTypes = TsExtractor.locateReferences(references, { use: Array.from(this.definedTypes) });
    const referencedDom = TsExtractor.locateReferences(references, { use: Array.from(this.definedDom) });
    const referencedIsolates = TsExtractor.locateReferences(references, { use: Array.from(this.definedIsolates) });
    const interfacesDir = `${this.baseDir}/interfaces`;
    const printable = [];

    const handlerFilename = `${this.isDynamic ? 'Dynamic' : 'Static'}Handler`;
    printable.push(`import Handler from '${this.baseDir}/${handlerFilename}';`);
    printable.push(`import StateMachine from '${this.baseDir}/StateMachine';`);

    if (referencedIsolates.length) {
      printable.push(`import { ${referencedIsolates.map(n => `I${n}`).join(', ')} } from '${interfacesDir}/isolates';`);
    }
    if (referencedDom.length) {
      printable.push(`import { ${referencedDom.map(n => `I${n}`).join(', ')} } from '${interfacesDir}/dom';`);
    }
    if (referencedTypes.length) {
      printable.push(`import { ${referencedTypes.map(n => `I${n}`).join(', ')} } from '${interfacesDir}/types';`);
    }

    printable.push('// tslint:disable:variable-name');
    printable.push('');

    printable.push(stateMachineInitializerCode);
    printable.push(`export const handler = new Handler<I${name}>('${name}', getState, setState);`);
    printable.push('');

    this.printer.prependLine(printable.join('\n'));
  }
}
