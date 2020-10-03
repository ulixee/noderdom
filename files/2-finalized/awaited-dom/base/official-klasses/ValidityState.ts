import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IValidityState } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IValidityState, IValidityStateProperties>();
export const awaitedHandler = new AwaitedHandler<IValidityState>('ValidityState', getState, setState);

export function ValidityStateGenerator() {
  return class ValidityState implements IValidityState {
    constructor() {
      initializeConstantsAndProperties<ValidityState>(this, ValidityStateConstantKeys, ValidityStatePropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IValidityStateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const ValidityStatePropertyKeys = [];

export const ValidityStateConstantKeys = [];
