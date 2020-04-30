import StateMachine from '../../awaited-base/StateMachine';
import { ISuperCharacterData } from '../../awaited-base/interfaces/super';
import { SuperCharacterDataGenerator, initialize, ISuperCharacterDataProperties } from '../../awaited-base/super-klasses/SuperCharacterData';
import Node from '../official-klasses/Node';
import TextIsolate from '../isolate-mixins/TextIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperCharacterData, ISuperCharacterDataProperties>();
const SuperCharacterDataBase = SuperCharacterDataGenerator(Node, TextIsolate);

export default class SuperCharacterData extends SuperCharacterDataBase implements ISuperCharacterData {
  constructor() {
    super();
    initialize(SuperCharacterData, this);
  }
}
