import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { IStyleSheet } from '../../awaited-base/interfaces/official';
import { StyleSheetGenerator, initialize, IStyleSheetProperties } from '../../awaited-base/official-klasses/StyleSheet';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IStyleSheet, IStyleSheetProperties>();
const StyleSheetBase = StyleSheetGenerator();

export default class StyleSheet extends StyleSheetBase implements IStyleSheet {
  constructor() {
    super();
    initialize(StyleSheet, this);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createStyleSheet(awaitedPath: AwaitedPath, awaitedOptions: any): StyleSheet {
  const instance = new StyleSheet();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
