import { IHTMLOptionElementIsolate } from '../../base/interfaces/isolate';
import { IHTMLFormElement } from '../../base/interfaces/official';
import HTMLOptionElementIsolateBase, { IHTMLOptionElementIsolateProperties } from '../../base/isolate-mixins/HTMLOptionElementIsolate';
export declare const getState: (instance: IHTMLOptionElementIsolate) => IHTMLOptionElementIsolateProperties, setState: (instance: IHTMLOptionElementIsolate, properties: Partial<IHTMLOptionElementIsolateProperties>) => void, recordProxy: (proxy: IHTMLOptionElementIsolate, instance: IHTMLOptionElementIsolate) => void;
export default class HTMLOptionElementIsolate extends HTMLOptionElementIsolateBase implements IHTMLOptionElementIsolate {
    get form(): IHTMLFormElement;
}
