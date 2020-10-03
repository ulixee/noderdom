import StateMachine from '../../base/StateMachine';
import { IShadowRoot } from '../../base/interfaces/official';
import { ShadowRootGenerator, IShadowRootProperties } from '../../base/official-klasses/ShadowRoot';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IShadowRoot, IShadowRootProperties>();
const ShadowRootBaseClass = ShadowRootGenerator();

export default class ShadowRoot extends ShadowRootBaseClass implements IShadowRoot {}
