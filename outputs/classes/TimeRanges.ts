import InternalHandler from '../InternalHandler';
import { ITimeRanges } from '../interfaces';

export default class TimeRanges implements ITimeRanges {
  protected readonly _: ITimeRangesRps = {};

  // properties

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

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpTimeRangesKeys: Set<string> = new Set([]);

export interface ITimeRangesRps {
  readonly length?: number;
}

export function setTimeRangesRps(instance: ITimeRanges, data: ITimeRangesRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpTimeRangesKeys.has(key)) {
      throw new Error(`${key} is not a property of TimeRanges`);
    }
    properties[key] = value;
  });
}
