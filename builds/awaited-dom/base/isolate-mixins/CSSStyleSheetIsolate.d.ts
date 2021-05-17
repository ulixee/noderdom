import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { ICSSStyleSheetIsolate } from '../interfaces/isolate';
import { ICSSRuleList, ICSSRule } from '../interfaces/official';
export declare const getState: (instance: ICSSStyleSheetIsolate) => ICSSStyleSheetIsolateProperties, setState: (instance: ICSSStyleSheetIsolate, properties: Partial<ICSSStyleSheetIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ICSSStyleSheetIsolate>;
export default class CSSStyleSheetIsolate implements ICSSStyleSheetIsolate {
    get cssRules(): ICSSRuleList;
    get ownerRule(): ICSSRule;
    deleteRule(index: number): Promise<void>;
    insertRule(rule: string, index?: number): Promise<number>;
}
export interface ICSSStyleSheetIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly cssRules?: ICSSRuleList;
    readonly ownerRule?: ICSSRule;
}
export declare const CSSStyleSheetIsolatePropertyKeys: string[];
export declare const CSSStyleSheetIsolateConstantKeys: never[];
