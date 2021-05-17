import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IValidityState } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IValidityState, IValidityStateProperties>();
export const awaitedHandler = new AwaitedHandler<IValidityState>('ValidityState', getState, setState);

export function ValidityStateGenerator() {
  return class ValidityState implements IValidityState {
    constructor() {
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, ValidityStatePropertyKeys, ValidityStateConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IValidityStateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const ValidityStatePropertyKeys = [];

export const ValidityStateConstantKeys = [];
