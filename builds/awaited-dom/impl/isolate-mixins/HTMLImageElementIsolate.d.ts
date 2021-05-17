import { IHTMLImageElementIsolate } from '../../base/interfaces/isolate';
import HTMLImageElementIsolateBase, { IHTMLImageElementIsolateProperties } from '../../base/isolate-mixins/HTMLImageElementIsolate';
export declare const getState: (instance: IHTMLImageElementIsolate) => IHTMLImageElementIsolateProperties, setState: (instance: IHTMLImageElementIsolate, properties: Partial<IHTMLImageElementIsolateProperties>) => void;
export default class HTMLImageElementIsolate extends HTMLImageElementIsolateBase implements IHTMLImageElementIsolate {
}
