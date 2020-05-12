import Printer from './Printer';
import Components from './Components';
import { toIType } from './utils';
import { ObjectType } from './interfaces/IObjectType';

export default class TsElementExtractor {
  private printer = new Printer();
  private components: Components;
  private domTypes: Set<string> = new Set();
  constructor(components: Components) {
    this.components = components;
  }

  public extract() {
    const tagNameToElementName = this.components.getTagNameToElementNameMap();
    const response = [
      this.printElementTagNameMap('IHTMLElementTagNameMap', tagNameToElementName.htmlResult.active),
      this.printElementTagNameMap('IHTMLElementDeprecatedTagNameMap', tagNameToElementName.htmlResult.deprecated),
      this.printElementTagNameMap('ISVGElementTagNameMap', tagNameToElementName.svgResult.active),
      this.printElementTagNameMap('ISVGElementDeprecatedTagNameMap', tagNameToElementName.svgResult.deprecated),
    ];
    return response;
  }

  public extractImports() {
    if (!this.domTypes.size) return;
    this.printer.reset();
    this.printer.print(`import { ${Array.from(this.domTypes).join(', ')} } from './${ObjectType.official}';`);
    const results = this.printer.getResult();
    return results;
  }

  private printElementTagNameMap(name: string, results: { [k: string]: string }) {
    const entries = Object.entries(results).sort();
    this.printer.reset();
    this.printer.print(`export interface ${name} {`);
    if (entries.length) {
      this.printer.endLine();
      this.printer.increaseIndent();
      for (const [e, value] of entries) {
        const iType = toIType(value);
        this.domTypes.add(iType);
        this.printer.printLine(`${e.toLowerCase()}: ${iType};`);
      }
      this.printer.decreaseIndent();
    }
    this.printer.print('}');
    return this.printer.getResult();
  }
}
