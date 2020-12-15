import StateMachine from '../../base/StateMachine';
import { ITimeRanges } from '../../base/interfaces/official';
import { TimeRangesGenerator, ITimeRangesProperties } from '../../base/official-klasses/TimeRanges';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ITimeRanges, ITimeRangesProperties>();
const TimeRangesBaseClass = TimeRangesGenerator();

export default class TimeRanges extends TimeRangesBaseClass implements ITimeRanges {}
