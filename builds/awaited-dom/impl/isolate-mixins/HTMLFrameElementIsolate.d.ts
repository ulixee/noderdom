import { IHTMLFrameElementIsolate } from '../../base/interfaces/isolate';
import { ISuperDocument } from '../../base/interfaces/super';
import HTMLFrameElementIsolateBase, { IHTMLFrameElementIsolateProperties } from '../../base/isolate-mixins/HTMLFrameElementIsolate';
export declare const getState: (instance: IHTMLFrameElementIsolate) => IHTMLFrameElementIsolateProperties, setState: (instance: IHTMLFrameElementIsolate, properties: Partial<IHTMLFrameElementIsolateProperties>) => void;
export default class HTMLFrameElementIsolate extends HTMLFrameElementIsolateBase implements IHTMLFrameElementIsolate {
    get contentDocument(): ISuperDocument;
}
