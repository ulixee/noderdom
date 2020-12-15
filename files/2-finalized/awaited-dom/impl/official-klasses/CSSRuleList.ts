import StateMachine from '../../base/StateMachine';
import { ICSSRuleList } from '../../base/interfaces/official';
import { CSSRuleListGenerator, ICSSRuleListProperties } from '../../base/official-klasses/CSSRuleList';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ICSSRuleList, ICSSRuleListProperties>();
const CSSRuleListBaseClass = CSSRuleListGenerator();

export default class CSSRuleList extends CSSRuleListBaseClass implements ICSSRuleList {}
