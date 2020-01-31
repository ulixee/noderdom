import Printer from './Printer';
import Components from './Components';
import { toIType } from './utils';

export default class TsTagNameMapExtractor {
  private printer = new Printer();
  private components: Components;

  constructor(components: Components) {
    this.components = components;
  }

  public run(namespace: 'SVG' | 'HTML') {
    const tagNameToEleName = this.components.getTagNameToElementNameMap();
    if (namespace === 'SVG') {
      return [
        this.extractElementTagNameMap('ISVGElementTagNameMap', tagNameToEleName.svgResult.active),
        this.extractElementTagNameMap('ISVGElementDeprecatedTagNameMap', tagNameToEleName.svgResult.deprecated),
      ];
    }
    return [
      this.extractElementTagNameMap('IHTMLElementTagNameMap', tagNameToEleName.htmlResult.active),
      this.extractElementTagNameMap('IHTMLElementDeprecatedTagNameMap', tagNameToEleName.htmlResult.deprecated),
    ];
  }

  private extractElementTagNameMap(name: string, results: { [k: string]: string }) {
    this.printer.reset();
    this.printer.printLine(`export interface ${name} {`);
    this.printer.increaseIndent();
    for (const [e, value] of Object.entries(results).sort()) {
      this.printer.printLine(`${e.toLowerCase()}: ${toIType(value)};`);
    }
    this.printer.decreaseIndent();
    this.printer.print('}');
    return this.printer.getResult();
  }
}
