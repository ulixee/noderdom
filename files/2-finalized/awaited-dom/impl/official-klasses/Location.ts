import StateMachine from '../../base/StateMachine';
import { ILocation } from '../../base/interfaces/official';
import { LocationGenerator, ILocationProperties } from '../../base/official-klasses/Location';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ILocation, ILocationProperties>();
const LocationBaseClass = LocationGenerator();

export default class Location extends LocationBaseClass implements ILocation {}
