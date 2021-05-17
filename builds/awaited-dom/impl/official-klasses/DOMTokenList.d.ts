import { IDOMTokenList } from '../../base/interfaces/official';
import { IDOMTokenListProperties } from '../../base/official-klasses/DOMTokenList';
export declare const getState: (instance: IDOMTokenList) => IDOMTokenListProperties, setState: (instance: IDOMTokenList, properties: Partial<IDOMTokenListProperties>) => void;
declare const DOMTokenListBaseClass: {
    new (): {
        [index: number]: string;
        readonly length: Promise<number>;
        readonly value: Promise<string>;
        add(...tokens: string[]): Promise<void>;
        contains(token: string): Promise<boolean>;
        item(index: number): Promise<string | null>;
        remove(...tokens: string[]): Promise<void>;
        replace(token: string, newToken: string): Promise<boolean>;
        supports(token: string): Promise<boolean>;
        toString(): Promise<string>;
        toggle(token: string, force?: boolean | undefined): Promise<boolean>;
        then<TResult1 = IDOMTokenList, TResult2 = never>(onfulfilled?: ((value: IDOMTokenList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        forEach(callbackfn: (value: string, key: number, parent: IDOMTokenList) => void, thisArg?: any): Promise<void>;
        entries(): Promise<IterableIterator<[number, string]>>;
        keys(): Promise<IterableIterator<number>>;
        values(): Promise<IterableIterator<string>>;
        [Symbol.iterator](): Iterator<string, any, undefined>;
    };
};
export default class DOMTokenList extends DOMTokenListBaseClass implements IDOMTokenList {
}
export {};
