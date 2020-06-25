import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLOptionElementIsolate } from '../interfaces/isolate';
import { IHTMLFormElement } from '../interfaces/official';
export declare const getState: <C = IHTMLOptionElementIsolate, P = IHTMLOptionElementIsolateProperties>(instance: C) => P, setState: <P = IHTMLOptionElementIsolateProperties>(instance: IHTMLOptionElementIsolate, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLOptionElementIsolate>;
export default class HTMLOptionElementIsolate implements IHTMLOptionElementIsolate {
    get defaultSelected(): Promise<boolean>;
    get disabled(): Promise<boolean>;
    get form(): IHTMLFormElement;
    get index(): Promise<number>;
    get label(): Promise<string>;
    get selected(): Promise<boolean>;
    get text(): Promise<string>;
    get value(): Promise<string>;
}
export interface IHTMLOptionElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly defaultSelected?: Promise<boolean>;
    readonly disabled?: Promise<boolean>;
    readonly form?: IHTMLFormElement;
    readonly index?: Promise<number>;
    readonly label?: Promise<string>;
    readonly selected?: Promise<boolean>;
    readonly text?: Promise<string>;
    readonly value?: Promise<string>;
}
export declare const HTMLOptionElementIsolatePropertyKeys: string[];
export declare const HTMLOptionElementIsolateConstantKeys: never[];
