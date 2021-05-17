import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLOListElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLOListElementIsolate) => IHTMLOListElementIsolateProperties, setState: (instance: IHTMLOListElementIsolate, properties: Partial<IHTMLOListElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLOListElementIsolate>;
export default class HTMLOListElementIsolate implements IHTMLOListElementIsolate {
    get compact(): Promise<boolean>;
    get reversed(): Promise<boolean>;
    get start(): Promise<number>;
    get type(): Promise<string>;
}
export interface IHTMLOListElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly compact?: Promise<boolean>;
    readonly reversed?: Promise<boolean>;
    readonly start?: Promise<number>;
    readonly type?: Promise<string>;
}
export declare const HTMLOListElementIsolatePropertyKeys: string[];
export declare const HTMLOListElementIsolateConstantKeys: never[];
