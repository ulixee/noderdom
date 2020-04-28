import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { IStyleSheet } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IStyleSheet, IStyleSheetProperties>();
export const awaitedHandler = new AwaitedHandler<IStyleSheet>('StyleSheet', getState, setState);

export function StyleSheetGenerator() {
  return class StyleSheet implements IStyleSheet {
    constructor() {
      initialize(StyleSheet, this);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IStyleSheetProperties {}

export const StyleSheetPropertyKeys = [];

export const StyleSheetConstantKeys = [];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<IStyleSheet>, self: IStyleSheet) {
  initializeConstantsAndProperties<IStyleSheet>(Klass, self, StyleSheetConstantKeys, StyleSheetPropertyKeys);
}
