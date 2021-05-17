import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLOrSVGElement } from '../interfaces/official';
export declare const getState: (instance: IHTMLOrSVGElement) => IHTMLOrSVGElementProperties, setState: (instance: IHTMLOrSVGElement, properties: Partial<IHTMLOrSVGElementProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLOrSVGElement>;
export default class HTMLOrSVGElement implements IHTMLOrSVGElement {
    get dataset(): Promise<Record<string, string>>;
    get nonce(): Promise<string>;
    get tabIndex(): Promise<number>;
    blur(): Promise<void>;
    focus(): Promise<void>;
}
export interface IHTMLOrSVGElementProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly dataset?: Promise<Record<string, string>>;
    readonly nonce?: Promise<string>;
    readonly tabIndex?: Promise<number>;
}
export declare const HTMLOrSVGElementPropertyKeys: string[];
export declare const HTMLOrSVGElementConstantKeys: never[];
