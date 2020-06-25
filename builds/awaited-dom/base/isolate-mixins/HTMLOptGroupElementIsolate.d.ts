import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLOptGroupElementIsolate } from '../interfaces/isolate';
export declare const getState: <C = IHTMLOptGroupElementIsolate, P = IHTMLOptGroupElementIsolateProperties>(instance: C) => P, setState: <P = IHTMLOptGroupElementIsolateProperties>(instance: IHTMLOptGroupElementIsolate, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLOptGroupElementIsolate>;
export default class HTMLOptGroupElementIsolate implements IHTMLOptGroupElementIsolate {
    get disabled(): Promise<boolean>;
    get label(): Promise<string>;
}
export interface IHTMLOptGroupElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly disabled?: Promise<boolean>;
    readonly label?: Promise<string>;
}
export declare const HTMLOptGroupElementIsolatePropertyKeys: string[];
export declare const HTMLOptGroupElementIsolateConstantKeys: never[];
