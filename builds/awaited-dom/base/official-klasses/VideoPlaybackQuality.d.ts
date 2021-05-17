import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IVideoPlaybackQuality } from '../interfaces/official';
export declare const getState: (instance: IVideoPlaybackQuality) => IVideoPlaybackQualityProperties, setState: (instance: IVideoPlaybackQuality, properties: Partial<IVideoPlaybackQualityProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IVideoPlaybackQuality>;
export declare function VideoPlaybackQualityGenerator(): {
    new (): {};
};
export interface IVideoPlaybackQualityProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const VideoPlaybackQualityPropertyKeys: never[];
export declare const VideoPlaybackQualityConstantKeys: never[];
