import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { IDOMImplementation } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMImplementation, IDOMImplementationProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMImplementation>('DOMImplementation', getState, setState);

export function DOMImplementationGenerator() {
  return class DOMImplementation implements IDOMImplementation {
    constructor() {
      initialize(DOMImplementation, this);
    }

    // methods

    public hasFeature(): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'hasFeature', []);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMImplementationProperties {}

export const DOMImplementationPropertyKeys = [];

export const DOMImplementationConstantKeys = [];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<IDOMImplementation>, self: IDOMImplementation) {
  initializeConstantsAndProperties<IDOMImplementation>(Klass, self, DOMImplementationConstantKeys, DOMImplementationPropertyKeys);
}
