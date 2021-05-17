import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLMetaElementIsolate } from '../interfaces/isolate';
import { IDocumentFragment } from '../interfaces/official';
export declare const getState: (instance: IHTMLMetaElementIsolate) => IHTMLMetaElementIsolateProperties, setState: (instance: IHTMLMetaElementIsolate, properties: Partial<IHTMLMetaElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLMetaElementIsolate>;
export default class HTMLMetaElementIsolate implements IHTMLMetaElementIsolate {
    get content(): Promise<string> | IDocumentFragment;
    get httpEquiv(): Promise<string>;
    get name(): Promise<string>;
    get scheme(): Promise<string>;
}
export interface IHTMLMetaElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly content?: Promise<string> | IDocumentFragment;
    readonly httpEquiv?: Promise<string>;
    readonly name?: Promise<string>;
    readonly scheme?: Promise<string>;
}
export declare const HTMLMetaElementIsolatePropertyKeys: string[];
export declare const HTMLMetaElementIsolateConstantKeys: never[];
