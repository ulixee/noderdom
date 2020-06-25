import { IHTMLElementIsolate } from '../../base/interfaces/isolate';
import { ISuperElement } from '../../base/interfaces/super';
import HTMLElementIsolateBase, { IHTMLElementIsolateProperties } from '../../base/isolate-mixins/HTMLElementIsolate';
export declare const getState: <C = IHTMLElementIsolate, P = IHTMLElementIsolateProperties>(instance: C) => P, setState: <P = IHTMLElementIsolateProperties>(instance: IHTMLElementIsolate, properties: P) => void;
export default class HTMLElementIsolate extends HTMLElementIsolateBase implements IHTMLElementIsolate {
    get offsetParent(): ISuperElement;
}
