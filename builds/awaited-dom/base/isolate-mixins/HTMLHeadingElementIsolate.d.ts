import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLHeadingElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLHeadingElementIsolate) => IHTMLHeadingElementIsolateProperties, setState: (instance: IHTMLHeadingElementIsolate, properties: Partial<IHTMLHeadingElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLHeadingElementIsolate>;
export default class HTMLHeadingElementIsolate implements IHTMLHeadingElementIsolate {
    get align(): Promise<string>;
}
export interface IHTMLHeadingElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly align?: Promise<string>;
}
export declare const HTMLHeadingElementIsolatePropertyKeys: string[];
export declare const HTMLHeadingElementIsolateConstantKeys: never[];
