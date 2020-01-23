import * as Types from './types';
import Printer from './Printer';
import Components from './Components';
import TsClasslike from './TsClasslike';

export default class TsMixinExtractor {
  private readonly printer = new Printer();
  private readonly classlike: TsClasslike;
  private readonly i: Types.Interface;
  private readonly hasBody: boolean;
  private readonly hasInternalHandler: boolean;

  constructor(components: Components, i: Types.Interface) {
    this.i = i;
    this.classlike = new TsClasslike(components, this.printer, i);

    const { hasProperties, hasMethods, hasIndexers } = this.classlike;
    this.hasBody = hasProperties || hasMethods || hasIndexers;
    this.hasInternalHandler = hasProperties || hasMethods;
  }

  public run() {
    this.printFunctionDeclaration();
    this.printer.increaseIndent();

    this.printClassDeclaration();
    this.printer.increaseIndent();

    this.classlike.printBody();

    this.printer.decreaseIndent();
    this.printer.printLine('};');

    this.printer.decreaseIndent();
    this.printer.print('}');

    const interfacesToImport = this.classlike.extractInterfacesToImport();
    this.classlike.printReadonlyInterface([]);
    this.prependImports(interfacesToImport);

    return this.printer.getResult().trim();
  }

  private prependImports(interfacesToImport: string[]) {
    const i: Types.Interface = this.i;
    const interfacesToPrepend = new Set(interfacesToImport);
    interfacesToPrepend.add(`I${i.name}`);

    const printable = [];
    if (this.hasInternalHandler) {
      printable.push(`import InternalHandler from '../InternalHandler';`);
    }
    printable.push(`import { ${Array.from(interfacesToPrepend).join(', ')} } from '../interfaces';`);
    printable.push('');

    this.printer.prependLine(printable.join('\n'));
  }

  private printFunctionDeclaration() {
    const i: Types.Interface = this.i;
    const classesToExtend: Set<string> = new Set();
    if (i.implements) {
      i.implements.forEach(x => {
        classesToExtend.add(x);
      });
    }

    this.printer.printLine('type Constructor<T = {}> = new (...args: any[]) => T;');
    this.printer.printSeparatorLine();
    this.printer.printLine(`export default function ${i.name}<TBase extends Constructor>(base: TBase) {`);
  }

  private printClassDeclaration() {
    const i: Types.Interface = this.i;
    this.printer.print(`return class extends base implements I${i.name} {`);
    if (this.hasBody) {
      this.printer.endLine();
    }
  }
}
