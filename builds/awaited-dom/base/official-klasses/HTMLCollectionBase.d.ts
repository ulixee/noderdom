import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import NodeAttacher from '../NodeAttacher';
import { IHTMLCollectionBase } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';
export declare const getState: <C = IHTMLCollectionBase, P = IHTMLCollectionBaseProperties>(instance: C) => P, setState: <P = IHTMLCollectionBaseProperties>(instance: IHTMLCollectionBase, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLCollectionBase>;
export declare const nodeAttacher: NodeAttacher<IHTMLCollectionBase>;
export declare const awaitedIterator: AwaitedIterator<IHTMLCollectionBase, ISuperElement>;
export declare function HTMLCollectionBaseGenerator(): {
    new (): {
        readonly length: Promise<number>;
        item(index: number): Promise<ISuperElement | null>;
        then<TResult1 = IHTMLCollectionBase, TResult2 = never>(onfulfilled?: ((value: IHTMLCollectionBase) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): IterableIterator<ISuperElement>;
    };
};
export interface IHTMLCollectionBaseProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly length?: Promise<number>;
}
export declare const HTMLCollectionBasePropertyKeys: string[];
export declare const HTMLCollectionBaseConstantKeys: never[];
