import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IDOMImplementation } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMImplementation, IDOMImplementationProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMImplementation>('DOMImplementation', getState, setState);

export function DOMImplementationGenerator() {
  return class DOMImplementation implements IDOMImplementation {
    constructor() {
      initializeConstantsAndProperties<DOMImplementation>(this, DOMImplementationConstantKeys, DOMImplementationPropertyKeys);
    }

    // methods

    public hasFeature(): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'hasFeature', []);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMImplementationProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const DOMImplementationPropertyKeys = [];

export const DOMImplementationConstantKeys = [];
