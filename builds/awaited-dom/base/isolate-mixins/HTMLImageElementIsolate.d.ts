import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLImageElementIsolate } from '../interfaces/isolate';
import { IDOMTokenList } from '../interfaces/official';
export declare const getState: (instance: IHTMLImageElementIsolate) => IHTMLImageElementIsolateProperties, setState: (instance: IHTMLImageElementIsolate, properties: Partial<IHTMLImageElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLImageElementIsolate>;
export default class HTMLImageElementIsolate implements IHTMLImageElementIsolate {
    get alt(): Promise<string>;
    get complete(): Promise<boolean>;
    get crossOrigin(): Promise<string | null>;
    get currentSrc(): Promise<string>;
    get decoding(): Promise<string>;
    get height(): Promise<number> | Promise<string>;
    get isMap(): Promise<boolean>;
    get naturalHeight(): Promise<number>;
    get naturalWidth(): Promise<number>;
    get referrerPolicy(): Promise<string>;
    get sizes(): Promise<string> | IDOMTokenList;
    get src(): Promise<string>;
    get srcset(): Promise<string>;
    get useMap(): Promise<string>;
    get width(): Promise<number> | Promise<string>;
    get x(): Promise<number>;
    get y(): Promise<number>;
    decode(): Promise<void>;
}
export interface IHTMLImageElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly alt?: Promise<string>;
    readonly complete?: Promise<boolean>;
    readonly crossOrigin?: Promise<string | null>;
    readonly currentSrc?: Promise<string>;
    readonly decoding?: Promise<string>;
    readonly height?: Promise<number> | Promise<string>;
    readonly isMap?: Promise<boolean>;
    readonly naturalHeight?: Promise<number>;
    readonly naturalWidth?: Promise<number>;
    readonly referrerPolicy?: Promise<string>;
    readonly sizes?: Promise<string> | IDOMTokenList;
    readonly src?: Promise<string>;
    readonly srcset?: Promise<string>;
    readonly useMap?: Promise<string>;
    readonly width?: Promise<number> | Promise<string>;
    readonly x?: Promise<number>;
    readonly y?: Promise<number>;
}
export declare const HTMLImageElementIsolatePropertyKeys: string[];
export declare const HTMLImageElementIsolateConstantKeys: never[];
