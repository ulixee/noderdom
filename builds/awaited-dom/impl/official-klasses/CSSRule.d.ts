import { ICSSRule, ICSSStyleSheet } from '../../base/interfaces/official';
import { ICSSRuleProperties } from '../../base/official-klasses/CSSRule';
export declare const getState: (instance: ICSSRule) => ICSSRuleProperties, setState: (instance: ICSSRule, properties: Partial<ICSSRuleProperties>) => void;
declare const CSSRuleBaseClass: {
    new (): {
        readonly CHARSET_RULE: number;
        readonly FONT_FACE_RULE: number;
        readonly IMPORT_RULE: number;
        readonly MARGIN_RULE: number;
        readonly MEDIA_RULE: number;
        readonly NAMESPACE_RULE: number;
        readonly PAGE_RULE: number;
        readonly STYLE_RULE: number;
        readonly cssText: Promise<string>;
        readonly parentRule: ICSSRule;
        readonly parentStyleSheet: ICSSStyleSheet;
        readonly type: Promise<number>;
    };
    readonly CHARSET_RULE: number;
    readonly FONT_FACE_RULE: number;
    readonly IMPORT_RULE: number;
    readonly MARGIN_RULE: number;
    readonly MEDIA_RULE: number;
    readonly NAMESPACE_RULE: number;
    readonly PAGE_RULE: number;
    readonly STYLE_RULE: number;
};
export default class CSSRule extends CSSRuleBaseClass implements ICSSRule {
    get parentRule(): ICSSRule;
    get parentStyleSheet(): ICSSStyleSheet;
}
export {};
