import AwaitedPath from './AwaitedPath';
import AwaitedHandler from './AwaitedHandler';
import IAttachedState from './IAttachedState';
export default class NodeAttacher<TClass> {
    static creators: any;
    private readonly getState;
    private readonly setState;
    private readonly awaitedHandler;
    constructor(getState: (instance: TClass) => INodeAttacherProperties, setState: (instance: TClass, state: Partial<INodeAttacherProperties>) => void, awaitedHandler: AwaitedHandler<TClass>);
    attach<K extends keyof TClass & string>(instance: TClass, properties?: K[]): Promise<TClass>;
    getAttachedState(instance: TClass): IAttachedState | undefined;
}
export interface INodeAttacherProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    attachedState?: IAttachedState;
}
