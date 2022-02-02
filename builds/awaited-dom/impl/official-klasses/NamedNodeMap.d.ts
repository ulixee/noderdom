import { INamedNodeMap, IAttr } from '../../base/interfaces/official';
import { INamedNodeMapProperties } from '../../base/official-klasses/NamedNodeMap';
export declare const getState: (instance: INamedNodeMap) => INamedNodeMapProperties, setState: (instance: INamedNodeMap, properties: Partial<INamedNodeMapProperties>) => void;
declare const NamedNodeMapBaseClass: {
    new (): {
        [index: number]: IAttr;
        readonly length: Promise<number>;
        getNamedItem(qualifiedName: string): Promise<IAttr | null>;
        getNamedItemNS(namespace: string | null, localName: string): Promise<IAttr | null>;
        item(index: number): Promise<IAttr | null>;
        then<TResult1 = INamedNodeMap, TResult2 = never>(onfulfilled?: ((value: INamedNodeMap) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<IAttr, any, undefined>;
    };
};
export default class NamedNodeMap extends NamedNodeMapBaseClass implements INamedNodeMap {
}
export {};
