import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import { IHTMLCollectionBaseIsolate } from '../interfaces/isolate';
import { ISuperElement } from '../interfaces/super';
export declare const getState: <C = IHTMLCollectionBaseIsolate, P = IHTMLCollectionBaseIsolateProperties>(instance: C) => P, setState: <P = IHTMLCollectionBaseIsolateProperties>(instance: IHTMLCollectionBaseIsolate, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLCollectionBaseIsolate>;
export declare const awaitedIterator: AwaitedIterator<IHTMLCollectionBaseIsolate, ISuperElement>;
export default class HTMLCollectionBaseIsolate implements IHTMLCollectionBaseIsolate {
    get length(): Promise<number>;
    item(index: number): Promise<ISuperElement | null>;
    [Symbol.iterator](): IterableIterator<ISuperElement>;
}
export interface IHTMLCollectionBaseIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly length?: Promise<number>;
}
export declare const HTMLCollectionBaseIsolatePropertyKeys: string[];
export declare const HTMLCollectionBaseIsolateConstantKeys: never[];
