import { IHTMLTableColElementIsolate } from '../../base/interfaces/isolate';
import HTMLTableColElementIsolateBase, { IHTMLTableColElementIsolateProperties } from '../../base/isolate-mixins/HTMLTableColElementIsolate';
export declare const getState: (instance: IHTMLTableColElementIsolate) => IHTMLTableColElementIsolateProperties, setState: (instance: IHTMLTableColElementIsolate, properties: Partial<IHTMLTableColElementIsolateProperties>) => void;
export default class HTMLTableColElementIsolate extends HTMLTableColElementIsolateBase implements IHTMLTableColElementIsolate {
}
