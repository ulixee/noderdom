import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ITimeRanges } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ITimeRanges, ITimeRangesProperties>();
export const awaitedHandler = new AwaitedHandler<ITimeRanges>('TimeRanges', getState, setState);

export function TimeRangesGenerator() {
  return class TimeRanges implements ITimeRanges {
    constructor() {
      initializeConstantsAndProperties<TimeRanges>(this, TimeRangesConstantKeys, TimeRangesPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ITimeRangesProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const TimeRangesPropertyKeys = [];

export const TimeRangesConstantKeys = [];
