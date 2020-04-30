import StateMachine from '../../awaited-base/StateMachine';
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
