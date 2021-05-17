import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import { INodeListIsolate } from '../interfaces/isolate';
import { ISuperNode } from '../interfaces/super';
export declare const getState: (instance: INodeListIsolate) => INodeListIsolateProperties, setState: (instance: INodeListIsolate, properties: Partial<INodeListIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<INodeListIsolate>;
export declare const awaitedIterator: AwaitedIterator<INodeListIsolate, ISuperNode>;
export default class NodeListIsolate implements INodeListIsolate {
    get length(): Promise<number>;
    item(index: number): ISuperNode;
    forEach(callbackfn: (value: ISuperNode, key: number, parent: INodeListIsolate) => void, thisArg?: any): Promise<void>;
    entries(): Promise<IterableIterator<[number, ISuperNode]>>;
    keys(): Promise<IterableIterator<number>>;
    values(): Promise<IterableIterator<ISuperNode>>;
    [Symbol.iterator](): Iterator<ISuperNode>;
    [index: number]: ISuperNode;
}
export interface INodeListIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    createIterableName: string;
    readonly length?: Promise<number>;
}
export declare const NodeListIsolatePropertyKeys: string[];
export declare const NodeListIsolateConstantKeys: never[];
