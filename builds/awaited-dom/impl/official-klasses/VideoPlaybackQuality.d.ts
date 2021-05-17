import { IVideoPlaybackQuality } from '../../base/interfaces/official';
import { IVideoPlaybackQualityProperties } from '../../base/official-klasses/VideoPlaybackQuality';
export declare const getState: (instance: IVideoPlaybackQuality) => IVideoPlaybackQualityProperties, setState: (instance: IVideoPlaybackQuality, properties: Partial<IVideoPlaybackQualityProperties>) => void;
declare const VideoPlaybackQualityBaseClass: {
    new (): {};
};
export default class VideoPlaybackQuality extends VideoPlaybackQualityBaseClass implements IVideoPlaybackQuality {
}
export {};
