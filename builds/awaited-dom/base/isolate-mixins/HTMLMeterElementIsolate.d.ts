import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLMeterElementIsolate } from '../interfaces/isolate';
import { ISuperNodeList } from '../interfaces/super';
export declare const getState: (instance: IHTMLMeterElementIsolate) => IHTMLMeterElementIsolateProperties, setState: (instance: IHTMLMeterElementIsolate, properties: Partial<IHTMLMeterElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLMeterElementIsolate>;
export default class HTMLMeterElementIsolate implements IHTMLMeterElementIsolate {
    get high(): Promise<number>;
    get labels(): ISuperNodeList;
    get low(): Promise<number>;
    get max(): Promise<string> | Promise<number>;
    get min(): Promise<string> | Promise<number>;
    get optimum(): Promise<number>;
    get value(): Promise<string> | Promise<number>;
}
export interface IHTMLMeterElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly high?: Promise<number>;
    readonly labels?: ISuperNodeList;
    readonly low?: Promise<number>;
    readonly max?: Promise<string> | Promise<number>;
    readonly min?: Promise<string> | Promise<number>;
    readonly optimum?: Promise<number>;
    readonly value?: Promise<string> | Promise<number>;
}
export declare const HTMLMeterElementIsolatePropertyKeys: string[];
export declare const HTMLMeterElementIsolateConstantKeys: never[];
