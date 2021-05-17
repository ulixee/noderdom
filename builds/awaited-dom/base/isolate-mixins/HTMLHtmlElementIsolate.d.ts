import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLHtmlElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLHtmlElementIsolate) => IHTMLHtmlElementIsolateProperties, setState: (instance: IHTMLHtmlElementIsolate, properties: Partial<IHTMLHtmlElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLHtmlElementIsolate>;
export default class HTMLHtmlElementIsolate implements IHTMLHtmlElementIsolate {
    get version(): Promise<string>;
}
export interface IHTMLHtmlElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly version?: Promise<string>;
}
export declare const HTMLHtmlElementIsolatePropertyKeys: string[];
export declare const HTMLHtmlElementIsolateConstantKeys: never[];
