import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLFrameElementIsolate } from '../interfaces/isolate';
import { ISuperDocument } from '../interfaces/super';
export declare const getState: (instance: IHTMLFrameElementIsolate) => IHTMLFrameElementIsolateProperties, setState: (instance: IHTMLFrameElementIsolate, properties: Partial<IHTMLFrameElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLFrameElementIsolate>;
export default class HTMLFrameElementIsolate implements IHTMLFrameElementIsolate {
    get contentDocument(): ISuperDocument;
    get frameBorder(): Promise<string>;
    get longDesc(): Promise<string>;
    get marginHeight(): Promise<string>;
    get marginWidth(): Promise<string>;
    get name(): Promise<string>;
    get noResize(): Promise<boolean>;
    get scrolling(): Promise<string>;
    get src(): Promise<string>;
}
export interface IHTMLFrameElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly contentDocument?: ISuperDocument;
    readonly frameBorder?: Promise<string>;
    readonly longDesc?: Promise<string>;
    readonly marginHeight?: Promise<string>;
    readonly marginWidth?: Promise<string>;
    readonly name?: Promise<string>;
    readonly noResize?: Promise<boolean>;
    readonly scrolling?: Promise<string>;
    readonly src?: Promise<string>;
}
export declare const HTMLFrameElementIsolatePropertyKeys: string[];
export declare const HTMLFrameElementIsolateConstantKeys: never[];
