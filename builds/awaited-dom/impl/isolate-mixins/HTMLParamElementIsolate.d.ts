import { IHTMLParamElementIsolate } from '../../base/interfaces/isolate';
import HTMLParamElementIsolateBase, { IHTMLParamElementIsolateProperties } from '../../base/isolate-mixins/HTMLParamElementIsolate';
export declare const getState: (instance: IHTMLParamElementIsolate) => IHTMLParamElementIsolateProperties, setState: (instance: IHTMLParamElementIsolate, properties: Partial<IHTMLParamElementIsolateProperties>) => void;
export default class HTMLParamElementIsolate extends HTMLParamElementIsolateBase implements IHTMLParamElementIsolate {
}
