import { IHTMLTableCaptionElementIsolate } from '../../base/interfaces/isolate';
import HTMLTableCaptionElementIsolateBase, { IHTMLTableCaptionElementIsolateProperties } from '../../base/isolate-mixins/HTMLTableCaptionElementIsolate';
export declare const getState: (instance: IHTMLTableCaptionElementIsolate) => IHTMLTableCaptionElementIsolateProperties, setState: (instance: IHTMLTableCaptionElementIsolate, properties: Partial<IHTMLTableCaptionElementIsolateProperties>) => void;
export default class HTMLTableCaptionElementIsolate extends HTMLTableCaptionElementIsolateBase implements IHTMLTableCaptionElementIsolate {
}
