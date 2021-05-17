import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IFeaturePolicy } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IFeaturePolicy, IFeaturePolicyProperties>();
export const awaitedHandler = new AwaitedHandler<IFeaturePolicy>('FeaturePolicy', getState, setState);

export function FeaturePolicyGenerator() {
  return class FeaturePolicy implements IFeaturePolicy {
    constructor() {
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, FeaturePolicyPropertyKeys, FeaturePolicyConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IFeaturePolicyProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const FeaturePolicyPropertyKeys = [];

export const FeaturePolicyConstantKeys = [];
