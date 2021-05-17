import { IHTMLObjectElementIsolate } from '../../base/interfaces/isolate';
import { ISuperDocument } from '../../base/interfaces/super';
import { IHTMLFormElement } from '../../base/interfaces/official';
import HTMLObjectElementIsolateBase, { IHTMLObjectElementIsolateProperties } from '../../base/isolate-mixins/HTMLObjectElementIsolate';
export declare const getState: (instance: IHTMLObjectElementIsolate) => IHTMLObjectElementIsolateProperties, setState: (instance: IHTMLObjectElementIsolate, properties: Partial<IHTMLObjectElementIsolateProperties>) => void;
export default class HTMLObjectElementIsolate extends HTMLObjectElementIsolateBase implements IHTMLObjectElementIsolate {
    get contentDocument(): ISuperDocument;
    get form(): IHTMLFormElement;
}
