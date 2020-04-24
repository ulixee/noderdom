import * as Types from './Types';
import Printer from './Printer';
import Components from './Components';
import TsBodyPrinter from './TsBodyPrinter';
import IBuildType from './interfaces/IBuildType';

export default class TsStateMachinePrinter {
  private readonly i: Types.Interface;
  private readonly printer: Printer;
  private readonly components: Components;
  private readonly buildType: IBuildType;

  constructor(i: Types.Interface, printer: Printer, components: Components, buildType: IBuildType) {
    this.i = i;
    this.printer = printer;
    this.components = components;
    this.buildType = buildType;
  }

  public printInitializer(includeReadonly: boolean) {
    const i: Types.Interface = this.i;
    const vars = ['getState', 'setState', 'setHiddenState'];
    if (includeReadonly) {
      vars.push(`setReadonlyOf${i.name}`);
    }
    this.printer.printLine(`export const { ${vars.join(', ')} } = StateMachine<`);
    this.printer.printLine(`  I${i.name},`);
    this.printer.printLine(`  I${i.name}Properties,`);
    this.printer.printLine(`  I${i.name}ReadonlyProperties`);
    this.printer.printLine(`>('${i.name}');`);
  }

  public printInterfaces(classNames: string[], constants: Types.Constant[], properties: Types.Property[]) {
    const readonlyProperties = properties.filter(p => p.readOnly === 1);
    const notReadonlyProperties = properties.filter(p => p.readOnly !== 1);

    this.printer.printSeparatorLine();
    this.printer.printSeparatorLine('\n// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////');

    this.printer.printLine('');
    this.printPropertiesInterface(classNames, readonlyProperties, true);

    this.printer.printLine('');
    this.printPropertiesInterface(classNames, notReadonlyProperties, false);

    this.printPropertyKeys(classNames, properties);
    this.printConstantKeys(classNames, constants);
  }

  private printPropertyKeys(classNames: string[], properties: Types.Property[]) {
    const i: Types.Interface = this.i;
    const propertyKeys: string[] = classNames.map(c => `...${c}PropertyKeys`);
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

  private printPropertiesInterface(classNames: string[], properties: Types.Property[], isReadonly: boolean) {
    const i: Types.Interface = this.i;
    const extendsSuffix = `${isReadonly ? 'Readonly' : ''}Properties`;
    const allExtensions = isReadonly ? classNames : [`${i.name}Readonly`, ...classNames];
    const extendsStr = allExtensions.length
      ? ` extends ${allExtensions.map(x => `I${x}${extendsSuffix}`).join(', ')}`
      : '';
    const interfaceName = `I${i.name}${isReadonly ? 'Readonly' : ''}Properties`;
    this.printer.printLine(`export interface ${interfaceName}${extendsStr} {`);
    this.printer.increaseIndent();

    const bodyPrinterOptions = { buildType: this.buildType, skipImplementation: true };
    const bodyPrinter = new TsBodyPrinter(i, this.printer, this.components, bodyPrinterOptions);
    bodyPrinter.printProperties(properties, true);
    if (!bodyPrinter.didPrint) this.printer.deleteNewLine();

    this.printer.decreaseIndent();
    this.printer.printLine(`}`);
  }
}
