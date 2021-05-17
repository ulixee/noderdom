import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { ICSSRuleList, ICSSRule } from '../interfaces/official';
export declare const getState: (instance: ICSSRuleList) => ICSSRuleListProperties, setState: (instance: ICSSRuleList, properties: Partial<ICSSRuleListProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ICSSRuleList>;
export declare const nodeFactory: NodeFactory<ICSSRuleList>;
export declare const awaitedIterator: AwaitedIterator<ICSSRuleList, ICSSRule>;
export declare function CSSRuleListGenerator(): {
    new (): {
        [index: number]: ICSSRule;
        readonly length: Promise<number>;
        item(index: number): ICSSRule;
        then<TResult1 = ICSSRuleList, TResult2 = never>(onfulfilled?: ((value: ICSSRuleList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<ICSSRule>;
    };
};
export interface ICSSRuleListProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    createIterableName: string;
    readonly length?: Promise<number>;
}
export declare const CSSRuleListPropertyKeys: string[];
export declare const CSSRuleListConstantKeys: never[];
