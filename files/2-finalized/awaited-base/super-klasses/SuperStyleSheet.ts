import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ISuperStyleSheet } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperStyleSheet, ISuperStyleSheetProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperStyleSheet>('SuperStyleSheet', getState, setState);

export function SuperStyleSheetGenerator() {
  return class SuperStyleSheet implements ISuperStyleSheet {
    constructor() {
      initializeConstantsAndProperties<SuperStyleSheet>(this, SuperStyleSheetConstantKeys, SuperStyleSheetPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperStyleSheetProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const SuperStyleSheetPropertyKeys = [];

export const SuperStyleSheetConstantKeys = [];
