import { IHTMLHeadElementIsolate } from '../../base/interfaces/isolate';
import HTMLHeadElementIsolateBase, { IHTMLHeadElementIsolateProperties } from '../../base/isolate-mixins/HTMLHeadElementIsolate';
export declare const getState: (instance: IHTMLHeadElementIsolate) => IHTMLHeadElementIsolateProperties, setState: (instance: IHTMLHeadElementIsolate, properties: Partial<IHTMLHeadElementIsolateProperties>) => void;
export default class HTMLHeadElementIsolate extends HTMLHeadElementIsolateBase implements IHTMLHeadElementIsolate {
}
