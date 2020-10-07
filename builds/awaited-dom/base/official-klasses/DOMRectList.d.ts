import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import NodeAttacher from '../NodeAttacher';
import { IDOMRectList, IDOMRect } from '../interfaces/official';
export declare const getState: (instance: IDOMRectList) => IDOMRectListProperties, setState: (instance: IDOMRectList, properties: Partial<IDOMRectListProperties>) => void, recordProxy: (proxy: IDOMRectList, instance: IDOMRectList) => void;
export declare const awaitedHandler: AwaitedHandler<IDOMRectList>;
export declare const nodeAttacher: NodeAttacher<IDOMRectList>;
export declare const awaitedIterator: AwaitedIterator<IDOMRectList, IDOMRect>;
export declare function DOMRectListGenerator(): {
    new (): {
        [index: number]: IDOMRect;
        readonly length: Promise<number>;
        item(index: number): IDOMRect;
        then<TResult1 = IDOMRectList, TResult2 = never>(onfulfilled?: ((value: IDOMRectList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): IterableIterator<IDOMRect>;
    };
};
export interface IDOMRectListProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    createIterableName: string;
    readonly length?: Promise<number>;
}
export declare const DOMRectListPropertyKeys: string[];
export declare const DOMRectListConstantKeys: never[];
