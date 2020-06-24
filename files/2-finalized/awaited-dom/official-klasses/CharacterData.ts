import StateMachine from '../../awaited-base/StateMachine';
import { ICharacterData } from '../../awaited-base/interfaces/official';
import { CharacterDataGenerator, ICharacterDataProperties } from '../../awaited-base/official-klasses/CharacterData';
import Node from './Node';
import NonDocumentTypeChildNode from '../official-mixins/NonDocumentTypeChildNode';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ICharacterData, ICharacterDataProperties>();
const CharacterDataBaseClass = CharacterDataGenerator(Node, NonDocumentTypeChildNode);

export default class CharacterData extends CharacterDataBaseClass implements ICharacterData {
  constructor() {
    super();
  }
}
