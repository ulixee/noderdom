import { IHTMLCollection } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import { IHTMLCollectionProperties } from '../../base/official-klasses/HTMLCollection';
export declare const getState: (instance: IHTMLCollection) => IHTMLCollectionProperties, setState: (instance: IHTMLCollection, properties: Partial<IHTMLCollectionProperties>) => void;
declare const HTMLCollectionBaseClass: {
    new (): {
        [index: number]: ISuperElement;
        namedItem(name: string): ISuperElement;
        readonly length: Promise<number>;
        item(index: number): ISuperElement;
        [Symbol.iterator](): Iterator<ISuperElement, any, undefined>;
    };
};
export default class HTMLCollection extends HTMLCollectionBaseClass implements IHTMLCollection {
    constructor();
    namedItem(name: string): ISuperElement;
}
export {};
