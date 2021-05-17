import { IHTMLParagraphElementIsolate } from '../../base/interfaces/isolate';
import HTMLParagraphElementIsolateBase, { IHTMLParagraphElementIsolateProperties } from '../../base/isolate-mixins/HTMLParagraphElementIsolate';
export declare const getState: (instance: IHTMLParagraphElementIsolate) => IHTMLParagraphElementIsolateProperties, setState: (instance: IHTMLParagraphElementIsolate, properties: Partial<IHTMLParagraphElementIsolateProperties>) => void;
export default class HTMLParagraphElementIsolate extends HTMLParagraphElementIsolateBase implements IHTMLParagraphElementIsolate {
}
