import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLPreElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLPreElementIsolate) => IHTMLPreElementIsolateProperties, setState: (instance: IHTMLPreElementIsolate, properties: Partial<IHTMLPreElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLPreElementIsolate>;
export default class HTMLPreElementIsolate implements IHTMLPreElementIsolate {
    get width(): Promise<number> | Promise<string>;
}
export interface IHTMLPreElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly width?: Promise<number> | Promise<string>;
}
export declare const HTMLPreElementIsolatePropertyKeys: string[];
export declare const HTMLPreElementIsolateConstantKeys: never[];
