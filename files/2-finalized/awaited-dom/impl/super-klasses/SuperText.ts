import StateMachine from '../../base/StateMachine';
import { ISuperText } from '../../base/interfaces/super';
import { SuperTextGenerator, ISuperTextProperties } from '../../base/super-klasses/SuperText';
import CharacterDataIsolate from '../isolate-mixins/CharacterDataIsolate';
import NodeIsolate from '../isolate-mixins/NodeIsolate';
import NonDocumentTypeChildNode from '../official-mixins/NonDocumentTypeChildNode';
import Slotable from '../official-mixins/Slotable';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ISuperText, ISuperTextProperties>();
const SuperTextBaseClass = SuperTextGenerator(CharacterDataIsolate, NodeIsolate, NonDocumentTypeChildNode, Slotable);

export default class SuperText extends SuperTextBaseClass implements ISuperText {
  constructor(_data?: string) {
    super(_data);
  }
}
