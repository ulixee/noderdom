import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { INodeList } from '../interfaces/official';
import { ISuperNode } from '../interfaces/super';
export declare const getState: (instance: INodeList) => INodeListProperties, setState: (instance: INodeList, properties: Partial<INodeListProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<INodeList>;
export declare const nodeFactory: NodeFactory<INodeList>;
export declare const awaitedIterator: AwaitedIterator<INodeList, ISuperNode>;
export declare function NodeListGenerator(): {
    new (): {
        [index: number]: ISuperNode;
        readonly length: Promise<number>;
        item(index: number): ISuperNode;
        then<TResult1 = INodeList, TResult2 = never>(onfulfilled?: ((value: INodeList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        forEach(callbackfn: (value: ISuperNode, key: number, parent: INodeList) => void, thisArg?: any): Promise<void>;
        entries(): Promise<IterableIterator<[number, ISuperNode]>>;
        keys(): Promise<IterableIterator<number>>;
        values(): Promise<IterableIterator<ISuperNode>>;
        [Symbol.iterator](): Iterator<ISuperNode>;
    };
};
export interface INodeListProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    createIterableName: string;
    readonly length?: Promise<number>;
}
export declare const NodeListPropertyKeys: string[];
export declare const NodeListConstantKeys: never[];
