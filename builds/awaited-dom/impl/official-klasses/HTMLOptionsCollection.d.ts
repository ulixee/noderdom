import { IHTMLOptionsCollection } from '../../base/interfaces/official';
import { IHTMLOptionsCollectionProperties } from '../../base/official-klasses/HTMLOptionsCollection';
export declare const getState: (instance: IHTMLOptionsCollection) => IHTMLOptionsCollectionProperties, setState: (instance: IHTMLOptionsCollection, properties: Partial<IHTMLOptionsCollectionProperties>) => void, recordProxy: (proxy: IHTMLOptionsCollection, instance: IHTMLOptionsCollection) => void;
declare const HTMLOptionsCollectionBaseClass: {
    new (): {
        [index: number]: import("../../base/interfaces/super").ISuperElement;
        namedItem(name: string): import("../../base/interfaces/super").ISuperElement;
        readonly length: Promise<number>;
        item(index: number): import("../../base/interfaces/super").ISuperElement;
        [Symbol.iterator](): IterableIterator<import("../../base/interfaces/super").ISuperElement>;
    };
};
export default class HTMLOptionsCollection extends HTMLOptionsCollectionBaseClass implements IHTMLOptionsCollection {
    constructor();
}
export {};
