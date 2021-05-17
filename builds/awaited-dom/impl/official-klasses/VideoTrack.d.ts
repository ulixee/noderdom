import { IVideoTrack } from '../../base/interfaces/official';
import { IVideoTrackProperties } from '../../base/official-klasses/VideoTrack';
export declare const getState: (instance: IVideoTrack) => IVideoTrackProperties, setState: (instance: IVideoTrack, properties: Partial<IVideoTrackProperties>) => void;
declare const VideoTrackBaseClass: {
    new (): {
        readonly id: Promise<string>;
        readonly kind: Promise<string>;
        readonly label: Promise<string>;
        readonly language: Promise<string>;
        readonly selected: Promise<boolean>;
    };
};
export default class VideoTrack extends VideoTrackBaseClass implements IVideoTrack {
}
export {};
