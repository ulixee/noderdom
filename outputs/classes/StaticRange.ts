import InternalHandler from '../InternalHandler';
import { IStaticRangeInit, IStaticRange } from '../interfaces';
import AbstractRange, { IAbstractRangeRps, rpAbstractRangeKeys } from './AbstractRange';

export default class StaticRange extends AbstractRange implements IStaticRange {
  constructor(init: IStaticRangeInit) {
    super();
    InternalHandler.construct(this, [init]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpStaticRangeKeys: Set<string> = new Set([...rpAbstractRangeKeys]);

export interface IStaticRangeRps extends IAbstractRangeRps {}

export function setStaticRangeRps(instance: IStaticRange, data: IStaticRangeRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpStaticRangeKeys.has(key)) {
      throw new Error(`${key} is not a property of StaticRange`);
    }
    properties[key] = value;
  });
}
