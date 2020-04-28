import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { IFeaturePolicy } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IFeaturePolicy, IFeaturePolicyProperties>();
export const awaitedHandler = new AwaitedHandler<IFeaturePolicy>('FeaturePolicy', getState, setState);

export function FeaturePolicyGenerator() {
  return class FeaturePolicy implements IFeaturePolicy {
    constructor() {
      initialize(FeaturePolicy, this);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IFeaturePolicyProperties {}

export const FeaturePolicyPropertyKeys = [];

export const FeaturePolicyConstantKeys = [];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<IFeaturePolicy>, self: IFeaturePolicy) {
  initializeConstantsAndProperties<IFeaturePolicy>(Klass, self, FeaturePolicyConstantKeys, FeaturePolicyPropertyKeys);
}
