import StateMachine from '../../base/StateMachine';
import { ICSSStyleSheetIsolate } from '../../base/interfaces/isolate';
import { ICSSRuleList, ICSSRule } from '../../base/interfaces/official';
import CSSStyleSheetIsolateBase, { ICSSStyleSheetIsolateProperties } from '../../base/isolate-mixins/CSSStyleSheetIsolate';
import { createCSSRuleList, createCSSRule } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ICSSStyleSheetIsolate, ICSSStyleSheetIsolateProperties>();

export default class CSSStyleSheetIsolate extends CSSStyleSheetIsolateBase implements ICSSStyleSheetIsolate {
  public get cssRules(): ICSSRuleList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createCSSRuleList(awaitedPath.addProperty(this, 'cssRules'), awaitedOptions);
  }

  public get ownerRule(): ICSSRule {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createCSSRule(awaitedPath.addProperty(this, 'ownerRule'), awaitedOptions);
  }
}
