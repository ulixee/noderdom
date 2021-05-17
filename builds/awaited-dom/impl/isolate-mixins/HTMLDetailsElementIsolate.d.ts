import { IHTMLDetailsElementIsolate } from '../../base/interfaces/isolate';
import HTMLDetailsElementIsolateBase, { IHTMLDetailsElementIsolateProperties } from '../../base/isolate-mixins/HTMLDetailsElementIsolate';
export declare const getState: (instance: IHTMLDetailsElementIsolate) => IHTMLDetailsElementIsolateProperties, setState: (instance: IHTMLDetailsElementIsolate, properties: Partial<IHTMLDetailsElementIsolateProperties>) => void;
export default class HTMLDetailsElementIsolate extends HTMLDetailsElementIsolateBase implements IHTMLDetailsElementIsolate {
}
