import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLMapElementIsolate } from '../interfaces/isolate';
import { ISuperHTMLCollection } from '../interfaces/super';
export declare const getState: (instance: IHTMLMapElementIsolate) => IHTMLMapElementIsolateProperties, setState: (instance: IHTMLMapElementIsolate, properties: Partial<IHTMLMapElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLMapElementIsolate>;
export default class HTMLMapElementIsolate implements IHTMLMapElementIsolate {
    get areas(): ISuperHTMLCollection;
    get name(): Promise<string>;
}
export interface IHTMLMapElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly areas?: ISuperHTMLCollection;
    readonly name?: Promise<string>;
}
export declare const HTMLMapElementIsolatePropertyKeys: string[];
export declare const HTMLMapElementIsolateConstantKeys: never[];
