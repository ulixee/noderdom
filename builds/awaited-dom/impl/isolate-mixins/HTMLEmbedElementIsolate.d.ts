import { IHTMLEmbedElementIsolate } from '../../base/interfaces/isolate';
import HTMLEmbedElementIsolateBase, { IHTMLEmbedElementIsolateProperties } from '../../base/isolate-mixins/HTMLEmbedElementIsolate';
export declare const getState: (instance: IHTMLEmbedElementIsolate) => IHTMLEmbedElementIsolateProperties, setState: (instance: IHTMLEmbedElementIsolate, properties: Partial<IHTMLEmbedElementIsolateProperties>) => void;
export default class HTMLEmbedElementIsolate extends HTMLEmbedElementIsolateBase implements IHTMLEmbedElementIsolate {
}
