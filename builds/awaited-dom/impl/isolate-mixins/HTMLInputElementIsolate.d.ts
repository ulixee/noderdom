import { IHTMLInputElementIsolate } from '../../base/interfaces/isolate';
import { IFileList, IHTMLFormElement } from '../../base/interfaces/official';
import { ISuperNodeList, ISuperHTMLElement } from '../../base/interfaces/super';
import HTMLInputElementIsolateBase, { IHTMLInputElementIsolateProperties } from '../../base/isolate-mixins/HTMLInputElementIsolate';
export declare const getState: (instance: IHTMLInputElementIsolate) => IHTMLInputElementIsolateProperties, setState: (instance: IHTMLInputElementIsolate, properties: Partial<IHTMLInputElementIsolateProperties>) => void;
export default class HTMLInputElementIsolate extends HTMLInputElementIsolateBase implements IHTMLInputElementIsolate {
    get files(): IFileList;
    get form(): IHTMLFormElement;
    get labels(): ISuperNodeList;
    get list(): ISuperHTMLElement;
}
