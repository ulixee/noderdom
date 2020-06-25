import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLFormElementIsolate } from '../interfaces/isolate';
export declare const getState: <C = IHTMLFormElementIsolate, P = IHTMLFormElementIsolateProperties>(instance: C) => P, setState: <P = IHTMLFormElementIsolateProperties>(instance: IHTMLFormElementIsolate, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLFormElementIsolate>;
export default class HTMLFormElementIsolate implements IHTMLFormElementIsolate {
}
export interface IHTMLFormElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLFormElementIsolatePropertyKeys: never[];
export declare const HTMLFormElementIsolateConstantKeys: never[];
