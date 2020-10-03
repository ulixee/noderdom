import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IFeaturePolicy } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IFeaturePolicy, IFeaturePolicyProperties>();
export const awaitedHandler = new AwaitedHandler<IFeaturePolicy>('FeaturePolicy', getState, setState);

export function FeaturePolicyGenerator() {
  return class FeaturePolicy implements IFeaturePolicy {
    constructor() {
      initializeConstantsAndProperties<FeaturePolicy>(this, FeaturePolicyConstantKeys, FeaturePolicyPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IFeaturePolicyProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const FeaturePolicyPropertyKeys = [];

export const FeaturePolicyConstantKeys = [];
