import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTableColElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLTableColElementIsolate) => IHTMLTableColElementIsolateProperties, setState: (instance: IHTMLTableColElementIsolate, properties: Partial<IHTMLTableColElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLTableColElementIsolate>;
export default class HTMLTableColElementIsolate implements IHTMLTableColElementIsolate {
    get align(): Promise<string>;
    get ch(): Promise<string>;
    get chOff(): Promise<string>;
    get span(): Promise<number>;
    get vAlign(): Promise<string>;
    get width(): Promise<number> | Promise<string>;
}
export interface IHTMLTableColElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly align?: Promise<string>;
    readonly ch?: Promise<string>;
    readonly chOff?: Promise<string>;
    readonly span?: Promise<number>;
    readonly vAlign?: Promise<string>;
    readonly width?: Promise<number> | Promise<string>;
}
export declare const HTMLTableColElementIsolatePropertyKeys: string[];
export declare const HTMLTableColElementIsolateConstantKeys: never[];
