const protoDescriptors = new Map<any, PropertyDescriptorMap>();

export default function inspectInstanceProperties(instance: any, propertyKeys: string[], constantKeys?: string[]): any {
  const proto = Object.getPrototypeOf(instance);
  if (protoDescriptors.has(proto)) {
    Object.defineProperties(instance, protoDescriptors.get(proto) as any);
    return instance;
  }

  const descriptors: PropertyDescriptorMap = {};

  if (constantKeys) {
    for (const key of constantKeys) {
      descriptors[key] = { enumerable: false };
    }
  }
  let parentPrototype = instance;
  do {
    const properties = Object.getOwnPropertyDescriptors(parentPrototype);
    for (const [key, propertyDescriptor] of Object.entries(properties)) {
      if (!descriptors[key] && propertyKeys.includes(key)) {
        propertyDescriptor.enumerable = true;
        descriptors[key] = propertyDescriptor;
      }
    }
    parentPrototype = Object.getPrototypeOf(parentPrototype);
  } while (parentPrototype && parentPrototype !== Object.prototype);

  Object.defineProperties(instance, descriptors);
  protoDescriptors.set(proto, descriptors);
  return instance;
}
