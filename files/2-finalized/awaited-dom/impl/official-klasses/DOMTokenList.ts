import StateMachine from '../../base/StateMachine';
import { IDOMTokenList } from '../../base/interfaces/official';
import { DOMTokenListGenerator, IDOMTokenListProperties } from '../../base/official-klasses/DOMTokenList';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMTokenList, IDOMTokenListProperties>();
const DOMTokenListBaseClass = DOMTokenListGenerator();

export default class DOMTokenList extends DOMTokenListBaseClass implements IDOMTokenList {}
