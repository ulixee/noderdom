import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLLabelElementIsolate } from '../interfaces/isolate';
import { ISuperHTMLElement } from '../interfaces/super';
import { IHTMLFormElement } from '../interfaces/official';
export declare const getState: <C = IHTMLLabelElementIsolate, P = IHTMLLabelElementIsolateProperties>(instance: C) => P, setState: <P = IHTMLLabelElementIsolateProperties>(instance: IHTMLLabelElementIsolate, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLLabelElementIsolate>;
export default class HTMLLabelElementIsolate implements IHTMLLabelElementIsolate {
    get control(): ISuperHTMLElement;
    get form(): IHTMLFormElement;
    get htmlFor(): Promise<string>;
}
export interface IHTMLLabelElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly control?: ISuperHTMLElement;
    readonly form?: IHTMLFormElement;
    readonly htmlFor?: Promise<string>;
}
export declare const HTMLLabelElementIsolatePropertyKeys: string[];
export declare const HTMLLabelElementIsolateConstantKeys: never[];
