import { IHTMLFontElementIsolate } from '../../base/interfaces/isolate';
import HTMLFontElementIsolateBase, { IHTMLFontElementIsolateProperties } from '../../base/isolate-mixins/HTMLFontElementIsolate';
export declare const getState: (instance: IHTMLFontElementIsolate) => IHTMLFontElementIsolateProperties, setState: (instance: IHTMLFontElementIsolate, properties: Partial<IHTMLFontElementIsolateProperties>) => void;
export default class HTMLFontElementIsolate extends HTMLFontElementIsolateBase implements IHTMLFontElementIsolate {
}
