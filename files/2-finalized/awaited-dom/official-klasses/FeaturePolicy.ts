import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { IFeaturePolicy } from '../../awaited-base/interfaces/official';
import { FeaturePolicyGenerator, initialize, IFeaturePolicyProperties } from '../../awaited-base/official-klasses/FeaturePolicy';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IFeaturePolicy, IFeaturePolicyProperties>();
const FeaturePolicyBase = FeaturePolicyGenerator();

export default class FeaturePolicy extends FeaturePolicyBase implements IFeaturePolicy {
  constructor() {
    super();
    initialize(FeaturePolicy, this);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createFeaturePolicy<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IFeaturePolicy {
  const instance = new FeaturePolicy();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
