import { IHTMLOptGroupElementIsolate } from '../../base/interfaces/isolate';
import HTMLOptGroupElementIsolateBase, { IHTMLOptGroupElementIsolateProperties } from '../../base/isolate-mixins/HTMLOptGroupElementIsolate';
export declare const getState: <C = IHTMLOptGroupElementIsolate, P = IHTMLOptGroupElementIsolateProperties>(instance: C) => P, setState: <P = IHTMLOptGroupElementIsolateProperties>(instance: IHTMLOptGroupElementIsolate, properties: P) => void;
export default class HTMLOptGroupElementIsolate extends HTMLOptGroupElementIsolateBase implements IHTMLOptGroupElementIsolate {
}
