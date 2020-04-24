// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IShadowRoot } from '../interfaces/dom';

export const { getState, setState, setHiddenState, setReadonlyOfShadowRoot } = StateMachine<
  IShadowRoot,
  IShadowRootProperties,
  IShadowRootReadonlyProperties
>('ShadowRoot');

export const awaitedHandler = new AwaitedHandler<IShadowRoot>('ShadowRoot', getState, setState);

export default class ShadowRoot implements IShadowRoot {
  constructor() {
    initializeConstantsAndProperties<ShadowRoot>(ShadowRoot, this, ShadowRootConstantKeys, ShadowRootPropertyKeys);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IShadowRootReadonlyProperties {}

export interface IShadowRootProperties extends IShadowRootReadonlyProperties {}

export const ShadowRootPropertyKeys = [];

export const ShadowRootConstantKeys = [];
