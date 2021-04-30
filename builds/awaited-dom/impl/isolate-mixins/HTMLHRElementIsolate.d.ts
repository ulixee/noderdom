import { IHTMLHRElementIsolate } from '../../base/interfaces/isolate';
import HTMLHRElementIsolateBase, { IHTMLHRElementIsolateProperties } from '../../base/isolate-mixins/HTMLHRElementIsolate';
export declare const getState: (instance: IHTMLHRElementIsolate) => IHTMLHRElementIsolateProperties, setState: (instance: IHTMLHRElementIsolate, properties: Partial<IHTMLHRElementIsolateProperties>) => void, recordProxy: (proxy: IHTMLHRElementIsolate, instance: IHTMLHRElementIsolate) => void;
export default class HTMLHRElementIsolate extends HTMLHRElementIsolateBase implements IHTMLHRElementIsolate {
}
