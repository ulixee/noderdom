import StateMachine from '../../awaited-base/StateMachine';
import { IDOMTokenList } from '../../awaited-base/interfaces/official';
import { DOMTokenListGenerator, initialize, IDOMTokenListProperties } from '../../awaited-base/official-klasses/DOMTokenList';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMTokenList, IDOMTokenListProperties>();
const DOMTokenListBase = DOMTokenListGenerator();

export default class DOMTokenList extends DOMTokenListBase implements IDOMTokenList {
  constructor() {
    super();
    initialize(DOMTokenList, this);
  }
}
