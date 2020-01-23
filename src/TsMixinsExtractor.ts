import Components from './Components';
import { compareName } from './helpers';
import TsMixinExtractor from './TsMixinExtractor';

export default class TsMixinsExtractor {
  private readonly components: Components;

  constructor(components: Components) {
    this.components = components;
  }

  public run() {
    return this.components.allNonCallbackInterfaces
      .sort(compareName)
      .filter(i => !i['legacy-namespace'] && i['no-interface-object'])
      .map(i => {
        const tsMixinExtractor = new TsMixinExtractor(this.components, i);
        const name = i.name;
        const code = tsMixinExtractor.run();
        return { type: 'Mixin', name, code };
      });
  }
}
