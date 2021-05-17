import { IHTMLLinkElementIsolate } from '../../base/interfaces/isolate';
import { IDOMTokenList } from '../../base/interfaces/official';
import HTMLLinkElementIsolateBase, { IHTMLLinkElementIsolateProperties } from '../../base/isolate-mixins/HTMLLinkElementIsolate';
export declare const getState: (instance: IHTMLLinkElementIsolate) => IHTMLLinkElementIsolateProperties, setState: (instance: IHTMLLinkElementIsolate, properties: Partial<IHTMLLinkElementIsolateProperties>) => void;
export default class HTMLLinkElementIsolate extends HTMLLinkElementIsolateBase implements IHTMLLinkElementIsolate {
    get relList(): IDOMTokenList;
    get sizes(): Promise<string> | IDOMTokenList;
}
