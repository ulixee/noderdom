import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { ISuperCharacterData } from '../../awaited-base/interfaces/super';
import { SuperCharacterDataGenerator, initialize, ISuperCharacterDataProperties } from '../../awaited-base/super-klasses/SuperCharacterData';
import TextIsolate from './TextIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperCharacterData, ISuperCharacterDataProperties>();
const SuperCharacterDataBase = SuperCharacterDataGenerator(TextIsolate);

export default class SuperCharacterData extends SuperCharacterDataBase implements ISuperCharacterData {
  constructor() {
    super();
    initialize(SuperCharacterData, this);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createSuperCharacterData(awaitedPath: AwaitedPath, awaitedOptions: any): SuperCharacterData {
  const instance = new SuperCharacterData();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
