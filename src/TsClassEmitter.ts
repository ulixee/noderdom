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
    return [...this.extractClasses()];
  }

  private extractClasses() {
    return this.components.allNonCallbackInterfaces
      .sort(compareName)
      .filter(i => !i['legacy-namespace'] && !i['no-interface-object'])
      .map(i => {
        const name = i.name;
        const code = this.extractClass(i);
        return { type: 'Class', name, code };
      });
  }

  private extractClass(i: Types.Interface) {
    this.printer.reset();
    this.bodyPrinter.reset();

    this.printImports(i);
    this.printClassDeclaration(i);
    this.printer.increaseIndent();

    this.printConstructorSignature(i);
    this.bodyPrinter.print(i);

    this.printer.decreaseIndent();
    this.printer.print('}');

    this.prependImports(i);

    return this.printer.getResult().trim();
  }

  private prependImports(i: Types.Interface) {
    const interfacesToImport = new Set([`I${i.name}`, ...this.bodyPrinter.getInterfacesToImport(i)]);
    this.printer.prependLine(`import { ${Array.from(interfacesToImport).join(', ')} } from '../interfaces';`);
  }

  private printImports(i: Types.Interface) {
    const namesToSkip = new Set(['Object']);
    const classesToImport = new Set();

    if (i.extends && !namesToSkip.has(i.extends)) {
      classesToImport.add(i.extends);
    }

    if (i.implements) {
      i.implements.forEach(x => {
        if (!namesToSkip.has(x)) classesToImport.add(x);
      });
    }

    for (const classToImport of classesToImport) {
      if (classToImport === i.extends) {
        this.printer.printLine(`import ${classToImport} from './${classToImport}';`);
      } else {
        this.printer.printLine(`import ${classToImport} from '../mixins/${classToImport}';`);
      }
    }

    this.printer.printSeparatorLine();
  }

  private printClassDeclaration(i: Types.Interface) {
    const classesToExtend: Set<string> = new Set();
    if (i.implements) {
      i.implements.forEach(x => {
        classesToExtend.add(x);
      });
    }

    let extendsStr = '';
    if (classesToExtend.size) {
      const prefixes = Array.from(classesToExtend);
      const suffixes = Array(classesToExtend.size - 1).fill(')');
      const mixinStr = `${prefixes.join('(')}(${i.extends})${suffixes.join('')}`;
      this.printer.printLine('// tslint:disable-next-line:variable-name');
      this.printer.printLine(`const ${i.name}Base = ${mixinStr};`);
      this.printer.printLine('');
      extendsStr = `extends ${i.name}Base `;
    } else if (i.extends && i.extends !== 'Object') {
      extendsStr = `extends ${i.extends} `;
    }

    this.printer.printLine(`export default class ${i.name} ${extendsStr}implements I${i.name} {`);
  }

  private printConstructorSignature(i: Types.Interface) {
    const constructor = typeof i.constructor === 'object' ? i.constructor : undefined;
    if (!constructor || !constructor.signature || !constructor.signature.length) return;
    if (!constructor.signature[0].param || !constructor.signature[0].param.length) return;

    this.printer.printComment(constructor.comment);
    const methodArgs = this.bodyPrinter.createMethodArgs(constructor.signature[0], true);
    this.printer.printLine(`constructor(${methodArgs}) {`);
    this.printer.increaseIndent();
    if (i.extends) {
      const superArgs = this.createSuperArgs(constructor.signature[0]);
      this.printer.printLine(`super(${superArgs});`);
    }
    this.printer.printLine(`throw new Error('constructor not implemented');`);
    this.printer.decreaseIndent();
    this.printer.printLine('}');
  }

  private createSuperArgs(_signature: Types.Signature) {
    return '';
  }
}
