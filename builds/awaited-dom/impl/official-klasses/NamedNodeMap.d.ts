import { INamedNodeMap } from '../../base/interfaces/official';
import { INamedNodeMapProperties } from '../../base/official-klasses/NamedNodeMap';
export declare const getState: <C = INamedNodeMap, P = INamedNodeMapProperties>(instance: C) => P, setState: <P = INamedNodeMapProperties>(instance: INamedNodeMap, properties: P) => void;
declare const NamedNodeMapBaseClass: {
    new (): {
        readonly length: Promise<number>;
        getNamedItem(qualifiedName: string): Promise<import("../../base/interfaces/official").IAttr | null>;
        getNamedItemNS(namespace: string | null, localName: string): Promise<import("../../base/interfaces/official").IAttr | null>;
        item(index: number): Promise<import("../../base/interfaces/official").IAttr | null>;
        then<TResult1 = INamedNodeMap, TResult2 = never>(onfulfilled?: ((value: INamedNodeMap) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): IterableIterator<import("../../base/interfaces/official").IAttr>;
    };
};
export default class NamedNodeMap extends NamedNodeMapBaseClass implements INamedNodeMap {
}
export {};
