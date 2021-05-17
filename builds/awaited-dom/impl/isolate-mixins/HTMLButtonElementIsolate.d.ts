import { IHTMLButtonElementIsolate } from '../../base/interfaces/isolate';
import { IHTMLFormElement } from '../../base/interfaces/official';
import { ISuperNodeList } from '../../base/interfaces/super';
import HTMLButtonElementIsolateBase, { IHTMLButtonElementIsolateProperties } from '../../base/isolate-mixins/HTMLButtonElementIsolate';
export declare const getState: (instance: IHTMLButtonElementIsolate) => IHTMLButtonElementIsolateProperties, setState: (instance: IHTMLButtonElementIsolate, properties: Partial<IHTMLButtonElementIsolateProperties>) => void;
export default class HTMLButtonElementIsolate extends HTMLButtonElementIsolateBase implements IHTMLButtonElementIsolate {
    get form(): IHTMLFormElement;
    get labels(): ISuperNodeList;
}
