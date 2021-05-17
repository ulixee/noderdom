import { IHTMLHtmlElementIsolate } from '../../base/interfaces/isolate';
import HTMLHtmlElementIsolateBase, { IHTMLHtmlElementIsolateProperties } from '../../base/isolate-mixins/HTMLHtmlElementIsolate';
export declare const getState: (instance: IHTMLHtmlElementIsolate) => IHTMLHtmlElementIsolateProperties, setState: (instance: IHTMLHtmlElementIsolate, properties: Partial<IHTMLHtmlElementIsolateProperties>) => void;
export default class HTMLHtmlElementIsolate extends HTMLHtmlElementIsolateBase implements IHTMLHtmlElementIsolate {
}
