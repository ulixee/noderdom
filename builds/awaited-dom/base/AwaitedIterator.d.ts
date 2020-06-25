import { INodeAttacherProperties } from './NodeAttacher';
import AwaitedHandler from './AwaitedHandler';
export default class AwaitedIterator<TClass, T> {
    static creators: any;
    private readonly getState;
    private readonly nodeAttacher;
    constructor(getState: (instance: TClass) => IAwaitedIteratorProperties, setState: (instance: TClass, state: Partial<IAwaitedIteratorProperties>) => void, awaitedHandler: AwaitedHandler<TClass>);
    load(instance: TClass): Promise<T[]>;
    iterateAttached(instance: TClass): IterableIterator<T>;
    private iterateAttachedItems;
}
export interface IAwaitedIteratorProperties extends INodeAttacherProperties {
    createIterableName: string;
}
