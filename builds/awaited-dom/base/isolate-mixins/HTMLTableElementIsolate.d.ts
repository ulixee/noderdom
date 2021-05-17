import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTableElementIsolate } from '../interfaces/isolate';
import { IHTMLTableCaptionElement, IHTMLTableSectionElement } from '../interfaces/official';
import { ISuperHTMLCollection } from '../interfaces/super';
export declare const getState: (instance: IHTMLTableElementIsolate) => IHTMLTableElementIsolateProperties, setState: (instance: IHTMLTableElementIsolate, properties: Partial<IHTMLTableElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLTableElementIsolate>;
export default class HTMLTableElementIsolate implements IHTMLTableElementIsolate {
    get align(): Promise<string>;
    get bgColor(): Promise<string>;
    get border(): Promise<string>;
    get caption(): IHTMLTableCaptionElement;
    get cellPadding(): Promise<string>;
    get cellSpacing(): Promise<string>;
    get frame(): Promise<string>;
    get rows(): Promise<string> | ISuperHTMLCollection | Promise<number>;
    get rules(): Promise<string>;
    get summary(): Promise<string>;
    get tBodies(): ISuperHTMLCollection;
    get tFoot(): IHTMLTableSectionElement;
    get tHead(): IHTMLTableSectionElement;
    get width(): Promise<number> | Promise<string>;
}
export interface IHTMLTableElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly align?: Promise<string>;
    readonly bgColor?: Promise<string>;
    readonly border?: Promise<string>;
    readonly caption?: IHTMLTableCaptionElement;
    readonly cellPadding?: Promise<string>;
    readonly cellSpacing?: Promise<string>;
    readonly frame?: Promise<string>;
    readonly rows?: Promise<string> | ISuperHTMLCollection | Promise<number>;
    readonly rules?: Promise<string>;
    readonly summary?: Promise<string>;
    readonly tBodies?: ISuperHTMLCollection;
    readonly tFoot?: IHTMLTableSectionElement;
    readonly tHead?: IHTMLTableSectionElement;
    readonly width?: Promise<number> | Promise<string>;
}
export declare const HTMLTableElementIsolatePropertyKeys: string[];
export declare const HTMLTableElementIsolateConstantKeys: never[];
