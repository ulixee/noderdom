import { IHTMLCanvasElementIsolate } from '../../base/interfaces/isolate';
import { IMediaStream, IOffscreenCanvas } from '../../base/interfaces/official';
import HTMLCanvasElementIsolateBase, { IHTMLCanvasElementIsolateProperties } from '../../base/isolate-mixins/HTMLCanvasElementIsolate';
export declare const getState: (instance: IHTMLCanvasElementIsolate) => IHTMLCanvasElementIsolateProperties, setState: (instance: IHTMLCanvasElementIsolate, properties: Partial<IHTMLCanvasElementIsolateProperties>) => void;
export default class HTMLCanvasElementIsolate extends HTMLCanvasElementIsolateBase implements IHTMLCanvasElementIsolate {
    captureStream(frameRequestRate?: number): IMediaStream;
    transferControlToOffscreen(): IOffscreenCanvas;
}
