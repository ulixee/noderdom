import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLLinkElementIsolate } from '../interfaces/isolate';
import { IDOMTokenList } from '../interfaces/official';
export declare const getState: (instance: IHTMLLinkElementIsolate) => IHTMLLinkElementIsolateProperties, setState: (instance: IHTMLLinkElementIsolate, properties: Partial<IHTMLLinkElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLLinkElementIsolate>;
export default class HTMLLinkElementIsolate implements IHTMLLinkElementIsolate {
    get as(): Promise<string>;
    get crossOrigin(): Promise<string | null>;
    get href(): Promise<string>;
    get hreflang(): Promise<string>;
    get media(): Promise<string>;
    get referrerPolicy(): Promise<string>;
    get rel(): Promise<string>;
    get relList(): IDOMTokenList;
    get sizes(): Promise<string> | IDOMTokenList;
    get type(): Promise<string>;
}
export interface IHTMLLinkElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly as?: Promise<string>;
    readonly crossOrigin?: Promise<string | null>;
    readonly href?: Promise<string>;
    readonly hreflang?: Promise<string>;
    readonly media?: Promise<string>;
    readonly referrerPolicy?: Promise<string>;
    readonly rel?: Promise<string>;
    readonly relList?: IDOMTokenList;
    readonly sizes?: Promise<string> | IDOMTokenList;
    readonly type?: Promise<string>;
}
export declare const HTMLLinkElementIsolatePropertyKeys: string[];
export declare const HTMLLinkElementIsolateConstantKeys: never[];
