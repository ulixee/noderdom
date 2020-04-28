import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { ICharacterData } from '../../awaited-base/interfaces/official';
import { CharacterDataGenerator, initialize, ICharacterDataProperties } from '../../awaited-base/official-klasses/CharacterData';
import Node from './Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ICharacterData, ICharacterDataProperties>();
const CharacterDataBase = CharacterDataGenerator(Node);

export default class CharacterData extends CharacterDataBase implements ICharacterData {
  constructor() {
    super();
    initialize(CharacterData, this);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createCharacterData(awaitedPath: AwaitedPath, awaitedOptions: any): CharacterData {
  const instance = new CharacterData();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
