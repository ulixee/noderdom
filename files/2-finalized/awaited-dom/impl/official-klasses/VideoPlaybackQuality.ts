import StateMachine from '../../base/StateMachine';
import { IVideoPlaybackQuality } from '../../base/interfaces/official';
import { VideoPlaybackQualityGenerator, IVideoPlaybackQualityProperties } from '../../base/official-klasses/VideoPlaybackQuality';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IVideoPlaybackQuality, IVideoPlaybackQualityProperties>();
const VideoPlaybackQualityBaseClass = VideoPlaybackQualityGenerator();

export default class VideoPlaybackQuality extends VideoPlaybackQualityBaseClass implements IVideoPlaybackQuality {}
