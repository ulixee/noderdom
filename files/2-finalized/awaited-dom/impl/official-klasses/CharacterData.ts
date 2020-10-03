import StateMachine from '../../base/StateMachine';
import { ICharacterData } from '../../base/interfaces/official';
import { CharacterDataGenerator, ICharacterDataProperties } from '../../base/official-klasses/CharacterData';
import Node from './Node';
import NonDocumentTypeChildNode from '../official-mixins/NonDocumentTypeChildNode';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ICharacterData, ICharacterDataProperties>();
const CharacterDataBaseClass = CharacterDataGenerator(Node, NonDocumentTypeChildNode);

export default class CharacterData extends CharacterDataBaseClass implements ICharacterData {
  constructor() {
    super();
  }
}
