import { IHTMLSlotElementIsolate } from '../../base/interfaces/isolate';
import HTMLSlotElementIsolateBase, { IHTMLSlotElementIsolateProperties } from '../../base/isolate-mixins/HTMLSlotElementIsolate';
export declare const getState: (instance: IHTMLSlotElementIsolate) => IHTMLSlotElementIsolateProperties, setState: (instance: IHTMLSlotElementIsolate, properties: Partial<IHTMLSlotElementIsolateProperties>) => void;
export default class HTMLSlotElementIsolate extends HTMLSlotElementIsolateBase implements IHTMLSlotElementIsolate {
}
