import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { ITextTrackCue, ITextTrack } from '../interfaces/official';
export declare const getState: (instance: ITextTrackCue) => ITextTrackCueProperties, setState: (instance: ITextTrackCue, properties: Partial<ITextTrackCueProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ITextTrackCue>;
export declare function TextTrackCueGenerator(): {
    new (): {
        readonly endTime: Promise<number>;
        readonly id: Promise<string>;
        readonly pauseOnExit: Promise<boolean>;
        readonly startTime: Promise<number>;
        readonly track: ITextTrack;
    };
};
export interface ITextTrackCueProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly endTime?: Promise<number>;
    readonly id?: Promise<string>;
    readonly pauseOnExit?: Promise<boolean>;
    readonly startTime?: Promise<number>;
    readonly track?: ITextTrack;
}
export declare const TextTrackCuePropertyKeys: string[];
export declare const TextTrackCueConstantKeys: never[];
