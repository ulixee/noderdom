import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import NodeAttacher from '../NodeAttacher';
import { INodeList } from '../interfaces/official';
import { ISuperNode } from '../interfaces/super';
export declare const getState: <C = INodeList, P = INodeListProperties>(instance: C) => P, setState: <P = INodeListProperties>(instance: INodeList, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<INodeList>;
export declare const nodeAttacher: NodeAttacher<INodeList>;
export declare const awaitedIterator: AwaitedIterator<INodeList, ISuperNode>;
export declare function NodeListGenerator(): {
    new (): {
        readonly length: Promise<number>;
        item(index: number): ISuperNode;
        then<TResult1 = INodeList, TResult2 = never>(onfulfilled?: ((value: INodeList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        forEach(callbackfn: (value: ISuperNode, key: number, parent: INodeList) => void, thisArg?: any): Promise<void>;
        entries(): Promise<IterableIterator<[number, ISuperNode]>>;
        keys(): Promise<IterableIterator<number>>;
        values(): Promise<IterableIterator<ISuperNode>>;
        [Symbol.iterator](): IterableIterator<ISuperNode>;
    };
};
export interface INodeListProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly length?: Promise<number>;
}
export declare const NodeListPropertyKeys: string[];
export declare const NodeListConstantKeys: never[];