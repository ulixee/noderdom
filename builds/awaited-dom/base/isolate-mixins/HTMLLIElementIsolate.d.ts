import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLLIElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLLIElementIsolate) => IHTMLLIElementIsolateProperties, setState: (instance: IHTMLLIElementIsolate, properties: Partial<IHTMLLIElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLLIElementIsolate>;
export default class HTMLLIElementIsolate implements IHTMLLIElementIsolate {
    get type(): Promise<string>;
    get value(): Promise<string> | Promise<number>;
}
export interface IHTMLLIElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly type?: Promise<string>;
    readonly value?: Promise<string> | Promise<number>;
}
export declare const HTMLLIElementIsolatePropertyKeys: string[];
export declare const HTMLLIElementIsolateConstantKeys: never[];
