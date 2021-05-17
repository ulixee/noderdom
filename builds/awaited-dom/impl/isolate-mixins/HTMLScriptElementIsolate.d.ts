import { IHTMLScriptElementIsolate } from '../../base/interfaces/isolate';
import HTMLScriptElementIsolateBase, { IHTMLScriptElementIsolateProperties } from '../../base/isolate-mixins/HTMLScriptElementIsolate';
export declare const getState: (instance: IHTMLScriptElementIsolate) => IHTMLScriptElementIsolateProperties, setState: (instance: IHTMLScriptElementIsolate, properties: Partial<IHTMLScriptElementIsolateProperties>) => void;
export default class HTMLScriptElementIsolate extends HTMLScriptElementIsolateBase implements IHTMLScriptElementIsolate {
}
