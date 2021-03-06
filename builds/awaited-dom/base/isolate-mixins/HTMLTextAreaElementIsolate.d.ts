import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTextAreaElementIsolate } from '../interfaces/isolate';
import { IHTMLFormElement, IValidityState, ISelectionMode } from '../interfaces/official';
import { ISuperNodeList, ISuperHTMLCollection } from '../interfaces/super';
export declare const getState: (instance: IHTMLTextAreaElementIsolate) => IHTMLTextAreaElementIsolateProperties, setState: (instance: IHTMLTextAreaElementIsolate, properties: Partial<IHTMLTextAreaElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLTextAreaElementIsolate>;
export default class HTMLTextAreaElementIsolate implements IHTMLTextAreaElementIsolate {
    get autocomplete(): Promise<string>;
    get autofocus(): Promise<boolean>;
    get cols(): Promise<string> | Promise<number>;
    get defaultValue(): Promise<string>;
    get disabled(): Promise<boolean>;
    get form(): IHTMLFormElement;
    get inputMode(): Promise<string>;
    get labels(): ISuperNodeList;
    get maxLength(): Promise<number>;
    get minLength(): Promise<number>;
    get name(): Promise<string>;
    get placeholder(): Promise<string>;
    get readOnly(): Promise<boolean>;
    get required(): Promise<boolean>;
    get rows(): Promise<string> | ISuperHTMLCollection | Promise<number>;
    get selectionDirection(): Promise<string | null>;
    get selectionEnd(): Promise<number | null>;
    get selectionStart(): Promise<number | null>;
    get textLength(): Promise<number>;
    get type(): Promise<string>;
    get validationMessage(): Promise<string>;
    get validity(): Promise<IValidityState>;
    get value(): Promise<string> | Promise<number>;
    get willValidate(): Promise<boolean>;
    get wrap(): Promise<string>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
    select(): Promise<void>;
    setCustomValidity(error: string): Promise<void>;
    setRangeText(replacement: string, start?: number, end?: number, selectionMode?: ISelectionMode): Promise<void>;
    setSelectionRange(start: number, end: number, direction?: string): Promise<void>;
}
export interface IHTMLTextAreaElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly autocomplete?: Promise<string>;
    readonly autofocus?: Promise<boolean>;
    readonly cols?: Promise<string> | Promise<number>;
    readonly defaultValue?: Promise<string>;
    readonly disabled?: Promise<boolean>;
    readonly form?: IHTMLFormElement;
    readonly inputMode?: Promise<string>;
    readonly labels?: ISuperNodeList;
    readonly maxLength?: Promise<number>;
    readonly minLength?: Promise<number>;
    readonly name?: Promise<string>;
    readonly placeholder?: Promise<string>;
    readonly readOnly?: Promise<boolean>;
    readonly required?: Promise<boolean>;
    readonly rows?: Promise<string> | ISuperHTMLCollection | Promise<number>;
    readonly selectionDirection?: Promise<string | null>;
    readonly selectionEnd?: Promise<number | null>;
    readonly selectionStart?: Promise<number | null>;
    readonly textLength?: Promise<number>;
    readonly type?: Promise<string>;
    readonly validationMessage?: Promise<string>;
    readonly validity?: Promise<IValidityState>;
    readonly value?: Promise<string> | Promise<number>;
    readonly willValidate?: Promise<boolean>;
    readonly wrap?: Promise<string>;
}
export declare const HTMLTextAreaElementIsolatePropertyKeys: string[];
export declare const HTMLTextAreaElementIsolateConstantKeys: never[];
