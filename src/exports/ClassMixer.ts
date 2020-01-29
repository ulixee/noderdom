import Constructable from './Constructable';

// tslint:disable-next-line:ban-types
export default function ClassMixer(klass: Constructable, mixins: Function[]): any {
  const isClassable = (element: any) => typeof element === 'function';

  if (!Array.isArray(mixins)) {
    throw new Error('classes should be put in an array');
  }

  if (!mixins || mixins.length === 0 || !mixins.every(isClassable)) {
    throw new Error('No valid mixins were found');
  }

  applyMixins(klass, mixins);
  return klass;
}

function applyMixins(klass: any, mixins: any[]): void {
  mixins.forEach(mixin => {
    Object.getOwnPropertyNames(mixin.prototype).forEach(name => {
      if (name === 'constructor') return;
      if (Object.getOwnPropertyDescriptor(klass.prototype, name)) {
        throw new Error(`${mixin.name}.${name} conflicts with same property on ${klass.name}`);
      }
      Object.defineProperty(klass.prototype, name, Object.getOwnPropertyDescriptor(mixin.prototype, name) as any);
    });
  });
}
