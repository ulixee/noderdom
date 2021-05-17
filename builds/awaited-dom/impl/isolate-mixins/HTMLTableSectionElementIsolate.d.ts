import { IHTMLTableSectionElementIsolate } from '../../base/interfaces/isolate';
import { ISuperHTMLCollection } from '../../base/interfaces/super';
import HTMLTableSectionElementIsolateBase, { IHTMLTableSectionElementIsolateProperties } from '../../base/isolate-mixins/HTMLTableSectionElementIsolate';
export declare const getState: (instance: IHTMLTableSectionElementIsolate) => IHTMLTableSectionElementIsolateProperties, setState: (instance: IHTMLTableSectionElementIsolate, properties: Partial<IHTMLTableSectionElementIsolateProperties>) => void;
export default class HTMLTableSectionElementIsolate extends HTMLTableSectionElementIsolateBase implements IHTMLTableSectionElementIsolate {
    get rows(): Promise<string> | ISuperHTMLCollection | Promise<number>;
}
