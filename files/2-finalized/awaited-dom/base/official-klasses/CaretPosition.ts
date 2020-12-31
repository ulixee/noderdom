import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ICaretPosition, IDOMRect } from '../interfaces/official';
import { ISuperNode } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ICaretPosition, ICaretPositionProperties>();
export const awaitedHandler = new AwaitedHandler<ICaretPosition>('CaretPosition', getState, setState);

export function CaretPositionGenerator() {
  return class CaretPosition implements ICaretPosition {
    constructor() {
      initializeConstantsAndProperties<CaretPosition>(this, CaretPositionConstantKeys, CaretPositionPropertyKeys);
    }

    // properties

    public get offset(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'offset', false);
    }

    public get offsetNode(): ISuperNode {
      throw new Error('CaretPosition.offsetNode getter not implemented');
    }

    // methods

    public getClientRect(): IDOMRect {
      throw new Error('CaretPosition.getClientRect not implemented');
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ICaretPositionProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly offset?: Promise<number>;
  readonly offsetNode?: ISuperNode;
}

export const CaretPositionPropertyKeys = ['offset', 'offsetNode'];

export const CaretPositionConstantKeys = [];
