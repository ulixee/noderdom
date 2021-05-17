import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLDataListElementIsolate } from '../interfaces/isolate';
import { ISuperHTMLCollection } from '../interfaces/super';
import { IHTMLOptionsCollection } from '../interfaces/official';
export declare const getState: (instance: IHTMLDataListElementIsolate) => IHTMLDataListElementIsolateProperties, setState: (instance: IHTMLDataListElementIsolate, properties: Partial<IHTMLDataListElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLDataListElementIsolate>;
export default class HTMLDataListElementIsolate implements IHTMLDataListElementIsolate {
    get options(): Promise<ISuperHTMLCollection> | IHTMLOptionsCollection;
}
export interface IHTMLDataListElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly options?: Promise<ISuperHTMLCollection> | IHTMLOptionsCollection;
}
export declare const HTMLDataListElementIsolatePropertyKeys: string[];
export declare const HTMLDataListElementIsolateConstantKeys: never[];
