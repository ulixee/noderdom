import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IVideoPlaybackQuality } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IVideoPlaybackQuality, IVideoPlaybackQualityProperties>();
export const awaitedHandler = new AwaitedHandler<IVideoPlaybackQuality>('VideoPlaybackQuality', getState, setState);

export function VideoPlaybackQualityGenerator() {
  return class VideoPlaybackQuality implements IVideoPlaybackQuality {
    constructor() {
      initializeConstantsAndProperties<VideoPlaybackQuality>(this, VideoPlaybackQualityConstantKeys, VideoPlaybackQualityPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IVideoPlaybackQualityProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const VideoPlaybackQualityPropertyKeys = [];

export const VideoPlaybackQualityConstantKeys = [];
