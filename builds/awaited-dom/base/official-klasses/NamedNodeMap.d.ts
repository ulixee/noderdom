import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import NodeAttacher from '../NodeAttacher';
import { INamedNodeMap, IAttr } from '../interfaces/official';
export declare const getState: <C = INamedNodeMap, P = INamedNodeMapProperties>(instance: C) => P, setState: <P = INamedNodeMapProperties>(instance: INamedNodeMap, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<INamedNodeMap>;
export declare const nodeAttacher: NodeAttacher<INamedNodeMap>;
export declare const awaitedIterator: AwaitedIterator<INamedNodeMap, IAttr>;
export declare function NamedNodeMapGenerator(): {
    new (): {
        readonly length: Promise<number>;
        getNamedItem(qualifiedName: string): Promise<IAttr | null>;
        getNamedItemNS(namespace: string | null, localName: string): Promise<IAttr | null>;
        item(index: number): Promise<IAttr | null>;
        then<TResult1 = INamedNodeMap, TResult2 = never>(onfulfilled?: ((value: INamedNodeMap) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): IterableIterator<IAttr>;
    };
};
export interface INamedNodeMapProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly length?: Promise<number>;
}
export declare const NamedNodeMapPropertyKeys: string[];
export declare const NamedNodeMapConstantKeys: never[];
