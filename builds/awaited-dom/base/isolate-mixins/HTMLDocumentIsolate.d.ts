import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLDocumentIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLDocumentIsolate) => IHTMLDocumentIsolateProperties, setState: (instance: IHTMLDocumentIsolate, properties: Partial<IHTMLDocumentIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLDocumentIsolate>;
export default class HTMLDocumentIsolate implements IHTMLDocumentIsolate {
}
export interface IHTMLDocumentIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLDocumentIsolatePropertyKeys: never[];
export declare const HTMLDocumentIsolateConstantKeys: never[];
