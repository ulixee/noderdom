import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLParagraphElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLParagraphElementIsolate) => IHTMLParagraphElementIsolateProperties, setState: (instance: IHTMLParagraphElementIsolate, properties: Partial<IHTMLParagraphElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLParagraphElementIsolate>;
export default class HTMLParagraphElementIsolate implements IHTMLParagraphElementIsolate {
    get align(): Promise<string>;
}
export interface IHTMLParagraphElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly align?: Promise<string>;
}
export declare const HTMLParagraphElementIsolatePropertyKeys: string[];
export declare const HTMLParagraphElementIsolateConstantKeys: never[];
