import Constructable from './Constructable';

// tslint:disable-next-line:ban-types
export default function ClassMixer(klass: Constructable, otherKlasses: Function[]): any {
  const isClassable = (element: any) => typeof element === 'function';

  if (!Array.isArray(otherKlasses)) {
    throw new Error('2nd argument must be an array');
  }

  if (!otherKlasses || otherKlasses.length === 0) {
    throw new Error('2nd argument cannot be an empty array');
  }

  otherKlasses.forEach(otherKlass => {
    if (!otherKlass) {
      throw new Error(`2nd argument has has an empty item: ${otherKlasses.map(m => !!m)}`);
    }
    if (!isClassable(otherKlass)) {
      throw new Error(`${otherKlass.name} is not a Classible mixin: ${otherKlass}`);
    }
  });

  return applyMixins(cloneClass(klass), otherKlasses);
}

function cloneClass(klass: Constructable) {
  return class extends klass {};
}

function applyMixins(klass: any, otherKlasses: any[]): void {
  otherKlasses.forEach(otherKlass => {
    Object.getOwnPropertyNames(otherKlass.prototype).forEach(name => {
      if (name === 'constructor') return;
      if (Object.getOwnPropertyDescriptor(klass.prototype, name)) {
        throw new Error(`${otherKlass.name}.${name} conflicts with same property on ${klass.name}`);
      }
      Object.defineProperty(klass.prototype, name, Object.getOwnPropertyDescriptor(otherKlass.prototype, name) as any);
    });
  });
  return klass;
}
