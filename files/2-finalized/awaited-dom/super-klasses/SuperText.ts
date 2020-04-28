import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { ISuperText } from '../../awaited-base/interfaces/super';
import { SuperTextGenerator, initialize, ISuperTextProperties } from '../../awaited-base/super-klasses/SuperText';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperText, ISuperTextProperties>();
const SuperTextBase = SuperTextGenerator();

export default class SuperText extends SuperTextBase implements ISuperText {
  constructor(_data?: string) {
    super();
    initialize(SuperText, this);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createSuperText(awaitedPath: AwaitedPath, awaitedOptions: any): SuperText {
  const instance = new SuperText();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
