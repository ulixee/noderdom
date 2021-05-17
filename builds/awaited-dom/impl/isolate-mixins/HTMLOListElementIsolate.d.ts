import { IHTMLOListElementIsolate } from '../../base/interfaces/isolate';
import HTMLOListElementIsolateBase, { IHTMLOListElementIsolateProperties } from '../../base/isolate-mixins/HTMLOListElementIsolate';
export declare const getState: (instance: IHTMLOListElementIsolate) => IHTMLOListElementIsolateProperties, setState: (instance: IHTMLOListElementIsolate, properties: Partial<IHTMLOListElementIsolateProperties>) => void;
export default class HTMLOListElementIsolate extends HTMLOListElementIsolateBase implements IHTMLOListElementIsolate {
}
