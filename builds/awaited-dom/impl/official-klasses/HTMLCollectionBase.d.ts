import { IHTMLCollectionBase } from '../../base/interfaces/official';
import { IHTMLCollectionBaseProperties } from '../../base/official-klasses/HTMLCollectionBase';
export declare const getState: <C = IHTMLCollectionBase, P = IHTMLCollectionBaseProperties>(instance: C) => P, setState: <P = IHTMLCollectionBaseProperties>(instance: IHTMLCollectionBase, properties: P) => void;
declare const HTMLCollectionBaseBaseClass: {
    new (): {
        readonly length: Promise<number>;
        item(index: number): Promise<import("../../base/interfaces/super").ISuperElement | null>;
        then<TResult1 = IHTMLCollectionBase, TResult2 = never>(onfulfilled?: ((value: IHTMLCollectionBase) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): IterableIterator<import("../../base/interfaces/super").ISuperElement>;
    };
};
export default class HTMLCollectionBase extends HTMLCollectionBaseBaseClass implements IHTMLCollectionBase {
}
export {};
