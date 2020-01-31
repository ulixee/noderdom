import * as Types from './types';
import Components from './Components';
import Printer from './Printer';
import { makeNullable, toIType } from './utils';

interface IOptions {
  isWithinClass?: boolean;
}

export default class Helpers {
  public usesInternalHandler: boolean = false;
  private readonly components: Components;
  private readonly printer: Printer;
  private readonly i: Types.Interface;
  private readonly isWithinClass: boolean;

  constructor(components: Components, printer: Printer, i: Types.Interface, options: IOptions = {}) {
    this.components = components;
    this.printer = printer;
    this.i = i;
    this.isWithinClass = options.isWithinClass || false;

  }

  public extractMethodArgs(signature: Types.Signature, isUnused: boolean = false) {
    return signature.param ? this.components.paramsToString(signature.param, true, isUnused) : '';
  }

  public createMethodReturnType(signature: Types.Signature, convertToIType: boolean = false) {
    const returnType = this.components.convertDomTypeToTsType(signature, convertToIType);
    return signature.nullable ? makeNullable(returnType) : returnType;
  }

  public extractMethodArgNames(signature: Types.Signature) {
    return signature.param ? this.components.paramNames(signature.param) : [];
  }

  public printToStringMethod(propertyToPrint?: string) {
    this.usesInternalHandler = true;
    if (this.isWithinClass) {
      this.printer.printSeparatorLine();
      this.printer.print('public ');
    }
    this.printer.print('toString(): string');
    if (this.isWithinClass) {
      this.printer.endLine(' {');
      this.printer.increaseIndent();
      if (propertyToPrint) this.printer.printLine(`// should print ${propertyToPrint} as string`);
      this.printer.printLine(`return InternalHandler.run<${this.iClass}, string>(this, 'string', []);`);
      this.printer.decreaseIndent();
      this.printer.printLine('}');
    } else {
      this.printer.endLine(';');
    }
  }

  public get iClass() {
    const i: Types.Interface = this.i;
    const iType = toIType(i.name);
    if (i['type-parameters'] && i['type-parameters'][0]) {
      return `${iType}<${i['type-parameters'][0].name}>`;
    }
    return iType;
  }

  public printMethod(m: Types.Method) {
    const i: Types.Interface = this.i;
    this.printer.printLines(m.comment);

    const firstTypeParam = i['type-parameters'] && i['type-parameters'][0];
    const extendedType = firstTypeParam && firstTypeParam.extends ? firstTypeParam.name : null;

    m.signature.forEach(signature => {
      const methodArgs = this.extractMethodArgs(signature);
      const returnType = this.createMethodReturnType(signature, !extendedType);
      if (this.isWithinClass) {
        this.printer.printSeparatorLine();
        this.printer.print('public ');
      }
      this.printer.print(`${m.name}(${methodArgs}): ${returnType}`);
      if (this.isWithinClass) {
        this.printer.endLine(' {');
        this.printer.increaseIndent();
        const methodArgNames = this.extractMethodArgNames(signature).join(', ');
        const returnCmd = ['void', 'any'].includes(returnType) ? '' : 'return ';
        this.printer.printLine(
          `${returnCmd}InternalHandler.run<${this.iClass}, ${returnType}>(this, '${m.name}', [${methodArgNames}]);`,
        );
        this.printer.decreaseIndent();
        this.printer.printLine('}');
      } else {
        this.printer.endLine(';');
      }
    });

    if (m.stringifier) {
      this.printToStringMethod(m.name);
    }
  }
}
