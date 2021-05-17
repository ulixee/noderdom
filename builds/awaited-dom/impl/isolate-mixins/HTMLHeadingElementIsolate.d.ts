import { IHTMLHeadingElementIsolate } from '../../base/interfaces/isolate';
import HTMLHeadingElementIsolateBase, { IHTMLHeadingElementIsolateProperties } from '../../base/isolate-mixins/HTMLHeadingElementIsolate';
export declare const getState: (instance: IHTMLHeadingElementIsolate) => IHTMLHeadingElementIsolateProperties, setState: (instance: IHTMLHeadingElementIsolate, properties: Partial<IHTMLHeadingElementIsolateProperties>) => void;
export default class HTMLHeadingElementIsolate extends HTMLHeadingElementIsolateBase implements IHTMLHeadingElementIsolate {
}
