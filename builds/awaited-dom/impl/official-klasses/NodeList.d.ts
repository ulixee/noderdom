import { INodeList } from '../../base/interfaces/official';
import { ISuperNode } from '../../base/interfaces/super';
import { INodeListProperties } from '../../base/official-klasses/NodeList';
export declare const getState: (instance: INodeList) => INodeListProperties, setState: (instance: INodeList, properties: Partial<INodeListProperties>) => void;
declare const NodeListBaseClass: {
    new (): {
        [index: number]: ISuperNode;
        readonly length: Promise<number>;
        item(index: number): ISuperNode;
        then<TResult1 = INodeList, TResult2 = never>(onfulfilled?: ((value: INodeList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        forEach(callbackfn: (value: ISuperNode, key: number, parent: INodeList) => void, thisArg?: any): Promise<void>;
        entries(): Promise<IterableIterator<[number, ISuperNode]>>;
        keys(): Promise<IterableIterator<number>>;
        values(): Promise<IterableIterator<ISuperNode>>;
        [Symbol.iterator](): Iterator<ISuperNode, any, undefined>;
    };
};
export default class NodeList extends NodeListBaseClass implements INodeList {
    item(index: number): ISuperNode;
}
export {};
