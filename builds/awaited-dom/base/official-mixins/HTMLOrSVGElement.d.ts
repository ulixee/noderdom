import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLOrSVGElement } from '../interfaces/official';
export declare const getState: <C = IHTMLOrSVGElement, P = IHTMLOrSVGElementProperties>(instance: C) => P, setState: <P = IHTMLOrSVGElementProperties>(instance: IHTMLOrSVGElement, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLOrSVGElement>;
export default class HTMLOrSVGElement implements IHTMLOrSVGElement {
    blur(): Promise<void>;
    focus(): Promise<void>;
}
export interface IHTMLOrSVGElementProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLOrSVGElementPropertyKeys: never[];
export declare const HTMLOrSVGElementConstantKeys: never[];
