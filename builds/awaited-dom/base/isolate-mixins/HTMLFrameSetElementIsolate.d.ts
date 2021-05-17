import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLFrameSetElementIsolate } from '../interfaces/isolate';
import { ISuperHTMLCollection } from '../interfaces/super';
export declare const getState: (instance: IHTMLFrameSetElementIsolate) => IHTMLFrameSetElementIsolateProperties, setState: (instance: IHTMLFrameSetElementIsolate, properties: Partial<IHTMLFrameSetElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLFrameSetElementIsolate>;
export default class HTMLFrameSetElementIsolate implements IHTMLFrameSetElementIsolate {
    get cols(): Promise<string> | Promise<number>;
    get rows(): Promise<string> | ISuperHTMLCollection | Promise<number>;
}
export interface IHTMLFrameSetElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly cols?: Promise<string> | Promise<number>;
    readonly rows?: Promise<string> | ISuperHTMLCollection | Promise<number>;
}
export declare const HTMLFrameSetElementIsolatePropertyKeys: string[];
export declare const HTMLFrameSetElementIsolateConstantKeys: never[];
