import { IHTMLFormControlsCollection } from '../../base/interfaces/official';
import { IHTMLFormControlsCollectionProperties } from '../../base/official-klasses/HTMLFormControlsCollection';
export declare const getState: (instance: IHTMLFormControlsCollection) => IHTMLFormControlsCollectionProperties, setState: (instance: IHTMLFormControlsCollection, properties: Partial<IHTMLFormControlsCollectionProperties>) => void, recordProxy: (proxy: IHTMLFormControlsCollection, instance: IHTMLFormControlsCollection) => void;
declare const HTMLFormControlsCollectionBaseClass: {
    new (): {
        [index: number]: import("../../base/interfaces/super").ISuperElement;
        namedItem(name: string): Promise<import("../../base/interfaces/super").ISuperElement | import("../../base/interfaces/official").IRadioNodeList | null>;
        readonly length: Promise<number>;
        item(index: number): import("../../base/interfaces/super").ISuperElement;
        [Symbol.iterator](): IterableIterator<import("../../base/interfaces/super").ISuperElement>;
    };
};
export default class HTMLFormControlsCollection extends HTMLFormControlsCollectionBaseClass implements IHTMLFormControlsCollection {
    constructor();
}
export {};
