const _objects = new WeakMap();

export default function StateMachine<IClass, IProperties, IReadonlyProperties>(klass: string) {
  function setState<P = IProperties>(instance: IClass, properties: P): void {
    const object: Record<string, any> = getState(instance);
    Object.entries(properties).forEach(([key, value]: [string, any]) => {
      object[key] = value;
    });
    _objects.set(instance as any, object);
  }

  function setHiddenState<IHiddenProperties extends {}>(instance: IClass, properties: IHiddenProperties): void {
    setState<IHiddenProperties>(instance, properties);
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
    setHiddenState,
    [`setReadonlyOf${klass}`]: setReadonlyOf,
  };
}
