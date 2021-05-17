import { IRemoteNodeProperties } from './NodeFactory';
import AwaitedHandler from './AwaitedHandler';
export default class AwaitedIterator<TClass, T> {
    static creators: any;
    private readonly getState;
    private readonly setState;
    private readonly nodeFactory;
    constructor(getState: AwaitedIterator<TClass, T>['getState'], setState: AwaitedIterator<TClass, T>['setState'], awaitedHandler: AwaitedHandler<TClass>);
    load(instance: TClass): Promise<T[]>;
    iterateNodePointers(instance: TClass): Iterator<T>;
}
export interface IAwaitedIteratorProperties extends IRemoteNodeProperties {
    createIterableName?: string;
}
