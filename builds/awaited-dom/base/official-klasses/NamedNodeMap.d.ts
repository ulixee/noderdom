import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { INamedNodeMap, IAttr } from '../interfaces/official';
export declare const getState: (instance: INamedNodeMap) => INamedNodeMapProperties, setState: (instance: INamedNodeMap, properties: Partial<INamedNodeMapProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<INamedNodeMap>;
export declare const nodeFactory: NodeFactory<INamedNodeMap>;
export declare const awaitedIterator: AwaitedIterator<INamedNodeMap, IAttr>;
export declare function NamedNodeMapGenerator(): {
    new (): {
        [index: number]: IAttr;
        readonly length: Promise<number>;
        getNamedItem(qualifiedName: string): Promise<IAttr | null>;
        getNamedItemNS(namespace: string | null, localName: string): Promise<IAttr | null>;
        item(index: number): Promise<IAttr | null>;
        then<TResult1 = INamedNodeMap, TResult2 = never>(onfulfilled?: ((value: INamedNodeMap) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<IAttr>;
    };
};
export interface INamedNodeMapProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    createIterableName: string;
    readonly length?: Promise<number>;
}
export declare const NamedNodeMapPropertyKeys: string[];
export declare const NamedNodeMapConstantKeys: never[];
