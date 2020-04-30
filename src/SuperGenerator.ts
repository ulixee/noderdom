import Components from './Components';
import DependencyCollector from './DependencyCollector';
import { DomType } from './interfaces/IDomType';

const BASE_NAMES = [
  'Document',
  'Element',
  'Node',
  'NodeList',
  'HTMLCollection',
  'Text',
  'CharacterData',
  'HTMLElement',
  'StyleSheet',
];

export default class SuperGenerator {
  public static baseNames: string[] = BASE_NAMES;

  public static superizeName(baseName: string) {
    return BASE_NAMES.includes(baseName) ? `Super${baseName}` : baseName;
  }

  public static injectIntoComponents(components: Components) {
    const dependencyCollector = new DependencyCollector(components, DomType.awaited);

    this.baseNames.forEach(baseName => {
      const superName = `Super${baseName}`;
      const inheritsFrom = dependencyCollector.get(baseName);
      // console.log('--------------------------------');
      // console.log(baseName);
      // console.log(inheritsFrom);
      if (!components.allInterfacesMap[baseName]) return;
      const superInterface = Object.assign({}, components.allInterfacesMap[baseName], { name: superName });
      delete superInterface.extends;

      superInterface.implements = [];

      inheritsFrom.officialKlasses.forEach(name => {
        superInterface.implements!.push(name);
      });

      inheritsFrom.officialMixins.forEach(name => {
        superInterface.implements!.push(name);
      });

      inheritsFrom.isolateMixins.forEach(name => {
        const isolateName = `${name}Isolate`;
        const isolateInterface = Object.assign({}, components.allInterfacesMap[name], { name: isolateName });

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
