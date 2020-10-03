const globalMap = new WeakMap();
const proxyMap = new WeakMap();

export default function StateMachine<IClass extends object, IProperties>() {
  function recordProxy(proxy: IClass, instance: IClass) {
    proxyMap.set(proxy as any, instance);
  }

  function setState(instance: IClass, properties: Partial<IProperties>): void {
    const object: Record<string, any> = getState(instance);
    Object.entries(properties).forEach(([key, value]: [string, any]) => {
      object[key] = value;
    });
    if (proxyMap.has(instance)) {
      instance = proxyMap.get(instance);
    }
    globalMap.set(instance, object);
  }

  function getState(instance: IClass): IProperties {
    if (proxyMap.has(instance)) {
      instance = proxyMap.get(instance);
    }
    return globalMap.get(instance) || {};
  }

  return { recordProxy, getState, setState };
}
