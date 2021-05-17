import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import { IHTMLCollectionBaseIsolate } from '../interfaces/isolate';
import { ISuperElement } from '../interfaces/super';
export declare const getState: (instance: IHTMLCollectionBaseIsolate) => IHTMLCollectionBaseIsolateProperties, setState: (instance: IHTMLCollectionBaseIsolate, properties: Partial<IHTMLCollectionBaseIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLCollectionBaseIsolate>;
export declare const awaitedIterator: AwaitedIterator<IHTMLCollectionBaseIsolate, ISuperElement>;
export default class HTMLCollectionBaseIsolate implements IHTMLCollectionBaseIsolate {
    get length(): Promise<number>;
    item(index: number): ISuperElement;
    [Symbol.iterator](): Iterator<ISuperElement>;
    [index: number]: ISuperElement;
}
export interface IHTMLCollectionBaseIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    createIterableName: string;
    readonly length?: Promise<number>;
}
export declare const HTMLCollectionBaseIsolatePropertyKeys: string[];
export declare const HTMLCollectionBaseIsolateConstantKeys: never[];
