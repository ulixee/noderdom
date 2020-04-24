import Constructable from './Constructable';

export default function initializeConstantsAndProperties<K = any>(
  Klass: Constructable, // tslint:disable-line:variable-name
  instance: K,
  constantKeys: string[],
  propertyKeys: string[],
) {
  constantKeys.forEach(key => {
    Object.defineProperty(instance, key, { enumerable: false });
  });
  propertyKeys.forEach(key => {
    const propertyDescriptor = Object.getOwnPropertyDescriptor(Klass.prototype, key) || {};
    propertyDescriptor.enumerable = true;
    Object.defineProperty(instance, key, propertyDescriptor);
  });
}
