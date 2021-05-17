import { IHTMLOptGroupElementIsolate } from '../../base/interfaces/isolate';
import HTMLOptGroupElementIsolateBase, { IHTMLOptGroupElementIsolateProperties } from '../../base/isolate-mixins/HTMLOptGroupElementIsolate';
export declare const getState: (instance: IHTMLOptGroupElementIsolate) => IHTMLOptGroupElementIsolateProperties, setState: (instance: IHTMLOptGroupElementIsolate, properties: Partial<IHTMLOptGroupElementIsolateProperties>) => void;
export default class HTMLOptGroupElementIsolate extends HTMLOptGroupElementIsolateBase implements IHTMLOptGroupElementIsolate {
}
