import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLLegendElementIsolate } from '../interfaces/isolate';
import { IHTMLFormElement } from '../interfaces/official';
export declare const getState: (instance: IHTMLLegendElementIsolate) => IHTMLLegendElementIsolateProperties, setState: (instance: IHTMLLegendElementIsolate, properties: Partial<IHTMLLegendElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLLegendElementIsolate>;
export default class HTMLLegendElementIsolate implements IHTMLLegendElementIsolate {
    get align(): Promise<string>;
    get form(): IHTMLFormElement;
}
export interface IHTMLLegendElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly align?: Promise<string>;
    readonly form?: IHTMLFormElement;
}
export declare const HTMLLegendElementIsolatePropertyKeys: string[];
export declare const HTMLLegendElementIsolateConstantKeys: never[];
