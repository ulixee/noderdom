import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLQuoteElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLQuoteElementIsolate) => IHTMLQuoteElementIsolateProperties, setState: (instance: IHTMLQuoteElementIsolate, properties: Partial<IHTMLQuoteElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLQuoteElementIsolate>;
export default class HTMLQuoteElementIsolate implements IHTMLQuoteElementIsolate {
    get cite(): Promise<string>;
}
export interface IHTMLQuoteElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly cite?: Promise<string>;
}
export declare const HTMLQuoteElementIsolatePropertyKeys: string[];
export declare const HTMLQuoteElementIsolateConstantKeys: never[];
