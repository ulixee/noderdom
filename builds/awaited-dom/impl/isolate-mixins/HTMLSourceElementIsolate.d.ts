import { IHTMLSourceElementIsolate } from '../../base/interfaces/isolate';
import HTMLSourceElementIsolateBase, { IHTMLSourceElementIsolateProperties } from '../../base/isolate-mixins/HTMLSourceElementIsolate';
export declare const getState: (instance: IHTMLSourceElementIsolate) => IHTMLSourceElementIsolateProperties, setState: (instance: IHTMLSourceElementIsolate, properties: Partial<IHTMLSourceElementIsolateProperties>) => void, recordProxy: (proxy: IHTMLSourceElementIsolate, instance: IHTMLSourceElementIsolate) => void;
export default class HTMLSourceElementIsolate extends HTMLSourceElementIsolateBase implements IHTMLSourceElementIsolate {
}
