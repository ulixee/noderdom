import { IHTMLDialogElementIsolate } from '../../base/interfaces/isolate';
import HTMLDialogElementIsolateBase, { IHTMLDialogElementIsolateProperties } from '../../base/isolate-mixins/HTMLDialogElementIsolate';
export declare const getState: (instance: IHTMLDialogElementIsolate) => IHTMLDialogElementIsolateProperties, setState: (instance: IHTMLDialogElementIsolate, properties: Partial<IHTMLDialogElementIsolateProperties>) => void;
export default class HTMLDialogElementIsolate extends HTMLDialogElementIsolateBase implements IHTMLDialogElementIsolate {
}
