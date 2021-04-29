import StateMachine from '../../base/StateMachine';
import { ICSSRuleList, ICSSRule } from '../../base/interfaces/official';
import { CSSRuleListGenerator, ICSSRuleListProperties } from '../../base/official-klasses/CSSRuleList';
import { createCSSRule } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ICSSRuleList, ICSSRuleListProperties>();
const CSSRuleListBaseClass = CSSRuleListGenerator();

export default class CSSRuleList extends CSSRuleListBaseClass implements ICSSRuleList {
  public item(index: number): ICSSRule {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createCSSRule(awaitedPath.addMethod(this, 'item', index), awaitedOptions);
  }
}
