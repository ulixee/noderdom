import StateMachine from '../../base/StateMachine';
import { ICSSStyleSheet, ICSSRuleList, ICSSRule } from '../../base/interfaces/official';
import { CSSStyleSheetGenerator, ICSSStyleSheetProperties } from '../../base/official-klasses/CSSStyleSheet';
import { createCSSRuleList, createCSSRule } from '../create';
import StyleSheet from './StyleSheet';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ICSSStyleSheet, ICSSStyleSheetProperties>();
const CSSStyleSheetBaseClass = CSSStyleSheetGenerator(StyleSheet);

export default class CSSStyleSheet extends CSSStyleSheetBaseClass implements ICSSStyleSheet {
  constructor() {
    super();
  }

  // properties

  public get cssRules(): ICSSRuleList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createCSSRuleList(awaitedPath.addProperty(this, 'cssRules'), awaitedOptions);
  }

  public get ownerRule(): ICSSRule {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createCSSRule(awaitedPath.addProperty(this, 'ownerRule'), awaitedOptions);
  }
}
