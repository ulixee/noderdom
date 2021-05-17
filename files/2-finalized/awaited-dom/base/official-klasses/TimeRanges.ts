import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ITimeRanges } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ITimeRanges, ITimeRangesProperties>();
export const awaitedHandler = new AwaitedHandler<ITimeRanges>('TimeRanges', getState, setState);

export function TimeRangesGenerator() {
  return class TimeRanges implements ITimeRanges {
    constructor() {
    }

    // properties

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    // methods

    public end(index: number): Promise<number> {
      return awaitedHandler.runMethod<number>(this, 'end', [index]);
    }

    public start(index: number): Promise<number> {
      return awaitedHandler.runMethod<number>(this, 'start', [index]);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, TimeRangesPropertyKeys, TimeRangesConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ITimeRangesProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly length?: Promise<number>;
}

export const TimeRangesPropertyKeys = ['length'];

export const TimeRangesConstantKeys = [];
