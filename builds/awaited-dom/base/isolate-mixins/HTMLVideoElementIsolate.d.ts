import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLVideoElementIsolate } from '../interfaces/isolate';
import { IVideoPlaybackQuality } from '../interfaces/official';
export declare const getState: (instance: IHTMLVideoElementIsolate) => IHTMLVideoElementIsolateProperties, setState: (instance: IHTMLVideoElementIsolate, properties: Partial<IHTMLVideoElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLVideoElementIsolate>;
export default class HTMLVideoElementIsolate implements IHTMLVideoElementIsolate {
    get height(): Promise<number> | Promise<string>;
    get poster(): Promise<string>;
    get videoHeight(): Promise<number>;
    get videoWidth(): Promise<number>;
    get width(): Promise<number> | Promise<string>;
    getVideoPlaybackQuality(): IVideoPlaybackQuality;
}
export interface IHTMLVideoElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly height?: Promise<number> | Promise<string>;
    readonly poster?: Promise<string>;
    readonly videoHeight?: Promise<number>;
    readonly videoWidth?: Promise<number>;
    readonly width?: Promise<number> | Promise<string>;
}
export declare const HTMLVideoElementIsolatePropertyKeys: string[];
export declare const HTMLVideoElementIsolateConstantKeys: never[];
