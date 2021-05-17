import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLDetailsElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLDetailsElementIsolate) => IHTMLDetailsElementIsolateProperties, setState: (instance: IHTMLDetailsElementIsolate, properties: Partial<IHTMLDetailsElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLDetailsElementIsolate>;
export default class HTMLDetailsElementIsolate implements IHTMLDetailsElementIsolate {
    get open(): Promise<boolean>;
}
export interface IHTMLDetailsElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly open?: Promise<boolean>;
}
export declare const HTMLDetailsElementIsolatePropertyKeys: string[];
export declare const HTMLDetailsElementIsolateConstantKeys: never[];
