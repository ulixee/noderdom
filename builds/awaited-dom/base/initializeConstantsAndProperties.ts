type IPrototypesByChild = Map<any, any>;

export default function initializeConstantsAndProperties<K = any>(
  instance: K,
  constantKeys: string[],
  propertyKeys: string[],
) {
  constantKeys.forEach(key => {
    Object.defineProperty(instance, key, { enumerable: false });
  });

  const prototypesByChild = getPrototypesByChild<K>(instance);
  propertyKeys.forEach(key => {
    const propertyDescriptor = getPropertyDescriptor<K>(instance, key, prototypesByChild)!;
    propertyDescriptor.enumerable = true;
    Object.defineProperty(instance, key, propertyDescriptor);
  });
}

function getPrototypesByChild<K>(instance: K) {
  const prototypesByChild: IPrototypesByChild = new Map();
  const instancePrototype = Object.getPrototypeOf(instance);
  prototypesByChild.set(instance, instancePrototype);

  let childPrototype = instancePrototype;
  let parentPrototype;
  do {
    parentPrototype = Object.getPrototypeOf(childPrototype);
    if (!parentPrototype) break;
    prototypesByChild.set(childPrototype, parentPrototype);
  } while ((childPrototype = parentPrototype)); // tslint:disable-line:no-conditional-assignment

  return prototypesByChild;
}

function getPropertyDescriptor<K>(instance: K, key: string, prototypesByChild: any) {
  let prototype = prototypesByChild.get(instance);
  do {
    const propertyDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
    if (propertyDescriptor) return propertyDescriptor;
  } while ((prototype = prototypesByChild.get(prototype))); // tslint:disable-line:no-conditional-assignment
}