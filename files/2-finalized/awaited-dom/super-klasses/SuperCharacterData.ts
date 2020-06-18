import StateMachine from '../../awaited-base/StateMachine';
import { ISuperCharacterData } from '../../awaited-base/interfaces/super';
import { SuperCharacterDataGenerator, ISuperCharacterDataProperties } from '../../awaited-base/super-klasses/SuperCharacterData';
import CharacterDataIsolate from '../isolate-mixins/CharacterDataIsolate';
import NodeIsolate from '../isolate-mixins/NodeIsolate';
import TextIsolate from '../isolate-mixins/TextIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperCharacterData, ISuperCharacterDataProperties>();
const SuperCharacterDataBaseClass = SuperCharacterDataGenerator(CharacterDataIsolate, NodeIsolate, TextIsolate);

export default class SuperCharacterData extends SuperCharacterDataBaseClass implements ISuperCharacterData {
  constructor() {
    super();
  }
}
