export default function StateMachine<IClass, IProperties>(): {
    getState: <C = IClass, P = IProperties>(instance: C) => P;
    setState: <P_1 = IProperties>(instance: IClass, properties: P_1) => void;
};
