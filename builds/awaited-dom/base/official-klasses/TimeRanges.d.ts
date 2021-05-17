import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { ITimeRanges } from '../interfaces/official';
export declare const getState: (instance: ITimeRanges) => ITimeRangesProperties, setState: (instance: ITimeRanges, properties: Partial<ITimeRangesProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ITimeRanges>;
export declare function TimeRangesGenerator(): {
    new (): {
        readonly length: Promise<number>;
        end(index: number): Promise<number>;
        start(index: number): Promise<number>;
    };
};
export interface ITimeRangesProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly length?: Promise<number>;
}
export declare const TimeRangesPropertyKeys: string[];
export declare const TimeRangesConstantKeys: never[];
