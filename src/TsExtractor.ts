import TsTypeExtractor from './TsTypeExtractor';
import TsInterfacesExtractor from './TsInterfacesExtractor';
import TsTagNameMapExtractor from './TsTagNameMapExtractor';
import TsClassesExtractor from './TsClassesExtractor';
import TsMixinsExtractor from './TsMixinsExtractor';
import Components from './Components';

export default class TsExtractor {
  constructor(private components: Components) {}

  public extractTypes() {
    return new TsTypeExtractor(this.components).run();
  }

  public extractInterfaces() {
    return new TsInterfacesExtractor(this.components).run();
  }

  public extractTagNameMap(namespace: 'SVG' | 'HTML') {
    return new TsTagNameMapExtractor(this.components).run(namespace);
  }

  public extractClasses() {
    return new TsClassesExtractor(this.components).run();
  }

  public extractMixins() {
    return new TsMixinsExtractor(this.components).run();
  }

  public extractDocumentation() {
    const keys = Object.keys(this.components.interfaces);
    return keys;
  }
}
