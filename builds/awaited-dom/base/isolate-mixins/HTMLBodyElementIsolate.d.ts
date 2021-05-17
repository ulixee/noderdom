import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLBodyElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLBodyElementIsolate) => IHTMLBodyElementIsolateProperties, setState: (instance: IHTMLBodyElementIsolate, properties: Partial<IHTMLBodyElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLBodyElementIsolate>;
export default class HTMLBodyElementIsolate implements IHTMLBodyElementIsolate {
    get aLink(): Promise<string>;
    get background(): Promise<string>;
    get bgColor(): Promise<string>;
    get link(): Promise<string>;
    get text(): Promise<string>;
    get vLink(): Promise<string>;
}
export interface IHTMLBodyElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly aLink?: Promise<string>;
    readonly background?: Promise<string>;
    readonly bgColor?: Promise<string>;
    readonly link?: Promise<string>;
    readonly text?: Promise<string>;
    readonly vLink?: Promise<string>;
}
export declare const HTMLBodyElementIsolatePropertyKeys: string[];
export declare const HTMLBodyElementIsolateConstantKeys: never[];
