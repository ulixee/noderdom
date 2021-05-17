import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLStyleElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLStyleElementIsolate) => IHTMLStyleElementIsolateProperties, setState: (instance: IHTMLStyleElementIsolate, properties: Partial<IHTMLStyleElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLStyleElementIsolate>;
export default class HTMLStyleElementIsolate implements IHTMLStyleElementIsolate {
    get media(): Promise<string>;
    get type(): Promise<string>;
}
export interface IHTMLStyleElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly media?: Promise<string>;
    readonly type?: Promise<string>;
}
export declare const HTMLStyleElementIsolatePropertyKeys: string[];
export declare const HTMLStyleElementIsolateConstantKeys: never[];
