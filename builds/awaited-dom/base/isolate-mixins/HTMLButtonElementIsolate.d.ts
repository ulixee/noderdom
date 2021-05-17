import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLButtonElementIsolate } from '../interfaces/isolate';
import { IHTMLFormElement, IValidityState } from '../interfaces/official';
import { ISuperNodeList } from '../interfaces/super';
export declare const getState: (instance: IHTMLButtonElementIsolate) => IHTMLButtonElementIsolateProperties, setState: (instance: IHTMLButtonElementIsolate, properties: Partial<IHTMLButtonElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLButtonElementIsolate>;
export default class HTMLButtonElementIsolate implements IHTMLButtonElementIsolate {
    get autofocus(): Promise<boolean>;
    get disabled(): Promise<boolean>;
    get form(): IHTMLFormElement;
    get formAction(): Promise<string>;
    get formEnctype(): Promise<string>;
    get formMethod(): Promise<string>;
    get formNoValidate(): Promise<boolean>;
    get formTarget(): Promise<string>;
    get labels(): ISuperNodeList;
    get name(): Promise<string>;
    get type(): Promise<string>;
    get validationMessage(): Promise<string>;
    get validity(): Promise<IValidityState>;
    get value(): Promise<string> | Promise<number>;
    get willValidate(): Promise<boolean>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
}
export interface IHTMLButtonElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly autofocus?: Promise<boolean>;
    readonly disabled?: Promise<boolean>;
    readonly form?: IHTMLFormElement;
    readonly formAction?: Promise<string>;
    readonly formEnctype?: Promise<string>;
    readonly formMethod?: Promise<string>;
    readonly formNoValidate?: Promise<boolean>;
    readonly formTarget?: Promise<string>;
    readonly labels?: ISuperNodeList;
    readonly name?: Promise<string>;
    readonly type?: Promise<string>;
    readonly validationMessage?: Promise<string>;
    readonly validity?: Promise<IValidityState>;
    readonly value?: Promise<string> | Promise<number>;
    readonly willValidate?: Promise<boolean>;
}
export declare const HTMLButtonElementIsolatePropertyKeys: string[];
export declare const HTMLButtonElementIsolateConstantKeys: never[];
