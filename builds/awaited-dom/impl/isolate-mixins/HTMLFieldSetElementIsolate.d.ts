import { IHTMLFieldSetElementIsolate } from '../../base/interfaces/isolate';
import { ISuperHTMLCollection } from '../../base/interfaces/super';
import { IHTMLFormElement } from '../../base/interfaces/official';
import HTMLFieldSetElementIsolateBase, { IHTMLFieldSetElementIsolateProperties } from '../../base/isolate-mixins/HTMLFieldSetElementIsolate';
export declare const getState: <C = IHTMLFieldSetElementIsolate, P = IHTMLFieldSetElementIsolateProperties>(instance: C) => P, setState: <P = IHTMLFieldSetElementIsolateProperties>(instance: IHTMLFieldSetElementIsolate, properties: P) => void;
export default class HTMLFieldSetElementIsolate extends HTMLFieldSetElementIsolateBase implements IHTMLFieldSetElementIsolate {
    get elements(): ISuperHTMLCollection;
    get form(): IHTMLFormElement;
}
