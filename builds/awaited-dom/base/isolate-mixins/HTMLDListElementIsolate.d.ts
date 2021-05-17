import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLDListElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLDListElementIsolate) => IHTMLDListElementIsolateProperties, setState: (instance: IHTMLDListElementIsolate, properties: Partial<IHTMLDListElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLDListElementIsolate>;
export default class HTMLDListElementIsolate implements IHTMLDListElementIsolate {
    get compact(): Promise<boolean>;
}
export interface IHTMLDListElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly compact?: Promise<boolean>;
}
export declare const HTMLDListElementIsolatePropertyKeys: string[];
export declare const HTMLDListElementIsolateConstantKeys: never[];
