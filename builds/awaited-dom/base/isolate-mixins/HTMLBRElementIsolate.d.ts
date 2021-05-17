import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLBRElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLBRElementIsolate) => IHTMLBRElementIsolateProperties, setState: (instance: IHTMLBRElementIsolate, properties: Partial<IHTMLBRElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLBRElementIsolate>;
export default class HTMLBRElementIsolate implements IHTMLBRElementIsolate {
}
export interface IHTMLBRElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLBRElementIsolatePropertyKeys: never[];
export declare const HTMLBRElementIsolateConstantKeys: never[];
