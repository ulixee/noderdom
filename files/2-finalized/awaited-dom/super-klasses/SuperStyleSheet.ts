import StateMachine from '../../awaited-base/StateMachine';
import { ISuperStyleSheet } from '../../awaited-base/interfaces/super';
import { SuperStyleSheetGenerator, initialize, ISuperStyleSheetProperties } from '../../awaited-base/super-klasses/SuperStyleSheet';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperStyleSheet, ISuperStyleSheetProperties>();
const SuperStyleSheetBase = SuperStyleSheetGenerator();

export default class SuperStyleSheet extends SuperStyleSheetBase implements ISuperStyleSheet {
  constructor() {
    super();
    initialize(SuperStyleSheet, this);
  }
}
