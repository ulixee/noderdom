import { ITextTrackCue, ITextTrack } from '../../base/interfaces/official';
import { ITextTrackCueProperties } from '../../base/official-klasses/TextTrackCue';
export declare const getState: (instance: ITextTrackCue) => ITextTrackCueProperties, setState: (instance: ITextTrackCue, properties: Partial<ITextTrackCueProperties>) => void;
declare const TextTrackCueBaseClass: {
    new (): {
        readonly endTime: Promise<number>;
        readonly id: Promise<string>;
        readonly pauseOnExit: Promise<boolean>;
        readonly startTime: Promise<number>;
        readonly track: ITextTrack;
    };
};
export default class TextTrackCue extends TextTrackCueBaseClass implements ITextTrackCue {
    get track(): ITextTrack;
}
export {};
