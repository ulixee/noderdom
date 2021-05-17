import { IHTMLTimeElementIsolate } from '../../base/interfaces/isolate';
import HTMLTimeElementIsolateBase, { IHTMLTimeElementIsolateProperties } from '../../base/isolate-mixins/HTMLTimeElementIsolate';
export declare const getState: (instance: IHTMLTimeElementIsolate) => IHTMLTimeElementIsolateProperties, setState: (instance: IHTMLTimeElementIsolate, properties: Partial<IHTMLTimeElementIsolateProperties>) => void;
export default class HTMLTimeElementIsolate extends HTMLTimeElementIsolateBase implements IHTMLTimeElementIsolate {
}
