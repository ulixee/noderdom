import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import NodeAttacher from '../NodeAttacher';
import { IHeaders } from '../interfaces/official';
export declare const getState: (instance: IHeaders) => IHeadersProperties, setState: (instance: IHeaders, properties: Partial<IHeadersProperties>) => void, recordProxy: (proxy: IHeaders, instance: IHeaders) => void;
export declare const awaitedHandler: AwaitedHandler<IHeaders>;
export declare const nodeAttacher: NodeAttacher<IHeaders>;
export declare const awaitedIterator: AwaitedIterator<IHeaders, [string, string]>;
export declare function HeadersGenerator(): {
    new (_init?: Record<string, string> | Iterable<Iterable<string>> | undefined): {
        append(name: string, value: string): Promise<void>;
        delete(name: string): Promise<void>;
        get(name: string): Promise<string | null>;
        has(name: string): Promise<boolean>;
        set(name: string, value: string): Promise<void>;
        then<TResult1 = IHeaders, TResult2 = never>(onfulfilled?: ((value: IHeaders) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        forEach(callbackfn: (value: string, key: string, parent: IHeaders) => void, thisArg?: any): Promise<void>;
        entries(): Promise<IterableIterator<[string, string]>>;
        keys(): Promise<IterableIterator<string>>;
        values(): Promise<IterableIterator<string>>;
        [Symbol.iterator](): IterableIterator<[string, string]>;
    };
};
export interface IHeadersProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
}
export declare const HeadersPropertyKeys: never[];
export declare const HeadersConstantKeys: never[];
