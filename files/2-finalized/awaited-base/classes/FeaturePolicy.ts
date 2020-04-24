// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IFeaturePolicy } from '../interfaces/dom';

export const { getState, setState, setHiddenState, setReadonlyOfFeaturePolicy } = StateMachine<
  IFeaturePolicy,
  IFeaturePolicyProperties,
  IFeaturePolicyReadonlyProperties
>('FeaturePolicy');

export const awaitedHandler = new AwaitedHandler<IFeaturePolicy>('FeaturePolicy', getState, setState);

export default class FeaturePolicy implements IFeaturePolicy {
  constructor() {
    initializeConstantsAndProperties<FeaturePolicy>(FeaturePolicy, this, FeaturePolicyConstantKeys, FeaturePolicyPropertyKeys);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IFeaturePolicyReadonlyProperties {}

export interface IFeaturePolicyProperties extends IFeaturePolicyReadonlyProperties {}

export const FeaturePolicyPropertyKeys = [];

export const FeaturePolicyConstantKeys = [];
