import { IHTMLAreaElementIsolate } from '../../base/interfaces/isolate';
import { IDOMTokenList } from '../../base/interfaces/official';
import HTMLAreaElementIsolateBase, { IHTMLAreaElementIsolateProperties } from '../../base/isolate-mixins/HTMLAreaElementIsolate';
export declare const getState: (instance: IHTMLAreaElementIsolate) => IHTMLAreaElementIsolateProperties, setState: (instance: IHTMLAreaElementIsolate, properties: Partial<IHTMLAreaElementIsolateProperties>) => void;
export default class HTMLAreaElementIsolate extends HTMLAreaElementIsolateBase implements IHTMLAreaElementIsolate {
    get relList(): IDOMTokenList;
}
