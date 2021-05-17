import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLFieldSetElementIsolate } from '../interfaces/isolate';
import { ISuperHTMLCollection } from '../interfaces/super';
import { IHTMLFormElement, IValidityState } from '../interfaces/official';
export declare const getState: (instance: IHTMLFieldSetElementIsolate) => IHTMLFieldSetElementIsolateProperties, setState: (instance: IHTMLFieldSetElementIsolate, properties: Partial<IHTMLFieldSetElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLFieldSetElementIsolate>;
export default class HTMLFieldSetElementIsolate implements IHTMLFieldSetElementIsolate {
    get disabled(): Promise<boolean>;
    get elements(): ISuperHTMLCollection;
    get form(): IHTMLFormElement;
    get name(): Promise<string>;
    get type(): Promise<string>;
    get validationMessage(): Promise<string>;
    get validity(): Promise<IValidityState>;
    get willValidate(): Promise<boolean>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
}
export interface IHTMLFieldSetElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly disabled?: Promise<boolean>;
    readonly elements?: ISuperHTMLCollection;
    readonly form?: IHTMLFormElement;
    readonly name?: Promise<string>;
    readonly type?: Promise<string>;
    readonly validationMessage?: Promise<string>;
    readonly validity?: Promise<IValidityState>;
    readonly willValidate?: Promise<boolean>;
}
export declare const HTMLFieldSetElementIsolatePropertyKeys: string[];
export declare const HTMLFieldSetElementIsolateConstantKeys: never[];
