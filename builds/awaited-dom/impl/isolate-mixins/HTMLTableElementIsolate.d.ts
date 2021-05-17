import { IHTMLTableElementIsolate } from '../../base/interfaces/isolate';
import { IHTMLTableCaptionElement, IHTMLTableSectionElement } from '../../base/interfaces/official';
import { ISuperHTMLCollection } from '../../base/interfaces/super';
import HTMLTableElementIsolateBase, { IHTMLTableElementIsolateProperties } from '../../base/isolate-mixins/HTMLTableElementIsolate';
export declare const getState: (instance: IHTMLTableElementIsolate) => IHTMLTableElementIsolateProperties, setState: (instance: IHTMLTableElementIsolate, properties: Partial<IHTMLTableElementIsolateProperties>) => void;
export default class HTMLTableElementIsolate extends HTMLTableElementIsolateBase implements IHTMLTableElementIsolate {
    get caption(): IHTMLTableCaptionElement;
    get rows(): Promise<string> | ISuperHTMLCollection | Promise<number>;
    get tBodies(): ISuperHTMLCollection;
    get tFoot(): IHTMLTableSectionElement;
    get tHead(): IHTMLTableSectionElement;
}
