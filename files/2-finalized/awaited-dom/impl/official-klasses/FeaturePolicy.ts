import StateMachine from '../../base/StateMachine';
import { IFeaturePolicy } from '../../base/interfaces/official';
import { FeaturePolicyGenerator, IFeaturePolicyProperties } from '../../base/official-klasses/FeaturePolicy';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IFeaturePolicy, IFeaturePolicyProperties>();
const FeaturePolicyBaseClass = FeaturePolicyGenerator();

export default class FeaturePolicy extends FeaturePolicyBaseClass implements IFeaturePolicy {}
