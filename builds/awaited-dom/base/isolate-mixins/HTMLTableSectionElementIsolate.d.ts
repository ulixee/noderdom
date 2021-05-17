import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTableSectionElementIsolate } from '../interfaces/isolate';
import { ISuperHTMLCollection } from '../interfaces/super';
export declare const getState: (instance: IHTMLTableSectionElementIsolate) => IHTMLTableSectionElementIsolateProperties, setState: (instance: IHTMLTableSectionElementIsolate, properties: Partial<IHTMLTableSectionElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLTableSectionElementIsolate>;
export default class HTMLTableSectionElementIsolate implements IHTMLTableSectionElementIsolate {
    get align(): Promise<string>;
    get ch(): Promise<string>;
    get chOff(): Promise<string>;
    get rows(): Promise<string> | ISuperHTMLCollection | Promise<number>;
    get vAlign(): Promise<string>;
}
export interface IHTMLTableSectionElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly align?: Promise<string>;
    readonly ch?: Promise<string>;
    readonly chOff?: Promise<string>;
    readonly rows?: Promise<string> | ISuperHTMLCollection | Promise<number>;
    readonly vAlign?: Promise<string>;
}
export declare const HTMLTableSectionElementIsolatePropertyKeys: string[];
export declare const HTMLTableSectionElementIsolateConstantKeys: never[];
