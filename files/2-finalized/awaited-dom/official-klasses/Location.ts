import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { ILocation } from '../../awaited-base/interfaces/official';
import { LocationGenerator, initialize, ILocationProperties } from '../../awaited-base/official-klasses/Location';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ILocation, ILocationProperties>();
const LocationBase = LocationGenerator();

export default class Location extends LocationBase implements ILocation {
  constructor() {
    super();
    initialize(Location, this);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createLocation<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ILocation {
  const instance = new Location();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
