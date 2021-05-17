import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLFormElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLFormElementIsolate) => IHTMLFormElementIsolateProperties, setState: (instance: IHTMLFormElementIsolate, properties: Partial<IHTMLFormElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLFormElementIsolate>;
export default class HTMLFormElementIsolate implements IHTMLFormElementIsolate {
    get acceptCharset(): Promise<string>;
    get action(): Promise<string>;
    get autocomplete(): Promise<string>;
    get encoding(): Promise<string>;
    get enctype(): Promise<string>;
    get length(): Promise<number>;
    get name(): Promise<string>;
    get noValidate(): Promise<boolean>;
    get target(): Promise<string>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
    reset(): Promise<void>;
    submit(): Promise<void>;
}
export interface IHTMLFormElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly acceptCharset?: Promise<string>;
    readonly action?: Promise<string>;
    readonly autocomplete?: Promise<string>;
    readonly encoding?: Promise<string>;
    readonly enctype?: Promise<string>;
    readonly length?: Promise<number>;
    readonly name?: Promise<string>;
    readonly noValidate?: Promise<boolean>;
    readonly target?: Promise<string>;
}
export declare const HTMLFormElementIsolatePropertyKeys: string[];
export declare const HTMLFormElementIsolateConstantKeys: never[];
