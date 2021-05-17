import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLHRElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLHRElementIsolate) => IHTMLHRElementIsolateProperties, setState: (instance: IHTMLHRElementIsolate, properties: Partial<IHTMLHRElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLHRElementIsolate>;
export default class HTMLHRElementIsolate implements IHTMLHRElementIsolate {
}
export interface IHTMLHRElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLHRElementIsolatePropertyKeys: never[];
export declare const HTMLHRElementIsolateConstantKeys: never[];
