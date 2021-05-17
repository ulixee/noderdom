import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTitleElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLTitleElementIsolate) => IHTMLTitleElementIsolateProperties, setState: (instance: IHTMLTitleElementIsolate, properties: Partial<IHTMLTitleElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLTitleElementIsolate>;
export default class HTMLTitleElementIsolate implements IHTMLTitleElementIsolate {
    get text(): Promise<string>;
}
export interface IHTMLTitleElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly text?: Promise<string>;
}
export declare const HTMLTitleElementIsolatePropertyKeys: string[];
export declare const HTMLTitleElementIsolateConstantKeys: never[];
