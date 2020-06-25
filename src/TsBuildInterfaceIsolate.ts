import { getNameWithTypeParameter } from './utils';
import * as Types from './Types';
import Printer from './Printer';
import Components from './Components';
import ICodeModule from './interfaces/ICodeModule';
import TsBodyPrinter from './TsBodyPrinter';
import IDomType from './interfaces/IDomType';
import { BuildType } from './interfaces/IBuildType';

interface IOptions {
  domType: IDomType;
}

export default class TsBuildInterfaceIsolate {
  public readonly map: any = { properties: {}, methods: {} };
  private readonly i: Types.Interface;
  private readonly printer = new Printer();
  private readonly components: Components;
  private readonly definedObjects: Set<string> = new Set();
  private readonly referencedObjects: Set<string> = new Set();
  private readonly domType: IDomType;

  constructor(components: Components, i: Types.Interface, options: IOptions) {
    this.i = i;
    this.components = components;
    this.domType = options.domType;
  }

  public run(): ICodeModule {
    const { i, domType } = this;
    const options = { domType, buildType: BuildType.base, skipImplementation: true, skipEventHandlers: true };
    const bodyPrinter = new TsBodyPrinter(this.i, this.printer, this.components, options);

    this.printer.printLine(`// ${i.name} //////////`);
    this.printer.printLine('');

    this.printInterfaceDeclaration();
    this.printer.increaseIndent();

    bodyPrinter.printAll();
    bodyPrinter.referencedObjects.forEach(t => this.referencedObjects.add(t));
    if (!bodyPrinter.didPrint) this.printer.deleteNewLine();

    this.printer.decreaseIndent();
    this.printer.print('}');

    const name = i.name;
    const definedObjects: string[] = Array.from(this.definedObjects);
    const referencedObjects: string[] = Array.from(this.referencedObjects);
    const code = this.printer.getResult();
    const elementNamespace = i.element ? i.element.namespace : undefined;
    return { name, definedObjects, referencedObjects, category: 'InterfaceIsolate', code, elementNamespace };
  }

  //////////////////////////////////////////////////////////////////////////////

  private printInterfaceDeclaration() {
    const i: Types.Interface = this.i;
    const iName = getNameWithTypeParameter(i.typeParameters, i.name, true);
    this.definedObjects.add(iName.slice(1));
    this.printer.printLines(i.comment);
    this.printer.printLine(`export interface ${iName} {`);
  }
}
