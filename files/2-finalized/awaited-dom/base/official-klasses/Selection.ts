import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ISelection } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ISelection, ISelectionProperties>();
export const awaitedHandler = new AwaitedHandler<ISelection>('Selection', getState, setState);

export function SelectionGenerator() {
  return class Selection implements ISelection {
    constructor() {
      initializeConstantsAndProperties<Selection>(this, SelectionConstantKeys, SelectionPropertyKeys);
    }

    // methods

    public toString(): Promise<string> {
      return awaitedHandler.runMethod<string>(this, 'toString', []);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISelectionProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const SelectionPropertyKeys = [];

export const SelectionConstantKeys = [];
