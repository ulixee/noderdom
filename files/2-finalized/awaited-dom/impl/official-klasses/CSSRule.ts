import StateMachine from '../../base/StateMachine';
import { ICSSRule } from '../../base/interfaces/official';
import { CSSRuleGenerator, ICSSRuleProperties } from '../../base/official-klasses/CSSRule';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ICSSRule, ICSSRuleProperties>();
const CSSRuleBaseClass = CSSRuleGenerator();

export default class CSSRule extends CSSRuleBaseClass implements ICSSRule {}
