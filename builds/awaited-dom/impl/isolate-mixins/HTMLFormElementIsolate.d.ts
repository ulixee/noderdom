import { IHTMLFormElementIsolate } from '../../base/interfaces/isolate';
import HTMLFormElementIsolateBase, { IHTMLFormElementIsolateProperties } from '../../base/isolate-mixins/HTMLFormElementIsolate';
export declare const getState: (instance: IHTMLFormElementIsolate) => IHTMLFormElementIsolateProperties, setState: (instance: IHTMLFormElementIsolate, properties: Partial<IHTMLFormElementIsolateProperties>) => void;
export default class HTMLFormElementIsolate extends HTMLFormElementIsolateBase implements IHTMLFormElementIsolate {
}
