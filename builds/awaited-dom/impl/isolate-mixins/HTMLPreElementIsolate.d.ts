import { IHTMLPreElementIsolate } from '../../base/interfaces/isolate';
import HTMLPreElementIsolateBase, { IHTMLPreElementIsolateProperties } from '../../base/isolate-mixins/HTMLPreElementIsolate';
export declare const getState: (instance: IHTMLPreElementIsolate) => IHTMLPreElementIsolateProperties, setState: (instance: IHTMLPreElementIsolate, properties: Partial<IHTMLPreElementIsolateProperties>) => void;
export default class HTMLPreElementIsolate extends HTMLPreElementIsolateBase implements IHTMLPreElementIsolate {
}
