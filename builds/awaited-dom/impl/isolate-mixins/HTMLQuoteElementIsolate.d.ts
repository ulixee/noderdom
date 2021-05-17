import { IHTMLQuoteElementIsolate } from '../../base/interfaces/isolate';
import HTMLQuoteElementIsolateBase, { IHTMLQuoteElementIsolateProperties } from '../../base/isolate-mixins/HTMLQuoteElementIsolate';
export declare const getState: (instance: IHTMLQuoteElementIsolate) => IHTMLQuoteElementIsolateProperties, setState: (instance: IHTMLQuoteElementIsolate, properties: Partial<IHTMLQuoteElementIsolateProperties>) => void;
export default class HTMLQuoteElementIsolate extends HTMLQuoteElementIsolateBase implements IHTMLQuoteElementIsolate {
}
