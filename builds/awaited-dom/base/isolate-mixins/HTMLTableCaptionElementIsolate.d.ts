import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTableCaptionElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLTableCaptionElementIsolate) => IHTMLTableCaptionElementIsolateProperties, setState: (instance: IHTMLTableCaptionElementIsolate, properties: Partial<IHTMLTableCaptionElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLTableCaptionElementIsolate>;
export default class HTMLTableCaptionElementIsolate implements IHTMLTableCaptionElementIsolate {
}
export interface IHTMLTableCaptionElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLTableCaptionElementIsolatePropertyKeys: never[];
export declare const HTMLTableCaptionElementIsolateConstantKeys: never[];
