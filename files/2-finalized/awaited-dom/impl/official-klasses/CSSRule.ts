import StateMachine from '../../base/StateMachine';
import { ICSSRule, ICSSStyleSheet } from '../../base/interfaces/official';
import { CSSRuleGenerator, ICSSRuleProperties } from '../../base/official-klasses/CSSRule';
import { createCSSRule, createCSSStyleSheet } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ICSSRule, ICSSRuleProperties>();
const CSSRuleBaseClass = CSSRuleGenerator();

export default class CSSRule extends CSSRuleBaseClass implements ICSSRule {
  public get parentRule(): ICSSRule {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createCSSRule(awaitedPath.addProperty(this, 'parentRule'), awaitedOptions);
  }

  public get parentStyleSheet(): ICSSStyleSheet {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createCSSStyleSheet(awaitedPath.addProperty(this, 'parentStyleSheet'), awaitedOptions);
  }
}
