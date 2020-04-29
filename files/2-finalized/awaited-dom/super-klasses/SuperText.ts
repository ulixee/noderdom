import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { ISuperText } from '../../awaited-base/interfaces/super';
import { SuperTextGenerator, initialize, ISuperTextProperties } from '../../awaited-base/super-klasses/SuperText';
import CharacterData from '../official-klasses/CharacterData';
import Node from '../official-klasses/Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperText, ISuperTextProperties>();
const SuperTextBase = SuperTextGenerator(CharacterData, Node);

export default class SuperText extends SuperTextBase implements ISuperText {
  constructor(_data?: string) {
    super();
    initialize(SuperText, this);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createSuperText<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperText {
  const instance = new SuperText();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
