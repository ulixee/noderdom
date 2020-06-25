import { IHTMLFormElementIsolate } from '../../base/interfaces/isolate';
import HTMLFormElementIsolateBase, { IHTMLFormElementIsolateProperties } from '../../base/isolate-mixins/HTMLFormElementIsolate';
export declare const getState: <C = IHTMLFormElementIsolate, P = IHTMLFormElementIsolateProperties>(instance: C) => P, setState: <P = IHTMLFormElementIsolateProperties>(instance: IHTMLFormElementIsolate, properties: P) => void;
export default class HTMLFormElementIsolate extends HTMLFormElementIsolateBase implements IHTMLFormElementIsolate {
}
