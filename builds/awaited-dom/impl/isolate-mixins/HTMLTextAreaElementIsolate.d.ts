import { IHTMLTextAreaElementIsolate } from '../../base/interfaces/isolate';
import { IHTMLFormElement } from '../../base/interfaces/official';
import { ISuperNodeList } from '../../base/interfaces/super';
import HTMLTextAreaElementIsolateBase, { IHTMLTextAreaElementIsolateProperties } from '../../base/isolate-mixins/HTMLTextAreaElementIsolate';
export declare const getState: (instance: IHTMLTextAreaElementIsolate) => IHTMLTextAreaElementIsolateProperties, setState: (instance: IHTMLTextAreaElementIsolate, properties: Partial<IHTMLTextAreaElementIsolateProperties>) => void;
export default class HTMLTextAreaElementIsolate extends HTMLTextAreaElementIsolateBase implements IHTMLTextAreaElementIsolate {
    get form(): IHTMLFormElement;
    get labels(): ISuperNodeList;
}
