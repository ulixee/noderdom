import { IHeaders } from '../../base/interfaces/official';
import { IHeadersProperties } from '../../base/official-klasses/Headers';
export declare const getState: (instance: IHeaders) => IHeadersProperties, setState: (instance: IHeaders, properties: Partial<IHeadersProperties>) => void;
declare const HeadersBaseClass: {
    new (_init?: import("../../base/interfaces/official").IHeadersInit | undefined): {
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
        [Symbol.iterator](): Iterator<[string, string], any, undefined>;
    };
};
export default class Headers extends HeadersBaseClass implements IHeaders {
}
export {};
