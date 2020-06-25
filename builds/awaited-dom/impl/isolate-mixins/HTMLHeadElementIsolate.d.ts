import { IHTMLHeadElementIsolate } from '../../base/interfaces/isolate';
import HTMLHeadElementIsolateBase, { IHTMLHeadElementIsolateProperties } from '../../base/isolate-mixins/HTMLHeadElementIsolate';
export declare const getState: <C = IHTMLHeadElementIsolate, P = IHTMLHeadElementIsolateProperties>(instance: C) => P, setState: <P = IHTMLHeadElementIsolateProperties>(instance: IHTMLHeadElementIsolate, properties: P) => void;
export default class HTMLHeadElementIsolate extends HTMLHeadElementIsolateBase implements IHTMLHeadElementIsolate {
}
