import { IHTMLAnchorElementIsolate } from '../../base/interfaces/isolate';
import { IDOMTokenList } from '../../base/interfaces/official';
import HTMLAnchorElementIsolateBase, { IHTMLAnchorElementIsolateProperties } from '../../base/isolate-mixins/HTMLAnchorElementIsolate';
export declare const getState: (instance: IHTMLAnchorElementIsolate) => IHTMLAnchorElementIsolateProperties, setState: (instance: IHTMLAnchorElementIsolate, properties: Partial<IHTMLAnchorElementIsolateProperties>) => void;
export default class HTMLAnchorElementIsolate extends HTMLAnchorElementIsolateBase implements IHTMLAnchorElementIsolate {
    get relList(): IDOMTokenList;
}
