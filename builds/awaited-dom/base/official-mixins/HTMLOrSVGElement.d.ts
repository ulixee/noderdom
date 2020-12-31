import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLOrSVGElement, IDOMStringMap } from '../interfaces/official';
export declare const getState: (instance: IHTMLOrSVGElement) => IHTMLOrSVGElementProperties, setState: (instance: IHTMLOrSVGElement, properties: Partial<IHTMLOrSVGElementProperties>) => void, recordProxy: (proxy: IHTMLOrSVGElement, instance: IHTMLOrSVGElement) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLOrSVGElement>;
export default class HTMLOrSVGElement implements IHTMLOrSVGElement {
    get dataset(): IDOMStringMap;
    get nonce(): Promise<string>;
    get tabIndex(): Promise<number>;
    blur(): Promise<void>;
    focus(): Promise<void>;
}
export interface IHTMLOrSVGElementProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly dataset?: IDOMStringMap;
    readonly nonce?: Promise<string>;
    readonly tabIndex?: Promise<number>;
}
export declare const HTMLOrSVGElementPropertyKeys: string[];
export declare const HTMLOrSVGElementConstantKeys: never[];
