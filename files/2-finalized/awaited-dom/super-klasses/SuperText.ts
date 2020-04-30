import StateMachine from '../../awaited-base/StateMachine';
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
