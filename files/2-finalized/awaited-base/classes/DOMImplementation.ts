// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IDOMImplementation } from '../interfaces/dom';

export const { getState, setState, setHiddenState, setReadonlyOfDOMImplementation } = StateMachine<
  IDOMImplementation,
  IDOMImplementationProperties,
  IDOMImplementationReadonlyProperties
>('DOMImplementation');

export const awaitedHandler = new AwaitedHandler<IDOMImplementation>('DOMImplementation', getState, setState);

export default class DOMImplementation implements IDOMImplementation {
  constructor() {
    initializeConstantsAndProperties<DOMImplementation>(DOMImplementation, this, DOMImplementationConstantKeys, DOMImplementationPropertyKeys);
  }

  // methods

  public hasFeature(): Promise<boolean> {
    return awaitedHandler.runMethod<boolean>(this, 'hasFeature', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMImplementationReadonlyProperties {}

export interface IDOMImplementationProperties extends IDOMImplementationReadonlyProperties {}

export const DOMImplementationPropertyKeys = [];

export const DOMImplementationConstantKeys = [];
