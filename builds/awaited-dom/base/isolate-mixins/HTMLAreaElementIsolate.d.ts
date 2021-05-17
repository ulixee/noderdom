import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLAreaElementIsolate } from '../interfaces/isolate';
import { IDOMTokenList } from '../interfaces/official';
export declare const getState: (instance: IHTMLAreaElementIsolate) => IHTMLAreaElementIsolateProperties, setState: (instance: IHTMLAreaElementIsolate, properties: Partial<IHTMLAreaElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLAreaElementIsolate>;
export default class HTMLAreaElementIsolate implements IHTMLAreaElementIsolate {
    get alt(): Promise<string>;
    get coords(): Promise<string>;
    get download(): Promise<string>;
    get hreflang(): Promise<string>;
    get noHref(): Promise<boolean>;
    get referrerPolicy(): Promise<string>;
    get rel(): Promise<string>;
    get relList(): IDOMTokenList;
    get shape(): Promise<string>;
    get target(): Promise<string>;
    get type(): Promise<string>;
}
export interface IHTMLAreaElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly alt?: Promise<string>;
    readonly coords?: Promise<string>;
    readonly download?: Promise<string>;
    readonly hreflang?: Promise<string>;
    readonly noHref?: Promise<boolean>;
    readonly referrerPolicy?: Promise<string>;
    readonly rel?: Promise<string>;
    readonly relList?: IDOMTokenList;
    readonly shape?: Promise<string>;
    readonly target?: Promise<string>;
    readonly type?: Promise<string>;
}
export declare const HTMLAreaElementIsolatePropertyKeys: string[];
export declare const HTMLAreaElementIsolateConstantKeys: never[];
