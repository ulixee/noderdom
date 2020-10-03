import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLFormElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLFormElementIsolate) => IHTMLFormElementIsolateProperties, setState: (instance: IHTMLFormElementIsolate, properties: Partial<IHTMLFormElementIsolateProperties>) => void, recordProxy: (proxy: IHTMLFormElementIsolate, instance: IHTMLFormElementIsolate) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLFormElementIsolate>;
export default class HTMLFormElementIsolate implements IHTMLFormElementIsolate {
}
export interface IHTMLFormElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLFormElementIsolatePropertyKeys: never[];
export declare const HTMLFormElementIsolateConstantKeys: never[];
