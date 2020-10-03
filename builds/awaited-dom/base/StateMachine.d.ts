export default function StateMachine<IClass extends object, IProperties>(): {
    recordProxy: (proxy: IClass, instance: IClass) => void;
    getState: (instance: IClass) => IProperties;
    setState: (instance: IClass, properties: Partial<IProperties>) => void;
};
