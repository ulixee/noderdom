export declare function setStorageSymbol(storageSymbol: symbol): void;
export default function StateMachine<IClass extends object, IProperties>(): {
    getState: (instance: IClass) => IProperties;
    setState: (instance: IClass, properties: Partial<IProperties>) => void;
};
