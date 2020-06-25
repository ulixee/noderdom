import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IStyleSheet } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IStyleSheet, IStyleSheetProperties>();
export const awaitedHandler = new AwaitedHandler<IStyleSheet>('StyleSheet', getState, setState);

export function StyleSheetGenerator() {
  return class StyleSheet implements IStyleSheet {
    constructor() {
      initializeConstantsAndProperties<StyleSheet>(this, StyleSheetConstantKeys, StyleSheetPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IStyleSheetProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const StyleSheetPropertyKeys = [];

export const StyleSheetConstantKeys = [];
