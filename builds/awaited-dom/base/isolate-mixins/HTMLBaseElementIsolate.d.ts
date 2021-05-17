import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLBaseElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLBaseElementIsolate) => IHTMLBaseElementIsolateProperties, setState: (instance: IHTMLBaseElementIsolate, properties: Partial<IHTMLBaseElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLBaseElementIsolate>;
export default class HTMLBaseElementIsolate implements IHTMLBaseElementIsolate {
    get href(): Promise<string>;
    get target(): Promise<string>;
}
export interface IHTMLBaseElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly href?: Promise<string>;
    readonly target?: Promise<string>;
}
export declare const HTMLBaseElementIsolatePropertyKeys: string[];
export declare const HTMLBaseElementIsolateConstantKeys: never[];
