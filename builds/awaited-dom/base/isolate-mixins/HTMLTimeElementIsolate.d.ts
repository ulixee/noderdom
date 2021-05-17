import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTimeElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLTimeElementIsolate) => IHTMLTimeElementIsolateProperties, setState: (instance: IHTMLTimeElementIsolate, properties: Partial<IHTMLTimeElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLTimeElementIsolate>;
export default class HTMLTimeElementIsolate implements IHTMLTimeElementIsolate {
    get dateTime(): Promise<string>;
}
export interface IHTMLTimeElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly dateTime?: Promise<string>;
}
export declare const HTMLTimeElementIsolatePropertyKeys: string[];
export declare const HTMLTimeElementIsolateConstantKeys: never[];
