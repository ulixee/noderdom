import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTemplateElementIsolate } from '../interfaces/isolate';
import { IDocumentFragment } from '../interfaces/official';
export declare const getState: (instance: IHTMLTemplateElementIsolate) => IHTMLTemplateElementIsolateProperties, setState: (instance: IHTMLTemplateElementIsolate, properties: Partial<IHTMLTemplateElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLTemplateElementIsolate>;
export default class HTMLTemplateElementIsolate implements IHTMLTemplateElementIsolate {
    get content(): Promise<string> | IDocumentFragment;
}
export interface IHTMLTemplateElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly content?: Promise<string> | IDocumentFragment;
}
export declare const HTMLTemplateElementIsolatePropertyKeys: string[];
export declare const HTMLTemplateElementIsolateConstantKeys: never[];
