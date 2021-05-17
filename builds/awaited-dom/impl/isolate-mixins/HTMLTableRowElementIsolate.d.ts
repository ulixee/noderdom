import { IHTMLTableRowElementIsolate } from '../../base/interfaces/isolate';
import { ISuperHTMLCollection } from '../../base/interfaces/super';
import { IHTMLTableCellElement } from '../../base/interfaces/official';
import HTMLTableRowElementIsolateBase, { IHTMLTableRowElementIsolateProperties } from '../../base/isolate-mixins/HTMLTableRowElementIsolate';
export declare const getState: (instance: IHTMLTableRowElementIsolate) => IHTMLTableRowElementIsolateProperties, setState: (instance: IHTMLTableRowElementIsolate, properties: Partial<IHTMLTableRowElementIsolateProperties>) => void;
export default class HTMLTableRowElementIsolate extends HTMLTableRowElementIsolateBase implements IHTMLTableRowElementIsolate {
    get cells(): ISuperHTMLCollection;
    insertCell(index?: number): IHTMLTableCellElement;
}
