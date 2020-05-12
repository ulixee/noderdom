import StateMachine from '../../awaited-base/StateMachine';
import { ISuperText } from '../../awaited-base/interfaces/super';
import { SuperTextGenerator, ISuperTextProperties } from '../../awaited-base/super-klasses/SuperText';
import CharacterDataIsolate from '../isolate-mixins/CharacterDataIsolate';
import NodeIsolate from '../isolate-mixins/NodeIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperText, ISuperTextProperties>();
const SuperTextBase = SuperTextGenerator(CharacterDataIsolate, NodeIsolate);

export default class SuperText extends SuperTextBase implements ISuperText {
  constructor(_data?: string) {
    super();
  }
}
