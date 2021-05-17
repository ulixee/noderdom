let stateStorageSymbol = Symbol.for('noderdom/StateMachine');

export function setStorageSymbol(storageSymbol: symbol): void {
  stateStorageSymbol = storageSymbol;
}

export default function StateMachine<IClass extends object, IProperties>() {
  function setState(instance: IClass, properties: Partial<IProperties>): void {
    const object: Record<string, any> = getState(instance);
    Object.assign(object, properties);

    (instance as any)[stateStorageSymbol] = object;
  }

  function getState(instance: IClass): IProperties {
    if (!instance) return {} as any;
    return (instance as any)[stateStorageSymbol] || {};
  }

  return { getState, setState };
}
