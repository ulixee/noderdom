// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IStyleSheet } from '../interfaces/dom';

export const { getState, setState, setHiddenState, setReadonlyOfStyleSheet } = StateMachine<
  IStyleSheet,
  IStyleSheetProperties,
  IStyleSheetReadonlyProperties
>('StyleSheet');

export const awaitedHandler = new AwaitedHandler<IStyleSheet>('StyleSheet', getState, setState);

export default class StyleSheet implements IStyleSheet {
  constructor() {
    initializeConstantsAndProperties<StyleSheet>(StyleSheet, this, StyleSheetConstantKeys, StyleSheetPropertyKeys);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IStyleSheetReadonlyProperties {}

export interface IStyleSheetProperties extends IStyleSheetReadonlyProperties {}

export const StyleSheetPropertyKeys = [];

export const StyleSheetConstantKeys = [];
