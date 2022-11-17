import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { IDOMTokenList } from '../interfaces/official';
export declare const getState: (instance: IDOMTokenList) => IDOMTokenListProperties, setState: (instance: IDOMTokenList, properties: Partial<IDOMTokenListProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IDOMTokenList>;
export declare const nodeFactory: NodeFactory<IDOMTokenList>;
export declare const awaitedIterator: AwaitedIterator<IDOMTokenList, string>;
export declare function DOMTokenListGenerator(): {
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
        toggle(token: string, force?: boolean): Promise<boolean>;
        then<TResult1 = IDOMTokenList, TResult2 = never>(onfulfilled?: ((value: IDOMTokenList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        forEach(callbackfn: (value: string, key: number, parent: IDOMTokenList) => void, thisArg?: any): Promise<void>;
        entries(): Promise<IterableIterator<[number, string]>>;
        keys(): Promise<IterableIterator<number>>;
        values(): Promise<IterableIterator<string>>;
        [Symbol.iterator](): Iterator<string>;
    };
};
export interface IDOMTokenListProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    createIterableName: string;
    readonly length?: Promise<number>;
    readonly value?: Promise<string>;
}
export declare const DOMTokenListPropertyKeys: string[];
export declare const DOMTokenListConstantKeys: never[];
