import { IHTMLElementIsolate } from '../../base/interfaces/isolate';
import { ISuperElement } from '../../base/interfaces/super';
import HTMLElementIsolateBase, { IHTMLElementIsolateProperties } from '../../base/isolate-mixins/HTMLElementIsolate';
export declare const getState: (instance: IHTMLElementIsolate) => IHTMLElementIsolateProperties, setState: (instance: IHTMLElementIsolate, properties: Partial<IHTMLElementIsolateProperties>) => void;
export default class HTMLElementIsolate extends HTMLElementIsolateBase implements IHTMLElementIsolate {
    get offsetParent(): ISuperElement;
}
