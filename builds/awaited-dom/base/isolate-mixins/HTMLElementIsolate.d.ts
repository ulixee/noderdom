import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLElementIsolate } from '../interfaces/isolate';
import { ISuperElement } from '../interfaces/super';
export declare const getState: (instance: IHTMLElementIsolate) => IHTMLElementIsolateProperties, setState: (instance: IHTMLElementIsolate, properties: Partial<IHTMLElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLElementIsolate>;
export default class HTMLElementIsolate implements IHTMLElementIsolate {
    get accessKey(): Promise<string>;
    get autoCapitalize(): Promise<string>;
    get dir(): Promise<string>;
    get draggable(): Promise<boolean>;
    get hidden(): Promise<boolean>;
    get inert(): Promise<boolean>;
    get innerText(): Promise<string>;
    get lang(): Promise<string>;
    get offsetHeight(): Promise<number>;
    get offsetLeft(): Promise<number>;
    get offsetParent(): ISuperElement;
    get offsetTop(): Promise<number>;
    get offsetWidth(): Promise<number>;
    get spellcheck(): Promise<boolean>;
    get title(): Promise<string>;
    get translate(): Promise<boolean>;
    click(): Promise<void>;
}
export interface IHTMLElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly accessKey?: Promise<string>;
    readonly autoCapitalize?: Promise<string>;
    readonly dir?: Promise<string>;
    readonly draggable?: Promise<boolean>;
    readonly hidden?: Promise<boolean>;
    readonly inert?: Promise<boolean>;
    readonly innerText?: Promise<string>;
    readonly lang?: Promise<string>;
    readonly offsetHeight?: Promise<number>;
    readonly offsetLeft?: Promise<number>;
    readonly offsetParent?: ISuperElement;
    readonly offsetTop?: Promise<number>;
    readonly offsetWidth?: Promise<number>;
    readonly spellcheck?: Promise<boolean>;
    readonly title?: Promise<string>;
    readonly translate?: Promise<boolean>;
}
export declare const HTMLElementIsolatePropertyKeys: string[];
export declare const HTMLElementIsolateConstantKeys: never[];
