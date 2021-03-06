import Components from './Components';
import DependencyCollector from './DependencyCollector';
import { DomType } from './interfaces/IDomType';

const BASE_NAMES = ['Document', 'Element', 'Node', 'NodeList', 'HTMLCollection', 'Text', 'HTMLElement', 'StyleSheet'];

export default class SuperGenerator {
  public static baseNames: string[] = BASE_NAMES;

  public static injectIntoComponents(components: Components) {
    const dependencyCollector = new DependencyCollector(components, DomType.awaited);

    this.baseNames.forEach(baseName => {
      if (!components.allInterfacesMap[baseName]) return;
      const superName = `Super${baseName}`;
      const inheritsFrom = dependencyCollector.get(baseName);
      const superInterface = Object.assign({}, components.allInterfacesMap[baseName], { name: superName });
      delete superInterface.extends;

      superInterface.implements = [];

      inheritsFrom.mixinNames.forEach(mixinName => {
        superInterface.implements!.push(mixinName);
      });

      inheritsFrom.klassNames.forEach(klassName => {
        const isolateName = `${klassName}Isolate`;
        const isolateInterface = Object.assign({}, components.allInterfacesMap[klassName], { name: isolateName });

        isolateInterface.properties = Object.assign({}, isolateInterface.properties);
        isolateInterface.methods = Object.assign({}, isolateInterface.methods);

        components.awaitedIsolates[isolateName] = isolateInterface;
        superInterface.implements!.push(isolateName);
      });

      components.awaitedSupers[superName] = superInterface;
    });

    return components;
  }
}
