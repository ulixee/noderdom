import { IHTMLOptionElementIsolate } from '../../base/interfaces/isolate';
import { IHTMLFormElement } from '../../base/interfaces/official';
import HTMLOptionElementIsolateBase, { IHTMLOptionElementIsolateProperties } from '../../base/isolate-mixins/HTMLOptionElementIsolate';
export declare const getState: <C = IHTMLOptionElementIsolate, P = IHTMLOptionElementIsolateProperties>(instance: C) => P, setState: <P = IHTMLOptionElementIsolateProperties>(instance: IHTMLOptionElementIsolate, properties: P) => void;
export default class HTMLOptionElementIsolate extends HTMLOptionElementIsolateBase implements IHTMLOptionElementIsolate {
    get form(): IHTMLFormElement;
}
