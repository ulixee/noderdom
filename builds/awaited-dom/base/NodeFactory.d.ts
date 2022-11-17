import AwaitedPath from './AwaitedPath';
import AwaitedHandler from './AwaitedHandler';
import { INodePointer } from '@ulixee/js-path';
export default class NodeFactory<TClass> {
    static instanceCreatorsByName: any;
    private readonly getState;
    private readonly setState;
    private readonly awaitedHandler;
    constructor(getState: (instance: TClass) => IRemoteNodeProperties, setState: (instance: TClass, state: Partial<IRemoteNodeProperties>) => void, awaitedHandler: AwaitedHandler<TClass>);
    createInstanceWithNodePointer(instance: TClass): Promise<TClass>;
    getNodePointer(instance: TClass): INodePointer | undefined;
}
export interface IRemoteNodeProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    nodePointer?: INodePointer;
}
