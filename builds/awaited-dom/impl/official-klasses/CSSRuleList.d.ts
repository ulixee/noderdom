import { ICSSRuleList, ICSSRule } from '../../base/interfaces/official';
import { ICSSRuleListProperties } from '../../base/official-klasses/CSSRuleList';
export declare const getState: (instance: ICSSRuleList) => ICSSRuleListProperties, setState: (instance: ICSSRuleList, properties: Partial<ICSSRuleListProperties>) => void;
declare const CSSRuleListBaseClass: {
    new (): {
        [index: number]: ICSSRule;
        readonly length: Promise<number>;
        item(index: number): ICSSRule;
        then<TResult1 = ICSSRuleList, TResult2 = never>(onfulfilled?: ((value: ICSSRuleList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<ICSSRule, any, undefined>;
    };
};
export default class CSSRuleList extends CSSRuleListBaseClass implements ICSSRuleList {
    item(index: number): ICSSRule;
}
export {};
