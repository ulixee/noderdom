const globalMap = new WeakMap();

export default function StateMachine<IClass, IProperties>() {
  function setState<P = IProperties>(instance: IClass, properties: P): void {
    const object: Record<string, any> = getState(instance);
    Object.entries(properties).forEach(([key, value]: [string, any]) => {
      object[key] = value;
    });
    globalMap.set(instance as any, object);
  }

  function getState<C = IClass, P = IProperties>(instance: C): P {
    return globalMap.get(instance as any) || {};
  }

  return {
    getState,
    setState,
  };
}
