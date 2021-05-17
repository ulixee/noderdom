import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLDivElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLDivElementIsolate) => IHTMLDivElementIsolateProperties, setState: (instance: IHTMLDivElementIsolate, properties: Partial<IHTMLDivElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLDivElementIsolate>;
export default class HTMLDivElementIsolate implements IHTMLDivElementIsolate {
    get align(): Promise<string>;
}
export interface IHTMLDivElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly align?: Promise<string>;
}
export declare const HTMLDivElementIsolatePropertyKeys: string[];
export declare const HTMLDivElementIsolateConstantKeys: never[];
