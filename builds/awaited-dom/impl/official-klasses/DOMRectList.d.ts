import { IDOMRectList, IDOMRect } from '../../base/interfaces/official';
import { IDOMRectListProperties } from '../../base/official-klasses/DOMRectList';
export declare const getState: (instance: IDOMRectList) => IDOMRectListProperties, setState: (instance: IDOMRectList, properties: Partial<IDOMRectListProperties>) => void;
declare const DOMRectListBaseClass: {
    new (): {
        [index: number]: IDOMRect;
        readonly length: Promise<number>;
        item(index: number): IDOMRect;
        then<TResult1 = IDOMRectList, TResult2 = never>(onfulfilled?: ((value: IDOMRectList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<IDOMRect, any, undefined>;
    };
};
export default class DOMRectList extends DOMRectListBaseClass implements IDOMRectList {
    item(index: number): IDOMRect;
}
export {};
