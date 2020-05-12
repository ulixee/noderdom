import StateMachine from '../../awaited-base/StateMachine';
import { ICharacterData } from '../../awaited-base/interfaces/official';
import { CharacterDataGenerator, ICharacterDataProperties } from '../../awaited-base/official-klasses/CharacterData';
import Node from './Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ICharacterData, ICharacterDataProperties>();
const CharacterDataBase = CharacterDataGenerator(Node);

export default class CharacterData extends CharacterDataBase implements ICharacterData {
  constructor() {
    super();
  }
}
