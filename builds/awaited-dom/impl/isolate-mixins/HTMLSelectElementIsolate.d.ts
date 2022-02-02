import { IHTMLSelectElementIsolate } from '../../base/interfaces/isolate';
import { ISuperElement, ISuperNodeList, ISuperHTMLCollection } from '../../base/interfaces/super';
import { IHTMLFormElement, IHTMLOptionsCollection, IHTMLOptionElement } from '../../base/interfaces/official';
import HTMLSelectElementIsolateBase, { IHTMLSelectElementIsolateProperties } from '../../base/isolate-mixins/HTMLSelectElementIsolate';
export declare const getState: (instance: IHTMLSelectElementIsolate) => IHTMLSelectElementIsolateProperties, setState: (instance: IHTMLSelectElementIsolate, properties: Partial<IHTMLSelectElementIsolateProperties>) => void;
export default class HTMLSelectElementIsolate extends HTMLSelectElementIsolateBase implements IHTMLSelectElementIsolate {
    get form(): IHTMLFormElement;
    get labels(): ISuperNodeList;
    get options(): Promise<ISuperHTMLCollection> | IHTMLOptionsCollection;
    get selectedOptions(): ISuperHTMLCollection;
    item(index: number): ISuperElement;
    namedItem(name: string): IHTMLOptionElement;
}
