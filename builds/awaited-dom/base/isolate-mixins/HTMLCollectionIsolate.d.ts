import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLCollectionIsolate } from '../interfaces/isolate';
import { ISuperElement } from '../interfaces/super';
export declare const getState: (instance: IHTMLCollectionIsolate) => IHTMLCollectionIsolateProperties, setState: (instance: IHTMLCollectionIsolate, properties: Partial<IHTMLCollectionIsolateProperties>) => void, recordProxy: (proxy: IHTMLCollectionIsolate, instance: IHTMLCollectionIsolate) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLCollectionIsolate>;
export default class HTMLCollectionIsolate implements IHTMLCollectionIsolate {
    namedItem(name: string): ISuperElement;
}
export interface IHTMLCollectionIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLCollectionIsolatePropertyKeys: never[];
export declare const HTMLCollectionIsolateConstantKeys: never[];
