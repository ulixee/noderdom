import { ITimeRanges } from '../../base/interfaces/official';
import { ITimeRangesProperties } from '../../base/official-klasses/TimeRanges';
export declare const getState: (instance: ITimeRanges) => ITimeRangesProperties, setState: (instance: ITimeRanges, properties: Partial<ITimeRangesProperties>) => void, recordProxy: (proxy: ITimeRanges, instance: ITimeRanges) => void;
declare const TimeRangesBaseClass: {
    new (): {
        readonly length: Promise<number>;
        end(index: number): Promise<number>;
        start(index: number): Promise<number>;
    };
};
export default class TimeRanges extends TimeRangesBaseClass implements ITimeRanges {
}
export {};
