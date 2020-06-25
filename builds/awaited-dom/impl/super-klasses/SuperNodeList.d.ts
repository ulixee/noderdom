import { ISuperNodeList, ISuperNode } from '../../base/interfaces/super';
import { ISuperNodeListProperties } from '../../base/super-klasses/SuperNodeList';
export declare const getState: <C = ISuperNodeList, P = ISuperNodeListProperties>(instance: C) => P, setState: <P = ISuperNodeListProperties>(instance: ISuperNodeList, properties: P) => void;
declare const SuperNodeListBaseClass: {
    new (): {
        readonly length: Promise<number>;
        item(index: number): ISuperNode;
        then<TResult1 = ISuperNodeList, TResult2 = never>(onfulfilled?: ((value: ISuperNodeList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        forEach(callbackfn: (value: ISuperNode, key: number, parent: ISuperNodeList) => void, thisArg?: any): Promise<void>;
        entries(): Promise<IterableIterator<[number, ISuperNode]>>;
        keys(): Promise<IterableIterator<number>>;
        values(): Promise<IterableIterator<ISuperNode>>;
        [Symbol.iterator](): IterableIterator<ISuperNode>;
        readonly value: Promise<string>;
    };
};
export default class SuperNodeList extends SuperNodeListBaseClass implements ISuperNodeList {
    constructor();
    item(index: number): ISuperNode;
}
export {};
