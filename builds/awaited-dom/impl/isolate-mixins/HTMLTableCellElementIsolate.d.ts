import { IHTMLTableCellElementIsolate } from '../../base/interfaces/isolate';
import HTMLTableCellElementIsolateBase, { IHTMLTableCellElementIsolateProperties } from '../../base/isolate-mixins/HTMLTableCellElementIsolate';
export declare const getState: (instance: IHTMLTableCellElementIsolate) => IHTMLTableCellElementIsolateProperties, setState: (instance: IHTMLTableCellElementIsolate, properties: Partial<IHTMLTableCellElementIsolateProperties>) => void;
export default class HTMLTableCellElementIsolate extends HTMLTableCellElementIsolateBase implements IHTMLTableCellElementIsolate {
}
