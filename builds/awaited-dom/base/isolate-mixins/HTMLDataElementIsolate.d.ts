import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLDataElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLDataElementIsolate) => IHTMLDataElementIsolateProperties, setState: (instance: IHTMLDataElementIsolate, properties: Partial<IHTMLDataElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLDataElementIsolate>;
export default class HTMLDataElementIsolate implements IHTMLDataElementIsolate {
    get value(): Promise<string> | Promise<number>;
}
export interface IHTMLDataElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly value?: Promise<string> | Promise<number>;
}
export declare const HTMLDataElementIsolatePropertyKeys: string[];
export declare const HTMLDataElementIsolateConstantKeys: never[];
