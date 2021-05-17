import { IHTMLStyleElementIsolate } from '../../base/interfaces/isolate';
import HTMLStyleElementIsolateBase, { IHTMLStyleElementIsolateProperties } from '../../base/isolate-mixins/HTMLStyleElementIsolate';
export declare const getState: (instance: IHTMLStyleElementIsolate) => IHTMLStyleElementIsolateProperties, setState: (instance: IHTMLStyleElementIsolate, properties: Partial<IHTMLStyleElementIsolateProperties>) => void;
export default class HTMLStyleElementIsolate extends HTMLStyleElementIsolateBase implements IHTMLStyleElementIsolate {
}
