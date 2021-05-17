import { IHTMLTemplateElementIsolate } from '../../base/interfaces/isolate';
import { IDocumentFragment } from '../../base/interfaces/official';
import HTMLTemplateElementIsolateBase, { IHTMLTemplateElementIsolateProperties } from '../../base/isolate-mixins/HTMLTemplateElementIsolate';
export declare const getState: (instance: IHTMLTemplateElementIsolate) => IHTMLTemplateElementIsolateProperties, setState: (instance: IHTMLTemplateElementIsolate, properties: Partial<IHTMLTemplateElementIsolateProperties>) => void;
export default class HTMLTemplateElementIsolate extends HTMLTemplateElementIsolateBase implements IHTMLTemplateElementIsolate {
    get content(): Promise<string> | IDocumentFragment;
}
