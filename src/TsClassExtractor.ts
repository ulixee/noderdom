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
  private readonly readonlyKey: string = '_';
  private baseClassCode: string[] = [];

  constructor(components: Components, i: Types.Interface) {
    this.i = i;
    this.classlike = new TsClasslike(components, this.printer, i);

    const constructorSignature = i.constructor && i.constructor.signature;
    const constructorParams = constructorSignature && constructorSignature[0] && constructorSignature[0].param;
    const hasConstructor = !!(constructorParams && constructorParams.length);
    const { hasProperties, hasMethods, hasIndexers } = this.classlike;
    this.hasBody = hasConstructor || hasProperties || hasMethods || hasIndexers;
    this.hasConstructor = hasConstructor;
  }

  public run() {
    this.printClassDeclaration();
    this.printer.increaseIndent();

    this.classlike.printBody({
      afterConstants: () => {
        if (this.classlike.readonlyProperties.length) {
          this.printer.printSeparatorLine('// store readonly properties\n');
          this.printer.printLine(`protected readonly ${this.readonlyKey}: I${this.i.name}Rps = {};`);
        }
        this.printConstructorSignature();
      },
    });

    this.printer.decreaseIndent();
    this.printer.print('}');

    const interfacesToImport = this.classlike.extractInterfacesToImport();
    const classesToImport = this.extractClassesToImport();

    this.classlike.printReadonlyInterface(classesToImport);
    if (classesToImport.length || this.classlike.readonlyProperties.length) {
      this.printSetRpsFunction();
    }

    this.prependImports(interfacesToImport, classesToImport);

    return this.printer.getResult().trim();
  }

  private printClassDeclaration() {
    const i: Types.Interface = this.i;
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
      this.baseClassCode.push('// tslint:disable-next-line:variable-name');
      this.baseClassCode.push(`const ${i.name}Base = ${mixinStr};`);
      extendsStr = `extends ${i.name}Base `;
    } else if (i.extends && i.extends !== 'Object') {
      extendsStr = `extends ${i.extends} `;
    }
    const iClass = this.classlike.iClass;
    this.printer.print(
      `export default class ${getNameWithTypeParameter(i, i.name, false)} ${extendsStr}implements ${iClass} {`,
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
    if (this.hasConstructor || this.classlike.usesInternalHandler) {
      printable.push(`import InternalHandler from '../InternalHandler';`);
    }
    printable.push(`import { ${Array.from(interfacesToPrepend).join(', ')} } from '../interfaces';`);

    for (const className of classesToImport) {
      const classPath = className === i.extends ? `./${className}` : `../mixins/${className}`;
      printable.push(`import ${className}, { I${className}Rps, rp${className}Keys } from '${classPath}';`);
    }
    printable.push('');

    if (this.baseClassCode.length) {
      printable.push(...this.baseClassCode);
      printable.push('');
    }

    this.printer.prependLine(printable.join('\n'));
  }

  private printSetRpsFunction() {
    const i: Types.Interface = this.i;
    this.printer.printSeparatorLine();
    this.printer.printLine(
      `export function set${i.name}Rps(instance: ${this.classlike.iClassExtends}, data: I${i.name}Rps): void {`,
    );
    this.printer.printLine('  // @ts-ignore');
    this.printer.printLine(`  const properties: Record<string, any> = instance.${this.readonlyKey};`);
    this.printer.printLine('  Object.entries(data).forEach(([key, value]: [string, any]) => {');
    this.printer.printLine(`    if (!rp${i.name}Keys.has(key)) {`);
    this.printer.printLine(`      throw new Error(\`\${key} is not a property of ${i.name}\`);`);
    this.printer.printLine('    }');
    this.printer.printLine('    properties[key] = value;');
    this.printer.printLine('  });');
    this.printer.printLine('}');
  }
}
