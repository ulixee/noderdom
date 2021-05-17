import { IHTMLFrameSetElementIsolate } from '../../base/interfaces/isolate';
import HTMLFrameSetElementIsolateBase, { IHTMLFrameSetElementIsolateProperties } from '../../base/isolate-mixins/HTMLFrameSetElementIsolate';
export declare const getState: (instance: IHTMLFrameSetElementIsolate) => IHTMLFrameSetElementIsolateProperties, setState: (instance: IHTMLFrameSetElementIsolate, properties: Partial<IHTMLFrameSetElementIsolateProperties>) => void;
export default class HTMLFrameSetElementIsolate extends HTMLFrameSetElementIsolateBase implements IHTMLFrameSetElementIsolate {
}
