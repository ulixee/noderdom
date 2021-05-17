import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLParamElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLParamElementIsolate) => IHTMLParamElementIsolateProperties, setState: (instance: IHTMLParamElementIsolate, properties: Partial<IHTMLParamElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLParamElementIsolate>;
export default class HTMLParamElementIsolate implements IHTMLParamElementIsolate {
    get name(): Promise<string>;
    get type(): Promise<string>;
    get value(): Promise<string> | Promise<number>;
    get valueType(): Promise<string>;
}
export interface IHTMLParamElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly name?: Promise<string>;
    readonly type?: Promise<string>;
    readonly value?: Promise<string> | Promise<number>;
    readonly valueType?: Promise<string>;
}
export declare const HTMLParamElementIsolatePropertyKeys: string[];
export declare const HTMLParamElementIsolateConstantKeys: never[];
