import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLOptionsCollectionIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLOptionsCollectionIsolate) => IHTMLOptionsCollectionIsolateProperties, setState: (instance: IHTMLOptionsCollectionIsolate, properties: Partial<IHTMLOptionsCollectionIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLOptionsCollectionIsolate>;
export default class HTMLOptionsCollectionIsolate implements IHTMLOptionsCollectionIsolate {
}
export interface IHTMLOptionsCollectionIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLOptionsCollectionIsolatePropertyKeys: never[];
export declare const HTMLOptionsCollectionIsolateConstantKeys: never[];
