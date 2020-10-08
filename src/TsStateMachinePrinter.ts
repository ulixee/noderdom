import * as Types from './Types';
import Printer from './Printer';
import Components from './Components';
import TsBodyPrinter from './TsBodyPrinter';
import IDomType, { DomType } from './interfaces/IDomType';
import IBuildType from './interfaces/IBuildType';
import TsIteratorExtractor from './TsIteratorExtractor';

interface IOptions {
  domType: IDomType;
  buildType: IBuildType;
}

export default class TsStateMachinePrinter {
  private readonly i: Types.Interface;
  private readonly printer: Printer;
  private readonly components: Components;
  private readonly domType: IDomType;
  private readonly buildType: IBuildType;
  private readonly iteratorExtractor?: TsIteratorExtractor;

  constructor(
    i: Types.Interface,
    printer: Printer,
    components: Components,
    options: IOptions,
    iteratorExtractor?: TsIteratorExtractor,
  ) {
    this.i = i;
    this.printer = printer;
    this.components = components;
    this.domType = options.domType;
    this.buildType = options.buildType;
    this.iteratorExtractor = iteratorExtractor;
  }

  public printInitializer() {
    const i: Types.Interface = this.i;
    const vars = ['getState', 'setState', 'recordProxy'];
    this.printer.print(`export const { ${vars.join(', ')} } = StateMachine<I${i.name}, I${i.name}Properties>();`);
  }

  public printInterfaces(classNames: string[], constants: Types.Constant[], properties: Types.Property[]) {
    this.printer.printSeparatorLine();
    this.printer.printSeparatorLine('\n// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////');

    this.printer.printLine('');
    this.printPropertiesInterface(classNames, properties);
    this.printPropertyKeys(classNames, properties);
    this.printConstantKeys(classNames, constants);
  }

  private printPropertyKeys(classNames: string[], properties: Types.Property[]) {
    const i: Types.Interface = this.i;
    const propertyKeys: string[] = [];
    propertyKeys.push(...classNames.map(c => `...${c}PropertyKeys`));
    propertyKeys.push(...properties.map(p => `'${p.name}'`));
    this.printer.printLine('');
    this.printer.printLine(`export const ${i.name}PropertyKeys = [${propertyKeys.join(', ')}];`);
  }

  private printConstantKeys(classNames: string[], constants: Types.Constant[]) {
    const i: Types.Interface = this.i;
    const constantKeys: string[] = classNames.map(c => `...${c}ConstantKeys`);
    constantKeys.push(...constants.map(p => `'${p.name}'`));
    this.printer.printLine('');
    this.printer.printLine(`export const ${i.name}ConstantKeys = [${constantKeys.join(', ')}];`);
  }

  // privates

  private printPropertiesInterface(classNames: string[], properties: Types.Property[]) {
    const i: Types.Interface = this.i;
    const extendsStr = classNames.length ? ` extends ${classNames.map(x => `I${x}Properties`).join(', ')}` : '';
    const interfaceName = `I${i.name}Properties`;
    this.printer.printLine(`export interface ${interfaceName}${extendsStr} {`);
    this.printer.increaseIndent();
    if (this.domType === DomType.awaited) {
      this.printer.printLine(`awaitedPath: AwaitedPath;`);
      this.printer.printLine(`awaitedOptions: any;`);
    }
    if (this.i.isNodeAttached || this.iteratorExtractor?.hasIterable()) {
      this.printer.printLine(`createInstanceName: string;`);
      if (this.iteratorExtractor?.hasIterable() && !this.iteratorExtractor?.hasMaplikeSequence) {
        this.printer.printLine(`createIterableName: string;`);
      }
      this.printer.printLine();
    }
    const bodyPrinterOptions = { domType: this.domType, buildType: this.buildType, skipImplementation: true };
    const bodyPrinter = new TsBodyPrinter(i, this.printer, this.components, bodyPrinterOptions);
    bodyPrinter.printProperties(properties, true);
    if (!bodyPrinter.didPrint) this.printer.deleteNewLine();

    this.printer.decreaseIndent();
    this.printer.printLine(`}`);
  }
}
