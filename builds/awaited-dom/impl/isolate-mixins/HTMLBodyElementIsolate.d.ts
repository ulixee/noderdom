import { IHTMLBodyElementIsolate } from '../../base/interfaces/isolate';
import HTMLBodyElementIsolateBase, { IHTMLBodyElementIsolateProperties } from '../../base/isolate-mixins/HTMLBodyElementIsolate';
export declare const getState: (instance: IHTMLBodyElementIsolate) => IHTMLBodyElementIsolateProperties, setState: (instance: IHTMLBodyElementIsolate, properties: Partial<IHTMLBodyElementIsolateProperties>) => void;
export default class HTMLBodyElementIsolate extends HTMLBodyElementIsolateBase implements IHTMLBodyElementIsolate {
}
