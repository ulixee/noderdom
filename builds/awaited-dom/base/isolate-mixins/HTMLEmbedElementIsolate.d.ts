import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLEmbedElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLEmbedElementIsolate) => IHTMLEmbedElementIsolateProperties, setState: (instance: IHTMLEmbedElementIsolate, properties: Partial<IHTMLEmbedElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLEmbedElementIsolate>;
export default class HTMLEmbedElementIsolate implements IHTMLEmbedElementIsolate {
    get align(): Promise<string>;
    get height(): Promise<number> | Promise<string>;
    get name(): Promise<string>;
    get src(): Promise<string>;
    get type(): Promise<string>;
    get width(): Promise<number> | Promise<string>;
}
export interface IHTMLEmbedElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly align?: Promise<string>;
    readonly height?: Promise<number> | Promise<string>;
    readonly name?: Promise<string>;
    readonly src?: Promise<string>;
    readonly type?: Promise<string>;
    readonly width?: Promise<number> | Promise<string>;
}
export declare const HTMLEmbedElementIsolatePropertyKeys: string[];
export declare const HTMLEmbedElementIsolateConstantKeys: never[];
