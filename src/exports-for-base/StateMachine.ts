const _objects = new WeakMap();

export default function StateMachine<IClass, IProperties>() {
  function setState<P = IProperties>(instance: IClass, properties: P): void {
    const object: Record<string, any> = getState(instance);
    Object.entries(properties).forEach(([key, value]: [string, any]) => {
      object[key] = value;
    });
    _objects.set(instance as any, object);
  }

  function getState(instance: IClass) {
    return _objects.get(instance as any) || {};
  }

  return {
    getState,
    setState,
  };
}
