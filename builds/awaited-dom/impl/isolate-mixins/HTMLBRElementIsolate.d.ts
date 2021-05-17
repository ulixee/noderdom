import { IHTMLBRElementIsolate } from '../../base/interfaces/isolate';
import HTMLBRElementIsolateBase, { IHTMLBRElementIsolateProperties } from '../../base/isolate-mixins/HTMLBRElementIsolate';
export declare const getState: (instance: IHTMLBRElementIsolate) => IHTMLBRElementIsolateProperties, setState: (instance: IHTMLBRElementIsolate, properties: Partial<IHTMLBRElementIsolateProperties>) => void;
export default class HTMLBRElementIsolate extends HTMLBRElementIsolateBase implements IHTMLBRElementIsolate {
}
