import { IHTMLDocumentIsolate } from '../../base/interfaces/isolate';
import HTMLDocumentIsolateBase, { IHTMLDocumentIsolateProperties } from '../../base/isolate-mixins/HTMLDocumentIsolate';
export declare const getState: (instance: IHTMLDocumentIsolate) => IHTMLDocumentIsolateProperties, setState: (instance: IHTMLDocumentIsolate, properties: Partial<IHTMLDocumentIsolateProperties>) => void;
export default class HTMLDocumentIsolate extends HTMLDocumentIsolateBase implements IHTMLDocumentIsolate {
}
