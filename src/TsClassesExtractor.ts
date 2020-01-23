import Components from './Components';
import { compareName } from './helpers';
import TsClassExtractor from './TsClassExtractor';

export default class TsClassesExtractor {
  private readonly components: Components;

  constructor(components: Components) {
    this.components = components;
  }

  public run() {
    return this.components.allNonCallbackInterfaces
      .sort(compareName)
      .filter(i => !i['legacy-namespace'] && !i['no-interface-object'])
      .map(i => {
        const tsClassExtractor = new TsClassExtractor(this.components, i);
        const name = i.name;
        const code = tsClassExtractor.run();
        return { type: 'Class', name, code };
      });
  }
}
