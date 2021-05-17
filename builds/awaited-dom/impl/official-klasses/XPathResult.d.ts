import { IXPathResult } from '../../base/interfaces/official';
import { ISuperNode } from '../../base/interfaces/super';
import { IXPathResultProperties } from '../../base/official-klasses/XPathResult';
export declare const getState: (instance: IXPathResult) => IXPathResultProperties, setState: (instance: IXPathResult, properties: Partial<IXPathResultProperties>) => void;
declare const XPathResultBaseClass: {
    new (): {
        readonly ANY_TYPE: number;
        readonly ANY_UNORDERED_NODE_TYPE: number;
        readonly BOOLEAN_TYPE: number;
        readonly FIRST_ORDERED_NODE_TYPE: number;
        readonly NUMBER_TYPE: number;
        readonly ORDERED_NODE_ITERATOR_TYPE: number;
        readonly ORDERED_NODE_SNAPSHOT_TYPE: number;
        readonly STRING_TYPE: number;
        readonly UNORDERED_NODE_ITERATOR_TYPE: number;
        readonly UNORDERED_NODE_SNAPSHOT_TYPE: number;
        readonly booleanValue: Promise<boolean>;
        readonly invalidIteratorState: Promise<boolean>;
        readonly numberValue: Promise<number>;
        readonly resultType: Promise<number>;
        readonly singleNodeValue: ISuperNode;
        readonly snapshotLength: Promise<number>;
        readonly stringValue: Promise<string>;
        iterateNext(): ISuperNode;
        snapshotItem(index: number): ISuperNode;
        then<TResult1 = IXPathResult, TResult2 = never>(onfulfilled?: ((value: IXPathResult) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
    };
    readonly ANY_TYPE: number;
    readonly ANY_UNORDERED_NODE_TYPE: number;
    readonly BOOLEAN_TYPE: number;
    readonly FIRST_ORDERED_NODE_TYPE: number;
    readonly NUMBER_TYPE: number;
    readonly ORDERED_NODE_ITERATOR_TYPE: number;
    readonly ORDERED_NODE_SNAPSHOT_TYPE: number;
    readonly STRING_TYPE: number;
    readonly UNORDERED_NODE_ITERATOR_TYPE: number;
    readonly UNORDERED_NODE_SNAPSHOT_TYPE: number;
};
export default class XPathResult extends XPathResultBaseClass implements IXPathResult {
    get singleNodeValue(): ISuperNode;
    iterateNext(): ISuperNode;
    snapshotItem(index: number): ISuperNode;
}
export {};
