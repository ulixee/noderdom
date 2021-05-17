import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLFontElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLFontElementIsolate) => IHTMLFontElementIsolateProperties, setState: (instance: IHTMLFontElementIsolate, properties: Partial<IHTMLFontElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLFontElementIsolate>;
export default class HTMLFontElementIsolate implements IHTMLFontElementIsolate {
    get color(): Promise<string>;
    get face(): Promise<string>;
    get size(): Promise<string> | Promise<number>;
}
export interface IHTMLFontElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly color?: Promise<string>;
    readonly face?: Promise<string>;
    readonly size?: Promise<string> | Promise<number>;
}
export declare const HTMLFontElementIsolatePropertyKeys: string[];
export declare const HTMLFontElementIsolateConstantKeys: never[];
