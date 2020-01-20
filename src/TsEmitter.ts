import TsTypeEmitter from './TsTypeEmitter';
import TsInterfaceEmitter from './TsInterfaceEmitter';
import TsTagNameMapEmitter from './TsTagNameMapEmitter';
import TsClassEmitter from './TsClassEmitter';
import TsMixinEmitter from './TsMixinEmitter';
import Components from './Components';

export default class TsEmitter {
  constructor(private components: Components) {}

  public emitTypes() {
    return new TsTypeEmitter(this.components).run();
  }

  public emitInterfaces() {
    return new TsInterfaceEmitter(this.components).run();
  }

  public emitTagNameMap(namespace: 'SVG' | 'HTML') {
    return new TsTagNameMapEmitter(this.components).run(namespace);
  }

  public emitClasses() {
    return new TsClassEmitter(this.components).run();
  }

  public emitMixins() {
    return new TsMixinEmitter(this.components).run();
  }
}
