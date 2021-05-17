import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLProgressElementIsolate } from '../interfaces/isolate';
import { ISuperNodeList } from '../interfaces/super';
export declare const getState: (instance: IHTMLProgressElementIsolate) => IHTMLProgressElementIsolateProperties, setState: (instance: IHTMLProgressElementIsolate, properties: Partial<IHTMLProgressElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLProgressElementIsolate>;
export default class HTMLProgressElementIsolate implements IHTMLProgressElementIsolate {
    get labels(): ISuperNodeList;
    get max(): Promise<string> | Promise<number>;
    get position(): Promise<number>;
    get value(): Promise<string> | Promise<number>;
}
export interface IHTMLProgressElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly labels?: ISuperNodeList;
    readonly max?: Promise<string> | Promise<number>;
    readonly position?: Promise<number>;
    readonly value?: Promise<string> | Promise<number>;
}
export declare const HTMLProgressElementIsolatePropertyKeys: string[];
export declare const HTMLProgressElementIsolateConstantKeys: never[];
