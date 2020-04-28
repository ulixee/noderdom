import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { ISuperStyleSheet } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperStyleSheet, ISuperStyleSheetProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperStyleSheet>('SuperStyleSheet', getState, setState);

export function SuperStyleSheetGenerator() {
  return class SuperStyleSheet implements ISuperStyleSheet {
    constructor() {
      initialize(SuperStyleSheet, this);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperStyleSheetProperties {}

export const SuperStyleSheetPropertyKeys = [];

export const SuperStyleSheetConstantKeys = [];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<ISuperStyleSheet>, self: ISuperStyleSheet) {
  initializeConstantsAndProperties<ISuperStyleSheet>(Klass, self, SuperStyleSheetConstantKeys, SuperStyleSheetPropertyKeys);
}
