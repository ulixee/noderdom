// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { ISuperStyleSheet } from '../interfaces/supers';

export const { getState, setState, setHiddenState, setReadonlyOfSuperStyleSheet } = StateMachine<
  ISuperStyleSheet,
  ISuperStyleSheetProperties,
  ISuperStyleSheetReadonlyProperties
>('SuperStyleSheet');

export const awaitedHandler = new AwaitedHandler<ISuperStyleSheet>('SuperStyleSheet', getState, setState);

export default class SuperStyleSheet implements ISuperStyleSheet {
  constructor() {
    initializeConstantsAndProperties<SuperStyleSheet>(SuperStyleSheet, this, SuperStyleSheetConstantKeys, SuperStyleSheetPropertyKeys);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperStyleSheetReadonlyProperties {}

export interface ISuperStyleSheetProperties extends ISuperStyleSheetReadonlyProperties {}

export const SuperStyleSheetPropertyKeys = [];

export const SuperStyleSheetConstantKeys = [];
