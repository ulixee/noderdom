import StateMachine from '../../awaited-base/StateMachine';
import { IStyleSheet } from '../../awaited-base/interfaces/official';
import { StyleSheetGenerator, IStyleSheetProperties } from '../../awaited-base/official-klasses/StyleSheet';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IStyleSheet, IStyleSheetProperties>();
const StyleSheetBaseClass = StyleSheetGenerator();

export default class StyleSheet extends StyleSheetBaseClass implements IStyleSheet {}
