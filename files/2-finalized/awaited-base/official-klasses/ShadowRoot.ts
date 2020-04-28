import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { IShadowRoot } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IShadowRoot, IShadowRootProperties>();
export const awaitedHandler = new AwaitedHandler<IShadowRoot>('ShadowRoot', getState, setState);

export function ShadowRootGenerator() {
  return class ShadowRoot implements IShadowRoot {
    constructor() {
      initialize(ShadowRoot, this);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IShadowRootProperties {}

export const ShadowRootPropertyKeys = [];

export const ShadowRootConstantKeys = [];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<IShadowRoot>, self: IShadowRoot) {
  initializeConstantsAndProperties<IShadowRoot>(Klass, self, ShadowRootConstantKeys, ShadowRootPropertyKeys);
}
