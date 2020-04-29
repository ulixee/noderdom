import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { IDOMRectList } from '../../awaited-base/interfaces/official';
import { DOMRectListGenerator, initialize, IDOMRectListProperties } from '../../awaited-base/official-klasses/DOMRectList';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMRectList, IDOMRectListProperties>();
const DOMRectListBase = DOMRectListGenerator();

export default class DOMRectList extends DOMRectListBase implements IDOMRectList {
  constructor() {
    super();
    initialize(DOMRectList, this);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createDOMRectList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDOMRectList {
  const instance = new DOMRectList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
