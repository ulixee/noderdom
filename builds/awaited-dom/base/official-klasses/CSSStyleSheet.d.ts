import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ICSSStyleSheet, IStyleSheet, ICSSRuleList, ICSSRule } from '../interfaces/official';
import { IStyleSheetProperties } from './StyleSheet';
export declare const getState: (instance: ICSSStyleSheet) => ICSSStyleSheetProperties, setState: (instance: ICSSStyleSheet, properties: Partial<ICSSStyleSheetProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ICSSStyleSheet>;
export declare function CSSStyleSheetGenerator(StyleSheet: Constructable<IStyleSheet>): {
    new (): {
        readonly cssRules: ICSSRuleList;
        readonly ownerRule: ICSSRule;
        deleteRule(index: number): Promise<void>;
        insertRule(rule: string, index?: number): Promise<number>;
    };
};
export interface ICSSStyleSheetProperties extends IStyleSheetProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly cssRules?: ICSSRuleList;
    readonly ownerRule?: ICSSRule;
}
export declare const CSSStyleSheetPropertyKeys: string[];
export declare const CSSStyleSheetConstantKeys: never[];
