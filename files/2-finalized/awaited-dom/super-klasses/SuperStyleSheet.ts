import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
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

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createSuperStyleSheet<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperStyleSheet {
  const instance = new SuperStyleSheet();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
