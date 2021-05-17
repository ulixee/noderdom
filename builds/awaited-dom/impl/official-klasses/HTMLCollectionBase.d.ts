import { IHTMLCollectionBase } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import { IHTMLCollectionBaseProperties } from '../../base/official-klasses/HTMLCollectionBase';
export declare const getState: (instance: IHTMLCollectionBase) => IHTMLCollectionBaseProperties, setState: (instance: IHTMLCollectionBase, properties: Partial<IHTMLCollectionBaseProperties>) => void;
declare const HTMLCollectionBaseBaseClass: {
    new (): {
        [index: number]: ISuperElement;
        readonly length: Promise<number>;
        item(index: number): ISuperElement;
        then<TResult1 = IHTMLCollectionBase, TResult2 = never>(onfulfilled?: ((value: IHTMLCollectionBase) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<ISuperElement, any, undefined>;
    };
};
export default class HTMLCollectionBase extends HTMLCollectionBaseBaseClass implements IHTMLCollectionBase {
    item(index: number): ISuperElement;
}
export {};
