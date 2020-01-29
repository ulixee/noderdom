import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IAbstractRange, IStaticRangeInit, IStaticRange } from '../interfaces';
import { IAbstractRangeProperties, IAbstractRangeReadonlyProperties } from './AbstractRange';

// tslint:disable-next-line:variable-name
export function StaticRangeGenerator(AbstractRange: Constructable<IAbstractRange>) {
  return class StaticRange extends AbstractRange implements IStaticRange {
    constructor(init: IStaticRangeInit) {
      super();
      InternalHandler.construct(this, [init]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IStaticRangeProperties extends IAbstractRangeProperties {}

export interface IStaticRangeReadonlyProperties extends IAbstractRangeReadonlyProperties {}

export const { getState, setState, setReadonlyOfStaticRange } = InternalStateGenerator<
  IStaticRange,
  IStaticRangeProperties,
  IStaticRangeReadonlyProperties
>('StaticRange');
