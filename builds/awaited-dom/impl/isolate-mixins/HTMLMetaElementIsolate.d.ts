import { IHTMLMetaElementIsolate } from '../../base/interfaces/isolate';
import HTMLMetaElementIsolateBase, { IHTMLMetaElementIsolateProperties } from '../../base/isolate-mixins/HTMLMetaElementIsolate';
export declare const getState: (instance: IHTMLMetaElementIsolate) => IHTMLMetaElementIsolateProperties, setState: (instance: IHTMLMetaElementIsolate, properties: Partial<IHTMLMetaElementIsolateProperties>) => void;
export default class HTMLMetaElementIsolate extends HTMLMetaElementIsolateBase implements IHTMLMetaElementIsolate {
}
