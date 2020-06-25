import { IHTMLOptionsCollection } from '../../base/interfaces/official';
import { IHTMLOptionsCollectionProperties } from '../../base/official-klasses/HTMLOptionsCollection';
export declare const getState: <C = IHTMLOptionsCollection, P = IHTMLOptionsCollectionProperties>(instance: C) => P, setState: <P = IHTMLOptionsCollectionProperties>(instance: IHTMLOptionsCollection, properties: P) => void;
declare const HTMLOptionsCollectionBaseClass: {
    new (): {
        namedItem(name: string): import("../../base/interfaces/super").ISuperElement;
        readonly length: Promise<number>;
        item(index: number): Promise<import("../../base/interfaces/super").ISuperElement | null>;
        [Symbol.iterator](): IterableIterator<import("../../base/interfaces/super").ISuperElement>;
    };
};
export default class HTMLOptionsCollection extends HTMLOptionsCollectionBaseClass implements IHTMLOptionsCollection {
    constructor();
}
export {};
