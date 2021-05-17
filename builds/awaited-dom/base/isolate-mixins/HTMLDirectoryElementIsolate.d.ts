import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLDirectoryElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLDirectoryElementIsolate) => IHTMLDirectoryElementIsolateProperties, setState: (instance: IHTMLDirectoryElementIsolate, properties: Partial<IHTMLDirectoryElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLDirectoryElementIsolate>;
export default class HTMLDirectoryElementIsolate implements IHTMLDirectoryElementIsolate {
    get compact(): Promise<boolean>;
}
export interface IHTMLDirectoryElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly compact?: Promise<boolean>;
}
export declare const HTMLDirectoryElementIsolatePropertyKeys: string[];
export declare const HTMLDirectoryElementIsolateConstantKeys: never[];
