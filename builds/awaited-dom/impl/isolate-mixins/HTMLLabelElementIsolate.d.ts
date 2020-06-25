import { IHTMLLabelElementIsolate } from '../../base/interfaces/isolate';
import { ISuperHTMLElement } from '../../base/interfaces/super';
import { IHTMLFormElement } from '../../base/interfaces/official';
import HTMLLabelElementIsolateBase, { IHTMLLabelElementIsolateProperties } from '../../base/isolate-mixins/HTMLLabelElementIsolate';
export declare const getState: <C = IHTMLLabelElementIsolate, P = IHTMLLabelElementIsolateProperties>(instance: C) => P, setState: <P = IHTMLLabelElementIsolateProperties>(instance: IHTMLLabelElementIsolate, properties: P) => void;
export default class HTMLLabelElementIsolate extends HTMLLabelElementIsolateBase implements IHTMLLabelElementIsolate {
    get control(): ISuperHTMLElement;
    get form(): IHTMLFormElement;
}
