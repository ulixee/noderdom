import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IFeaturePolicy } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IFeaturePolicy, IFeaturePolicyProperties>();
export const awaitedHandler = new AwaitedHandler<IFeaturePolicy>('FeaturePolicy', getState, setState);
export const nodeAttacher = new NodeAttacher<IFeaturePolicy>('createFeaturePolicy', getState, setState, awaitedHandler);

export function FeaturePolicyGenerator() {
  return class FeaturePolicy implements IFeaturePolicy, PromiseLike<IFeaturePolicy> {
    constructor() {
      initializeConstantsAndProperties<FeaturePolicy>(this, FeaturePolicyConstantKeys, FeaturePolicyPropertyKeys);
    }

    public then<TResult1 = IFeaturePolicy, TResult2 = never>(onfulfilled?: ((value: IFeaturePolicy) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IFeaturePolicyProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const FeaturePolicyPropertyKeys = [];

export const FeaturePolicyConstantKeys = [];
