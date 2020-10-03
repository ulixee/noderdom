import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IShadowRoot } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IShadowRoot, IShadowRootProperties>();
export const awaitedHandler = new AwaitedHandler<IShadowRoot>('ShadowRoot', getState, setState);

export function ShadowRootGenerator() {
  return class ShadowRoot implements IShadowRoot {
    constructor() {
      initializeConstantsAndProperties<ShadowRoot>(this, ShadowRootConstantKeys, ShadowRootPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IShadowRootProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const ShadowRootPropertyKeys = [];

export const ShadowRootConstantKeys = [];
