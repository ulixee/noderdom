import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLSpanElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLSpanElementIsolate) => IHTMLSpanElementIsolateProperties, setState: (instance: IHTMLSpanElementIsolate, properties: Partial<IHTMLSpanElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLSpanElementIsolate>;
export default class HTMLSpanElementIsolate implements IHTMLSpanElementIsolate {
}
export interface IHTMLSpanElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLSpanElementIsolatePropertyKeys: never[];
export declare const HTMLSpanElementIsolateConstantKeys: never[];
