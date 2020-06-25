import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLHeadElementIsolate } from '../interfaces/isolate';
export declare const getState: <C = IHTMLHeadElementIsolate, P = IHTMLHeadElementIsolateProperties>(instance: C) => P, setState: <P = IHTMLHeadElementIsolateProperties>(instance: IHTMLHeadElementIsolate, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLHeadElementIsolate>;
export default class HTMLHeadElementIsolate implements IHTMLHeadElementIsolate {
}
export interface IHTMLHeadElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLHeadElementIsolatePropertyKeys: never[];
export declare const HTMLHeadElementIsolateConstantKeys: never[];
