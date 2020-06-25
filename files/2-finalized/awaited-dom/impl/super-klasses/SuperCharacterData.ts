import StateMachine from '../../base/StateMachine';
import { ISuperCharacterData } from '../../base/interfaces/super';
import { SuperCharacterDataGenerator, ISuperCharacterDataProperties } from '../../base/super-klasses/SuperCharacterData';
import CharacterDataIsolate from '../isolate-mixins/CharacterDataIsolate';
import NodeIsolate from '../isolate-mixins/NodeIsolate';
import NonDocumentTypeChildNode from '../official-mixins/NonDocumentTypeChildNode';
import TextIsolate from '../isolate-mixins/TextIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperCharacterData, ISuperCharacterDataProperties>();
const SuperCharacterDataBaseClass = SuperCharacterDataGenerator(CharacterDataIsolate, NodeIsolate, NonDocumentTypeChildNode, TextIsolate);

export default class SuperCharacterData extends SuperCharacterDataBaseClass implements ISuperCharacterData {
  constructor() {
    super();
  }
}
