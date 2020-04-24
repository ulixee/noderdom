import { Constructablish } from './Constructable';

export default function initializeConstantsAndProperties<K = any>(
  Klass: Constructablish, // tslint:disable-line:variable-name
  instance: K,
  constantKeys: string[],
  propertyKeys: string[],
  propertyIsHandled: (key: string) => boolean = _ => true,
) {
  const prototype = Object.getPrototypeOf(instance);
  constantKeys.forEach(key => {
    Object.defineProperty(instance, key, { enumerable: false });
  });
  propertyKeys.forEach(key => {
    const originalPropertyDescriptor = Object.getOwnPropertyDescriptor(Klass.prototype, key);
    const redefinedPropertyDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
    const isHandled = propertyIsHandled(key) || !!redefinedPropertyDescriptor;
    if (!isHandled) return;

    const propertyDescriptor = redefinedPropertyDescriptor || originalPropertyDescriptor || {};
    propertyDescriptor.enumerable = true;
    Object.defineProperty(instance, key, propertyDescriptor);
  });
}
