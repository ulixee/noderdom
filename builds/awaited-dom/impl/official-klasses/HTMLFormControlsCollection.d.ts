import { IHTMLFormControlsCollection, IRadioNodeList } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import { IHTMLFormControlsCollectionProperties } from '../../base/official-klasses/HTMLFormControlsCollection';
export declare const getState: (instance: IHTMLFormControlsCollection) => IHTMLFormControlsCollectionProperties, setState: (instance: IHTMLFormControlsCollection, properties: Partial<IHTMLFormControlsCollectionProperties>) => void;
declare const HTMLFormControlsCollectionBaseClass: {
    new (): {
        [index: number]: ISuperElement;
        namedItem(name: string): Promise<ISuperElement | IRadioNodeList | null>;
        readonly length: Promise<number>;
        item(index: number): ISuperElement;
        [Symbol.iterator](): Iterator<ISuperElement, any, undefined>;
    };
};
export default class HTMLFormControlsCollection extends HTMLFormControlsCollectionBaseClass implements IHTMLFormControlsCollection {
    constructor();
}
export {};
