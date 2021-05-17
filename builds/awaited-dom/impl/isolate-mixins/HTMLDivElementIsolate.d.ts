import { IHTMLDivElementIsolate } from '../../base/interfaces/isolate';
import HTMLDivElementIsolateBase, { IHTMLDivElementIsolateProperties } from '../../base/isolate-mixins/HTMLDivElementIsolate';
export declare const getState: (instance: IHTMLDivElementIsolate) => IHTMLDivElementIsolateProperties, setState: (instance: IHTMLDivElementIsolate, properties: Partial<IHTMLDivElementIsolateProperties>) => void;
export default class HTMLDivElementIsolate extends HTMLDivElementIsolateBase implements IHTMLDivElementIsolate {
}
