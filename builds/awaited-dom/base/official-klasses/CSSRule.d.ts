import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { ICSSRule, ICSSStyleSheet } from '../interfaces/official';
export declare const getState: (instance: ICSSRule) => ICSSRuleProperties, setState: (instance: ICSSRule, properties: Partial<ICSSRuleProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ICSSRule>;
export declare function CSSRuleGenerator(): {
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
export interface ICSSRuleProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly cssText?: Promise<string>;
    readonly parentRule?: ICSSRule;
    readonly parentStyleSheet?: ICSSStyleSheet;
    readonly type?: Promise<number>;
}
export declare const CSSRulePropertyKeys: string[];
export declare const CSSRuleConstantKeys: string[];
