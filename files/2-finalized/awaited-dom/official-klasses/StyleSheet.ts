import StateMachine from '../../awaited-base/StateMachine';
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
