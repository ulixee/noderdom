import StateMachine from '../../awaited-base/StateMachine';
import { IFeaturePolicy } from '../../awaited-base/interfaces/official';
import { FeaturePolicyGenerator, IFeaturePolicyProperties } from '../../awaited-base/official-klasses/FeaturePolicy';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IFeaturePolicy, IFeaturePolicyProperties>();
const FeaturePolicyBase = FeaturePolicyGenerator();

export default class FeaturePolicy extends FeaturePolicyBase implements IFeaturePolicy {}
