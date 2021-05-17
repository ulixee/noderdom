import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { IHTMLCollectionBase } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';
export declare const getState: (instance: IHTMLCollectionBase) => IHTMLCollectionBaseProperties, setState: (instance: IHTMLCollectionBase, properties: Partial<IHTMLCollectionBaseProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLCollectionBase>;
export declare const nodeFactory: NodeFactory<IHTMLCollectionBase>;
export declare const awaitedIterator: AwaitedIterator<IHTMLCollectionBase, ISuperElement>;
export declare function HTMLCollectionBaseGenerator(): {
    new (): {
        [index: number]: ISuperElement;
        readonly length: Promise<number>;
        item(index: number): ISuperElement;
        then<TResult1 = IHTMLCollectionBase, TResult2 = never>(onfulfilled?: ((value: IHTMLCollectionBase) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<ISuperElement>;
    };
};
export interface IHTMLCollectionBaseProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    createIterableName: string;
    readonly length?: Promise<number>;
}
export declare const HTMLCollectionBasePropertyKeys: string[];
export declare const HTMLCollectionBaseConstantKeys: never[];
