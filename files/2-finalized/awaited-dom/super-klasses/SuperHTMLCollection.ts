import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { ISuperHTMLCollection } from '../../awaited-base/interfaces/super';
import { SuperHTMLCollectionGenerator, initialize, ISuperHTMLCollectionProperties } from '../../awaited-base/super-klasses/SuperHTMLCollection';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperHTMLCollection, ISuperHTMLCollectionProperties>();
const SuperHTMLCollectionBase = SuperHTMLCollectionGenerator();

export default class SuperHTMLCollection extends SuperHTMLCollectionBase implements ISuperHTMLCollection {
  constructor() {
    super();
    initialize(SuperHTMLCollection, this);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createSuperHTMLCollection<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperHTMLCollection {
  const instance = new SuperHTMLCollection();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
