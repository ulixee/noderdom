import { IHTMLButtonElementIsolate } from '../../base/interfaces/isolate';
import { IHTMLFormElement } from '../../base/interfaces/official';
import { ISuperNodeList } from '../../base/interfaces/super';
import HTMLButtonElementIsolateBase, { IHTMLButtonElementIsolateProperties } from '../../base/isolate-mixins/HTMLButtonElementIsolate';
export declare const getState: <C = IHTMLButtonElementIsolate, P = IHTMLButtonElementIsolateProperties>(instance: C) => P, setState: <P = IHTMLButtonElementIsolateProperties>(instance: IHTMLButtonElementIsolate, properties: P) => void;
export default class HTMLButtonElementIsolate extends HTMLButtonElementIsolateBase implements IHTMLButtonElementIsolate {
    get form(): IHTMLFormElement;
    get labels(): ISuperNodeList;
}
