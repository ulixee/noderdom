import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLScriptElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLScriptElementIsolate) => IHTMLScriptElementIsolateProperties, setState: (instance: IHTMLScriptElementIsolate, properties: Partial<IHTMLScriptElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLScriptElementIsolate>;
export default class HTMLScriptElementIsolate implements IHTMLScriptElementIsolate {
    get async(): Promise<boolean>;
    get charset(): Promise<string>;
    get crossOrigin(): Promise<string | null>;
    get defer(): Promise<boolean>;
    get event(): Promise<string>;
    get noModule(): Promise<boolean>;
    get referrerPolicy(): Promise<string>;
    get src(): Promise<string>;
    get text(): Promise<string>;
    get type(): Promise<string>;
}
export interface IHTMLScriptElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly async?: Promise<boolean>;
    readonly charset?: Promise<string>;
    readonly crossOrigin?: Promise<string | null>;
    readonly defer?: Promise<boolean>;
    readonly event?: Promise<string>;
    readonly noModule?: Promise<boolean>;
    readonly referrerPolicy?: Promise<string>;
    readonly src?: Promise<string>;
    readonly text?: Promise<string>;
    readonly type?: Promise<string>;
}
export declare const HTMLScriptElementIsolatePropertyKeys: string[];
export declare const HTMLScriptElementIsolateConstantKeys: never[];
