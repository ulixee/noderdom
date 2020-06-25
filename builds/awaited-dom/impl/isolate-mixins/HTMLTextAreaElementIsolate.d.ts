import { IHTMLTextAreaElementIsolate } from '../../base/interfaces/isolate';
import { IHTMLFormElement } from '../../base/interfaces/official';
import { ISuperNodeList } from '../../base/interfaces/super';
import HTMLTextAreaElementIsolateBase, { IHTMLTextAreaElementIsolateProperties } from '../../base/isolate-mixins/HTMLTextAreaElementIsolate';
export declare const getState: <C = IHTMLTextAreaElementIsolate, P = IHTMLTextAreaElementIsolateProperties>(instance: C) => P, setState: <P = IHTMLTextAreaElementIsolateProperties>(instance: IHTMLTextAreaElementIsolate, properties: P) => void;
export default class HTMLTextAreaElementIsolate extends HTMLTextAreaElementIsolateBase implements IHTMLTextAreaElementIsolate {
    get form(): IHTMLFormElement;
    get labels(): ISuperNodeList;
}
