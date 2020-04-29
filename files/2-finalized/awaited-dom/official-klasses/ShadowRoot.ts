import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { IShadowRoot } from '../../awaited-base/interfaces/official';
import { ShadowRootGenerator, initialize, IShadowRootProperties } from '../../awaited-base/official-klasses/ShadowRoot';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IShadowRoot, IShadowRootProperties>();
const ShadowRootBase = ShadowRootGenerator();

export default class ShadowRoot extends ShadowRootBase implements IShadowRoot {
  constructor() {
    super();
    initialize(ShadowRoot, this);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createShadowRoot<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IShadowRoot {
  const instance = new ShadowRoot();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
