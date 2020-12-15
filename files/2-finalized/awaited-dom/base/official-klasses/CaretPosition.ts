import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ICaretPosition } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ICaretPosition, ICaretPositionProperties>();
export const awaitedHandler = new AwaitedHandler<ICaretPosition>('CaretPosition', getState, setState);

export function CaretPositionGenerator() {
  return class CaretPosition implements ICaretPosition {
    constructor() {
      initializeConstantsAndProperties<CaretPosition>(this, CaretPositionConstantKeys, CaretPositionPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ICaretPositionProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const CaretPositionPropertyKeys = [];

export const CaretPositionConstantKeys = [];
