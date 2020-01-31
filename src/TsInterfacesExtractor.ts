import { compareName } from './utils';
import Components from './Components';
import TsInterfaceExtractor from './TsInterfaceExtractor';

export default class TsInterfacesExtractor {
  private readonly components: Components;

  constructor(components: Components) {
    this.components = components;
  }

  public run() {
    return this.components.allNonCallbackInterfaces
      .sort(compareName)
      .filter(i => !i['legacy-namespace'])
      .map(i => {
        const tsInterfaceExtractor = new TsInterfaceExtractor(this.components, i);
        const name = i.name;
        const code = tsInterfaceExtractor.run();
        const elementNamespace = i.element ? i.element.namespace : undefined;
        return { type: 'NonCallbackInterface', name, code, elementNamespace };
      });
  }
}
