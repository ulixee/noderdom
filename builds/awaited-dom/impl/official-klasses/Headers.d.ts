import { IHeaders } from '../../base/interfaces/official';
import { IHeadersProperties } from '../../base/official-klasses/Headers';
export declare const getState: <C = IHeaders, P = IHeadersProperties>(instance: C) => P, setState: <P = IHeadersProperties>(instance: IHeaders, properties: P) => void;
declare const HeadersBaseClass: {
    new (_init?: Iterable<Iterable<string>> | Record<string, string> | undefined): {
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
export default class Headers extends HeadersBaseClass implements IHeaders {
}
export {};
