const _objects = new WeakMap();

export default function InternalStateGenerator<IClass, IProperties, IReadonlyProperties>(klass: string) {
  function setState(instance: IClass, properties: IProperties): void {
    const object: Record<string, any> = getState(instance);
    Object.entries(properties).forEach(([key, value]: [string, any]) => {
      object[key] = value;
    });
    _objects.set(instance as any, object);
  }

  function getState(instance: IClass) {
    return _objects.get(instance as any) || {};
  }

  function setReadonlyOf(instance: IClass, properties: IReadonlyProperties) {
    setState(instance, (properties as unknown) as IProperties);
  }

  return {
    getState,
    setState,
    [`setReadonlyOf${klass}`]: setReadonlyOf,
  };
}
