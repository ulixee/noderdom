import { IHTMLLegendElementIsolate } from '../../base/interfaces/isolate';
import { IHTMLFormElement } from '../../base/interfaces/official';
import HTMLLegendElementIsolateBase, { IHTMLLegendElementIsolateProperties } from '../../base/isolate-mixins/HTMLLegendElementIsolate';
export declare const getState: (instance: IHTMLLegendElementIsolate) => IHTMLLegendElementIsolateProperties, setState: (instance: IHTMLLegendElementIsolate, properties: Partial<IHTMLLegendElementIsolateProperties>) => void;
export default class HTMLLegendElementIsolate extends HTMLLegendElementIsolateBase implements IHTMLLegendElementIsolate {
    get form(): IHTMLFormElement;
}
