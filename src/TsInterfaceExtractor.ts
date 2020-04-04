import { compareName, getNameWithTypeParameter, toIType } from './utils';
import * as Types from './Types';
import Printer from './Printer';
import Components from './Components';
import ICodeModule from './interfaces/ICodeModule';
import TsBodyPrinter from './TsBodyPrinter';

export default class TsInterfaceExtractor {
  public readonly map: any = { properties: {}, methods: {} };
  private readonly i: Types.Interface;
  private readonly printer = new Printer();
  private readonly components: Components;
  private readonly extends: string[];
  private readonly definedObjects: Set<string> = new Set();
  private readonly referencedObjects: Set<string> = new Set();

  constructor(components: Components, i: Types.Interface) {
    this.i = i;
    this.components = components;
    this.extends = [i.extends || 'Object'].concat((i.implements || []).sort()).filter(e => e !== 'Object');
  }

  public run(): ICodeModule {
    const i: Types.Interface = this.i;
    const bodyPrinter = new TsBodyPrinter(this.i, this.printer, this.components, { skipImplementation: true });

    this.printer.printLine(`// ${i.name} //////////`);
    this.printer.printLine('');
    this.printInterfaceEventMap();

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
    return { name, definedObjects, referencedObjects, category: 'NonCallbackInterface', code, elementNamespace };
  }

  //////////////////////////////////////////////////////////////////////////////

  private printInterfaceEventMap() {
    const i: Types.Interface = this.i;
    const { iNameToEhList, iNameToAttributelessEhList, iNameToEhParents } = this.components;
    const hasEventHandlers = iNameToEhList[i.name] && iNameToEhList[i.name].length;
    const hasAttributelessEventHandlers =
      iNameToAttributelessEhList[i.name] && iNameToAttributelessEhList[i.name].length;
    const ehParentCount = iNameToEhParents[i.name] && iNameToEhParents[i.name].length;

    if (hasEventHandlers || hasAttributelessEventHandlers || ehParentCount > 1) {
      const name = `${i.name}EventMap`;
      this.definedObjects.add(name);
      this.printer.print(`export interface I${name}`);
      if (ehParentCount) {
        const extend = iNameToEhParents[i.name].map(p => `I${p.name}EventMap`);
        extend.forEach(iType => this.referencedObjects.add(iType.slice(1)));
        this.printer.print(` extends ${extend.join(', ')}`);
      }
      this.printer.print(' {');
      this.printer.endLine();
      this.printer.increaseIndent();
      iNameToEhList[i.name]
        .concat(iNameToAttributelessEhList[i.name])
        .sort(compareName)
        .forEach(eHandler => this.emitInterfaceEventMapEntry(eHandler));
      this.printer.decreaseIndent();
      this.printer.printLine('}');
      this.printer.printLine('');
    }
  }

  private emitInterfaceEventMapEntry(eHandler: Types.EventHandler) {
    const i: Types.Interface = this.i;
    const eventType = toIType(this.components.getEventTypeInInterface(eHandler.eventName, i));
    this.referencedObjects.add(eventType.slice(1));
    this.printer.printLine(`${eHandler.eventName}: ${eventType};`);
  }

  private printInterfaceDeclaration() {
    const i: Types.Interface = this.i;
    const iName = getNameWithTypeParameter(i.typeParameters, i.name, true);
    this.definedObjects.add(iName.slice(1));
    this.printer.printLines(i.comment);
    this.printer.print(`export interface ${iName}`);
    if (this.extends.length) {
      const iExtends = this.extends.map(toIType);
      this.extends.forEach(t => this.referencedObjects.add(t));
      this.printer.print(` extends ${iExtends.join(', ')}`);
    }
    this.printer.print(` {`);
    this.printer.endLine();
  }
}
