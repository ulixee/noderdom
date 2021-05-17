import { IHTMLUListElementIsolate } from '../../base/interfaces/isolate';
import HTMLUListElementIsolateBase, { IHTMLUListElementIsolateProperties } from '../../base/isolate-mixins/HTMLUListElementIsolate';
export declare const getState: (instance: IHTMLUListElementIsolate) => IHTMLUListElementIsolateProperties, setState: (instance: IHTMLUListElementIsolate, properties: Partial<IHTMLUListElementIsolateProperties>) => void;
export default class HTMLUListElementIsolate extends HTMLUListElementIsolateBase implements IHTMLUListElementIsolate {
}
