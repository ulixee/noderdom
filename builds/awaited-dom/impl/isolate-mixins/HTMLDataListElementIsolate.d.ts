import { IHTMLDataListElementIsolate } from '../../base/interfaces/isolate';
import HTMLDataListElementIsolateBase, { IHTMLDataListElementIsolateProperties } from '../../base/isolate-mixins/HTMLDataListElementIsolate';
export declare const getState: (instance: IHTMLDataListElementIsolate) => IHTMLDataListElementIsolateProperties, setState: (instance: IHTMLDataListElementIsolate, properties: Partial<IHTMLDataListElementIsolateProperties>) => void;
export default class HTMLDataListElementIsolate extends HTMLDataListElementIsolateBase implements IHTMLDataListElementIsolate {
}
