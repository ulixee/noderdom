import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLAnchorElementIsolate } from '../interfaces/isolate';
import { IDOMTokenList } from '../interfaces/official';
export declare const getState: (instance: IHTMLAnchorElementIsolate) => IHTMLAnchorElementIsolateProperties, setState: (instance: IHTMLAnchorElementIsolate, properties: Partial<IHTMLAnchorElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLAnchorElementIsolate>;
export default class HTMLAnchorElementIsolate implements IHTMLAnchorElementIsolate {
    get download(): Promise<string>;
    get hreflang(): Promise<string>;
    get referrerPolicy(): Promise<string>;
    get rel(): Promise<string>;
    get relList(): IDOMTokenList;
    get target(): Promise<string>;
    get text(): Promise<string>;
    get type(): Promise<string>;
}
export interface IHTMLAnchorElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly download?: Promise<string>;
    readonly hreflang?: Promise<string>;
    readonly referrerPolicy?: Promise<string>;
    readonly rel?: Promise<string>;
    readonly relList?: IDOMTokenList;
    readonly target?: Promise<string>;
    readonly text?: Promise<string>;
    readonly type?: Promise<string>;
}
export declare const HTMLAnchorElementIsolatePropertyKeys: string[];
export declare const HTMLAnchorElementIsolateConstantKeys: never[];
