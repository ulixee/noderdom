import { IHTMLDListElementIsolate } from '../../base/interfaces/isolate';
import HTMLDListElementIsolateBase, { IHTMLDListElementIsolateProperties } from '../../base/isolate-mixins/HTMLDListElementIsolate';
export declare const getState: (instance: IHTMLDListElementIsolate) => IHTMLDListElementIsolateProperties, setState: (instance: IHTMLDListElementIsolate, properties: Partial<IHTMLDListElementIsolateProperties>) => void;
export default class HTMLDListElementIsolate extends HTMLDListElementIsolateBase implements IHTMLDListElementIsolate {
}
