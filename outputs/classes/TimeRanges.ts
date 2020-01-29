import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { ITimeRanges } from '../interfaces';

export default class TimeRanges implements ITimeRanges {
  public get length(): number {
    return InternalHandler.get<ITimeRanges, number>(this, 'length');
  }

  // methods

  public end(index: number): number {
    return InternalHandler.run<ITimeRanges, number>(this, 'end', [index]);
  }

  public start(index: number): number {
    return InternalHandler.run<ITimeRanges, number>(this, 'start', [index]);
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ITimeRangesProperties {
  length?: number;
}

export interface ITimeRangesReadonlyProperties {
  length?: number;
}

export const { getState, setState, setReadonlyOfTimeRanges } = InternalStateGenerator<
  ITimeRanges,
  ITimeRangesProperties,
  ITimeRangesReadonlyProperties
>('TimeRanges');
