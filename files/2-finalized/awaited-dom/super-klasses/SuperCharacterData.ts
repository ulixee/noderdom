import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
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

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createSuperCharacterData<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperCharacterData {
  const instance = new SuperCharacterData();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
