import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLModElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLModElementIsolate) => IHTMLModElementIsolateProperties, setState: (instance: IHTMLModElementIsolate, properties: Partial<IHTMLModElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLModElementIsolate>;
export default class HTMLModElementIsolate implements IHTMLModElementIsolate {
    get cite(): Promise<string>;
    get dateTime(): Promise<string>;
}
export interface IHTMLModElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly cite?: Promise<string>;
    readonly dateTime?: Promise<string>;
}
export declare const HTMLModElementIsolatePropertyKeys: string[];
export declare const HTMLModElementIsolateConstantKeys: never[];
