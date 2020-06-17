import StateMachine from '../../awaited-base/StateMachine';
import { ISuperStyleSheet } from '../../awaited-base/interfaces/super';
import { SuperStyleSheetGenerator, ISuperStyleSheetProperties } from '../../awaited-base/super-klasses/SuperStyleSheet';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperStyleSheet, ISuperStyleSheetProperties>();
const SuperStyleSheetBaseClass = SuperStyleSheetGenerator();

export default class SuperStyleSheet extends SuperStyleSheetBaseClass implements ISuperStyleSheet {}
