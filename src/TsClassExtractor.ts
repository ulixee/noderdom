import { getNameWithTypeParameter } from './helpers';
import * as Types from './types';
import Printer from './Printer';
import Components from './Components';
import TsClasslike from './TsClasslike';

const classNamesToSkip = new Set(['Object']);

export default class TsClassExtractor {
  private readonly printer = new Printer();
  private readonly i: Types.Interface;
  private readonly classlike: TsClasslike;
  private readonly hasBody: boolean;
  private readonly hasConstructor: boolean;
  private readonly extensions: string[];

  constructor(components: Components, i: Types.Interface) {
    this.i = i;
    this.classlike = new TsClasslike(components, this.printer, i);
    this.extensions = [i.extends || 'Object'].concat((i.implements || []).sort()).filter(e => e !== 'Object');

    const constructorSignature = i.constructor && i.constructor.signature;
    const constructorParams = constructorSignature && constructorSignature[0] && constructorSignature[0].param;
    const hasConstructor = !!(constructorParams && constructorParams.length);
    const { hasProperties, hasMethods, hasIndexers } = this.classlike;
    this.hasBody = hasConstructor || hasProperties || hasMethods || hasIndexers;
    this.hasConstructor = hasConstructor;
  }

  public run() {
    if (this.extensions.length) {
      this.printClassGeneratorFunction();
    }
    this.printClassDeclaration();
    this.printer.increaseIndent();

    this.classlike.printBody({
      afterConstants: () => {
        this.printConstructorSignature();
      },
    });

    this.printer.decreaseIndent();
    this.printer.print('}');

    if (this.extensions.length) {
      this.printer.printLine(';');
      this.printer.decreaseIndent();
      this.printer.print(`}`);
    }
    const interfacesToImport = this.classlike.extractInterfacesToImport();
    const classesToImport = this.extractClassesToImport();
    this.classlike.printInternalStateHooks(classesToImport);
    this.prependImports(interfacesToImport, classesToImport);

    return this.printer.getResult().trim();
  }

  private printClassGeneratorFunction() {
    const i: Types.Interface = this.i;
    const args: string[] = this.extensions.map(extension => {
      this.classlike.interfacesToImport.add(`I${extension}`);
      return `${extension}: Constructable<I${extension}>`
    });
    this.printer.printLine('// tslint:disable-next-line:variable-name');
    this.printer.printLine(`export function ${i.name}Generator(${args.join(', ')}) {`);
    this.printer.increaseIndent();
  }

  private printClassDeclaration() {
    const i: Types.Interface = this.i;
    const iClass = this.classlike.iClass;
    const extensions = this.extensions;

    let extendsStr = '';
    if (extensions.length > 1) {
      const klass = extensions[0];
      const mixins = extensions.slice(1);
      const mixedClass = `ClassMixer(${klass}, [${mixins.join(', ')}])`;
      const interfacesStr = extensions.map(e => `I${e}`).join(' & ');
      const parent = `(${mixedClass} as unknown) as Constructable<${interfacesStr}>`;
      this.printer.printLine('// tslint:disable-next-line:variable-name');
      this.printer.printLine(`const Parent = ${parent};`);
      this.printer.printSeparatorLine();
      extendsStr = `extends Parent `;
    } else if (i.extends && i.extends !== 'Object') {
      extendsStr = `extends ${i.extends} `;
    }

    const exportCmd = extensions.length ? 'return' : 'export default';
    this.printer.print(
      `${exportCmd} class ${getNameWithTypeParameter(i, i.name, false)} ${extendsStr}implements ${iClass} {`,
    );
    if (this.hasBody) {
      this.printer.endLine();
    }
  }

  private printConstructorSignature() {
    const i: Types.Interface = this.i;
    const constructor = typeof i.constructor === 'object' ? i.constructor : undefined;
    if (!constructor || !constructor.signature || !constructor.signature.length) return;
    if (!constructor.signature[0].param || !constructor.signature[0].param.length) return;

    this.printer.printSeparatorLine(constructor.comment || '// constructor required for this class');
    this.printer.printSeparatorLine();
    const methodArgs = this.classlike.extractMethodArgs(constructor.signature[0]);
    this.printer.printLine(`constructor(${methodArgs}) {`);
    this.printer.increaseIndent();
    if (i.extends && !classNamesToSkip.has(i.extends)) {
      this.printer.printLine(`super();`);
    }
    const methodArgNames = this.classlike.extractMethodArgNames(constructor.signature[0]);
    this.printer.printLine(`InternalHandler.construct(this, [${methodArgNames.join(', ')}]);`);
    this.printer.decreaseIndent();
    this.printer.printLine('}');
  }

  private extractClassesToImport() {
    const i: Types.Interface = this.i;
    const classesToImport: Set<string> = new Set();

    if (i.extends && !classNamesToSkip.has(i.extends)) {
      classesToImport.add(i.extends);
    }

    if (i.implements) {
      i.implements.forEach(x => {
        if (!classNamesToSkip.has(x)) classesToImport.add(x);
      });
    }

    return Array.from(classesToImport);
  }

  private prependImports(interfacesToImport: string[], classesToImport: string[]) {
    const i: Types.Interface = this.i;
    const interfacesToPrepend = new Set(interfacesToImport);
    interfacesToPrepend.add(`I${i.name}`);

    const printable = [];
    if (this.extensions.length > 0) {
      if (this.extensions.length > 1) {
        printable.push(`import ClassMixer from '../ClassMixer';`);
      }
      printable.push(`import Constructable from '../Constructable';`);
    }
    if (this.hasConstructor || this.classlike.usesInternalHandler) {
      printable.push(`import InternalHandler from '../InternalHandler';`);
    }
    printable.push(`import InternalStateGenerator from '../InternalStateGenerator';`);
    printable.push(`import { ${Array.from(interfacesToPrepend).join(', ')} } from '../interfaces';`);

    for (const className of classesToImport) {
      const classPath = className === i.extends ? `./${className}` : `../mixins/${className}`;
      printable.push(`import { I${className}Properties, I${className}ReadonlyProperties } from '${classPath}';`);
    }
    printable.push('');

    this.printer.prependLine(printable.join('\n'));
  }
}
