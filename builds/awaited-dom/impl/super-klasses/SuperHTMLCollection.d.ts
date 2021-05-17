import { ISuperHTMLCollection, ISuperElement } from '../../base/interfaces/super';
import { ISuperHTMLCollectionProperties } from '../../base/super-klasses/SuperHTMLCollection';
export declare const getState: (instance: ISuperHTMLCollection) => ISuperHTMLCollectionProperties, setState: (instance: ISuperHTMLCollection, properties: Partial<ISuperHTMLCollectionProperties>) => void;
declare const SuperHTMLCollectionBaseClass: {
    new (): {
        [index: number]: ISuperElement;
        namedItem(name: string): ISuperElement;
        then<TResult1 = ISuperHTMLCollection, TResult2 = never>(onfulfilled?: ((value: ISuperHTMLCollection) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<ISuperElement, any, undefined>;
        readonly length: Promise<number>;
        item(index: number): ISuperElement;
    };
};
export default class SuperHTMLCollection extends SuperHTMLCollectionBaseClass implements ISuperHTMLCollection {
    constructor();
    namedItem(name: string): ISuperElement;
}
export {};
