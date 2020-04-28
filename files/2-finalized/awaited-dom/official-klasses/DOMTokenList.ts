import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
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

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createDOMTokenList(awaitedPath: AwaitedPath, awaitedOptions: any): DOMTokenList {
  const instance = new DOMTokenList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
