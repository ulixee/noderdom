import { IHTMLTitleElementIsolate } from '../../base/interfaces/isolate';
import HTMLTitleElementIsolateBase, { IHTMLTitleElementIsolateProperties } from '../../base/isolate-mixins/HTMLTitleElementIsolate';
export declare const getState: (instance: IHTMLTitleElementIsolate) => IHTMLTitleElementIsolateProperties, setState: (instance: IHTMLTitleElementIsolate, properties: Partial<IHTMLTitleElementIsolateProperties>) => void;
export default class HTMLTitleElementIsolate extends HTMLTitleElementIsolateBase implements IHTMLTitleElementIsolate {
}
