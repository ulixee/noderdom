import { IHTMLDataElementIsolate } from '../../base/interfaces/isolate';
import HTMLDataElementIsolateBase, { IHTMLDataElementIsolateProperties } from '../../base/isolate-mixins/HTMLDataElementIsolate';
export declare const getState: (instance: IHTMLDataElementIsolate) => IHTMLDataElementIsolateProperties, setState: (instance: IHTMLDataElementIsolate, properties: Partial<IHTMLDataElementIsolateProperties>) => void;
export default class HTMLDataElementIsolate extends HTMLDataElementIsolateBase implements IHTMLDataElementIsolate {
}
