import * as Types from './types';
import Printer from './Printer';
import Components from './Components';
import { compareName } from './helpers';
import TsClasslikeBodyPrinter from './TsClasslikeBodyPrinter';

export default class TsClassEmitter {
  private readonly printer = new Printer();
  private readonly components: Components;
  private readonly bodyPrinter: TsClasslikeBodyPrinter;

  constructor(components: Components) {
    this.components = components;
    this.bodyPrinter = new TsClasslikeBodyPrinter(this.components, this.printer);
  }

  public run() {
    return [...this.extractMixins()];
  }

  private extractMixins() {
    return this.components.allNonCallbackInterfaces
      .sort(compareName)
      .filter(i => !i['legacy-namespace'] && i['no-interface-object'])
      .map(i => {
        const name = i.name;
        const code = this.extractMixin(i);
        return { type: 'Mixin', name, code };
      });
  }

  private extractMixin(i: Types.Interface) {
    this.printer.reset();
    this.bodyPrinter.reset();

    this.printFunctionDeclaration(i);
    this.printer.increaseIndent();

    this.printClassDeclaration(i);
    this.printer.increaseIndent();

    this.printConstructorSignature(i);
    this.bodyPrinter.print(i);

    this.printer.decreaseIndent();
    this.printer.printLine('};');

    this.printer.decreaseIndent();
    this.printer.print('}');

    this.prependImports(i);

    return this.printer.getResult().trim();
  }

  private prependImports(i: Types.Interface) {
    const interfacesToImport = new Set([`I${i.name}`, ...this.bodyPrinter.getInterfacesToImport(i)]);
    this.printer.prependLine(`import { ${Array.from(interfacesToImport).join(', ')} } from '../interfaces';\n`);
  }

  private printFunctionDeclaration(i: Types.Interface) {
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

  private printClassDeclaration(i: Types.Interface) {
    this.printer.printLine(`return class extends base implements I${i.name} {`);
  }

  private printConstructorSignature(i: Types.Interface) {
    const constructor = typeof i.constructor === 'object' ? i.constructor : undefined;
    if (!constructor || !constructor.signature || !constructor.signature.length) return;
    if (!constructor.signature[0].param || !constructor.signature[0].param.length) return;

    this.printer.printComment(constructor.comment);
    const methodArgs = this.bodyPrinter.createMethodArgs(constructor.signature[0]);
    this.printer.printLine(`constructor(${methodArgs}) {`);
    this.printer.increaseIndent();
    this.printer.printLine(`throw new Error('constructor not implemented');`);
    this.printer.decreaseIndent();
    this.printer.printLine('}');
  }
}
