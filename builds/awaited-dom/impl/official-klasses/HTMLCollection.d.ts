import { IHTMLCollection } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import { IHTMLCollectionProperties } from '../../base/official-klasses/HTMLCollection';
export declare const getState: <C = IHTMLCollection, P = IHTMLCollectionProperties>(instance: C) => P, setState: <P = IHTMLCollectionProperties>(instance: IHTMLCollection, properties: P) => void;
declare const HTMLCollectionBaseClass: {
    new (): {
        namedItem(name: string): ISuperElement;
        readonly length: Promise<number>;
        item(index: number): Promise<ISuperElement | null>;
        [Symbol.iterator](): IterableIterator<ISuperElement>;
    };
};
export default class HTMLCollection extends HTMLCollectionBaseClass implements IHTMLCollection {
    constructor();
    namedItem(name: string): ISuperElement;
}
export {};
