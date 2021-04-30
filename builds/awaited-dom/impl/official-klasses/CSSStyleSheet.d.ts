import { ICSSStyleSheet, ICSSRuleList, ICSSRule } from '../../base/interfaces/official';
import { ICSSStyleSheetProperties } from '../../base/official-klasses/CSSStyleSheet';
export declare const getState: (instance: ICSSStyleSheet) => ICSSStyleSheetProperties, setState: (instance: ICSSStyleSheet, properties: Partial<ICSSStyleSheetProperties>) => void, recordProxy: (proxy: ICSSStyleSheet, instance: ICSSStyleSheet) => void;
declare const CSSStyleSheetBaseClass: {
    new (): {
        readonly cssRules: ICSSRuleList;
        readonly ownerRule: ICSSRule;
        deleteRule(index: number): Promise<void>;
        insertRule(rule: string, index?: number | undefined): Promise<number>;
    };
};
export default class CSSStyleSheet extends CSSStyleSheetBaseClass implements ICSSStyleSheet {
    constructor();
    get cssRules(): ICSSRuleList;
    get ownerRule(): ICSSRule;
}
export {};
