import { IHTMLSpanElementIsolate } from '../../base/interfaces/isolate';
import HTMLSpanElementIsolateBase, { IHTMLSpanElementIsolateProperties } from '../../base/isolate-mixins/HTMLSpanElementIsolate';
export declare const getState: (instance: IHTMLSpanElementIsolate) => IHTMLSpanElementIsolateProperties, setState: (instance: IHTMLSpanElementIsolate, properties: Partial<IHTMLSpanElementIsolateProperties>) => void;
export default class HTMLSpanElementIsolate extends HTMLSpanElementIsolateBase implements IHTMLSpanElementIsolate {
}
