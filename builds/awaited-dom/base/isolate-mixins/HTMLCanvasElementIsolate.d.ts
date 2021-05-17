import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLCanvasElementIsolate } from '../interfaces/isolate';
import { IMediaStream, IOffscreenCanvas } from '../interfaces/official';
export declare const getState: (instance: IHTMLCanvasElementIsolate) => IHTMLCanvasElementIsolateProperties, setState: (instance: IHTMLCanvasElementIsolate, properties: Partial<IHTMLCanvasElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLCanvasElementIsolate>;
export default class HTMLCanvasElementIsolate implements IHTMLCanvasElementIsolate {
    get height(): Promise<number> | Promise<string>;
    get width(): Promise<number> | Promise<string>;
    captureStream(frameRequestRate?: number): IMediaStream;
    toDataURL(type?: string, quality?: any): Promise<string>;
    transferControlToOffscreen(): IOffscreenCanvas;
}
export interface IHTMLCanvasElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly height?: Promise<number> | Promise<string>;
    readonly width?: Promise<number> | Promise<string>;
}
export declare const HTMLCanvasElementIsolatePropertyKeys: string[];
export declare const HTMLCanvasElementIsolateConstantKeys: never[];
