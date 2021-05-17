import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLSourceElementIsolate } from '../interfaces/isolate';
import { IDOMTokenList } from '../interfaces/official';
export declare const getState: (instance: IHTMLSourceElementIsolate) => IHTMLSourceElementIsolateProperties, setState: (instance: IHTMLSourceElementIsolate, properties: Partial<IHTMLSourceElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLSourceElementIsolate>;
export default class HTMLSourceElementIsolate implements IHTMLSourceElementIsolate {
    get media(): Promise<string>;
    get sizes(): Promise<string> | IDOMTokenList;
    get src(): Promise<string>;
    get srcset(): Promise<string>;
    get type(): Promise<string>;
}
export interface IHTMLSourceElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly media?: Promise<string>;
    readonly sizes?: Promise<string> | IDOMTokenList;
    readonly src?: Promise<string>;
    readonly srcset?: Promise<string>;
    readonly type?: Promise<string>;
}
export declare const HTMLSourceElementIsolatePropertyKeys: string[];
export declare const HTMLSourceElementIsolateConstantKeys: never[];
