import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IShadowRoot } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IShadowRoot, IShadowRootProperties>();
export const awaitedHandler = new AwaitedHandler<IShadowRoot>('ShadowRoot', getState, setState);
export const nodeAttacher = new NodeAttacher<IShadowRoot>('createShadowRoot', getState, setState, awaitedHandler);

export function ShadowRootGenerator() {
  return class ShadowRoot implements IShadowRoot, PromiseLike<IShadowRoot> {
    constructor() {
      initializeConstantsAndProperties<ShadowRoot>(this, ShadowRootConstantKeys, ShadowRootPropertyKeys);
    }

    public then<TResult1 = IShadowRoot, TResult2 = never>(onfulfilled?: ((value: IShadowRoot) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IShadowRootProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const ShadowRootPropertyKeys = [];

export const ShadowRootConstantKeys = [];
