import { IHTMLSelectElementIsolate } from '../../base/interfaces/isolate';
import { IHTMLFormElement, IHTMLOptionsCollection, IHTMLOptionElement } from '../../base/interfaces/official';
import { ISuperNodeList, ISuperHTMLCollection, ISuperElement } from '../../base/interfaces/super';
import HTMLSelectElementIsolateBase, { IHTMLSelectElementIsolateProperties } from '../../base/isolate-mixins/HTMLSelectElementIsolate';
export declare const getState: <C = IHTMLSelectElementIsolate, P = IHTMLSelectElementIsolateProperties>(instance: C) => P, setState: <P = IHTMLSelectElementIsolateProperties>(instance: IHTMLSelectElementIsolate, properties: P) => void;
export default class HTMLSelectElementIsolate extends HTMLSelectElementIsolateBase implements IHTMLSelectElementIsolate {
    get form(): IHTMLFormElement;
    get labels(): ISuperNodeList;
    get options(): IHTMLOptionsCollection;
    get selectedOptions(): ISuperHTMLCollection;
    item(index: number): ISuperElement;
    namedItem(name: string): IHTMLOptionElement;
}
