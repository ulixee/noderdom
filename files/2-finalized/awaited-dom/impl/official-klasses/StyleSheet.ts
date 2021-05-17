import StateMachine from '../../base/StateMachine';
import { IStyleSheet } from '../../base/interfaces/official';
import { StyleSheetGenerator, IStyleSheetProperties } from '../../base/official-klasses/StyleSheet';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IStyleSheet, IStyleSheetProperties>();
const StyleSheetBaseClass = StyleSheetGenerator();

export default class StyleSheet extends StyleSheetBaseClass implements IStyleSheet {}
