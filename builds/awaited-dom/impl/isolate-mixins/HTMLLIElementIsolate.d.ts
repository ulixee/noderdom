import { IHTMLLIElementIsolate } from '../../base/interfaces/isolate';
import HTMLLIElementIsolateBase, { IHTMLLIElementIsolateProperties } from '../../base/isolate-mixins/HTMLLIElementIsolate';
export declare const getState: (instance: IHTMLLIElementIsolate) => IHTMLLIElementIsolateProperties, setState: (instance: IHTMLLIElementIsolate, properties: Partial<IHTMLLIElementIsolateProperties>) => void;
export default class HTMLLIElementIsolate extends HTMLLIElementIsolateBase implements IHTMLLIElementIsolate {
}
