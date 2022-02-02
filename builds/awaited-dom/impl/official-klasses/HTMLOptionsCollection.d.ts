import { IHTMLOptionsCollection } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import { IHTMLOptionsCollectionProperties } from '../../base/official-klasses/HTMLOptionsCollection';
export declare const getState: (instance: IHTMLOptionsCollection) => IHTMLOptionsCollectionProperties, setState: (instance: IHTMLOptionsCollection, properties: Partial<IHTMLOptionsCollectionProperties>) => void;
declare const HTMLOptionsCollectionBaseClass: {
    new (): {
        [index: number]: ISuperElement;
        namedItem(name: string): ISuperElement;
        readonly length: Promise<number>;
        item(index: number): ISuperElement;
        [Symbol.iterator](): Iterator<ISuperElement, any, undefined>;
    };
};
export default class HTMLOptionsCollection extends HTMLOptionsCollectionBaseClass implements IHTMLOptionsCollection {
    constructor();
}
export {};
