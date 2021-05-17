import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLAudioElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLAudioElementIsolate) => IHTMLAudioElementIsolateProperties, setState: (instance: IHTMLAudioElementIsolate, properties: Partial<IHTMLAudioElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLAudioElementIsolate>;
export default class HTMLAudioElementIsolate implements IHTMLAudioElementIsolate {
}
export interface IHTMLAudioElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLAudioElementIsolatePropertyKeys: never[];
export declare const HTMLAudioElementIsolateConstantKeys: never[];
