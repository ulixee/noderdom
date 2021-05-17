import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLUListElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLUListElementIsolate) => IHTMLUListElementIsolateProperties, setState: (instance: IHTMLUListElementIsolate, properties: Partial<IHTMLUListElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLUListElementIsolate>;
export default class HTMLUListElementIsolate implements IHTMLUListElementIsolate {
    get compact(): Promise<boolean>;
    get type(): Promise<string>;
}
export interface IHTMLUListElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly compact?: Promise<boolean>;
    readonly type?: Promise<string>;
}
export declare const HTMLUListElementIsolatePropertyKeys: string[];
export declare const HTMLUListElementIsolateConstantKeys: never[];
