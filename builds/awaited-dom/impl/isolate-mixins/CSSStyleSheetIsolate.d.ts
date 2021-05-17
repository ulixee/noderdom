import { ICSSStyleSheetIsolate } from '../../base/interfaces/isolate';
import { ICSSRuleList, ICSSRule } from '../../base/interfaces/official';
import CSSStyleSheetIsolateBase, { ICSSStyleSheetIsolateProperties } from '../../base/isolate-mixins/CSSStyleSheetIsolate';
export declare const getState: (instance: ICSSStyleSheetIsolate) => ICSSStyleSheetIsolateProperties, setState: (instance: ICSSStyleSheetIsolate, properties: Partial<ICSSStyleSheetIsolateProperties>) => void;
export default class CSSStyleSheetIsolate extends CSSStyleSheetIsolateBase implements ICSSStyleSheetIsolate {
    get cssRules(): ICSSRuleList;
    get ownerRule(): ICSSRule;
}
