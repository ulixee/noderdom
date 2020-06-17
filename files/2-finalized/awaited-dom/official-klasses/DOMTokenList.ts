import StateMachine from '../../awaited-base/StateMachine';
import { IDOMTokenList } from '../../awaited-base/interfaces/official';
import { DOMTokenListGenerator, IDOMTokenListProperties } from '../../awaited-base/official-klasses/DOMTokenList';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMTokenList, IDOMTokenListProperties>();
const DOMTokenListBaseClass = DOMTokenListGenerator();

export default class DOMTokenList extends DOMTokenListBaseClass implements IDOMTokenList {}
