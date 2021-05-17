import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IVideoPlaybackQuality } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IVideoPlaybackQuality, IVideoPlaybackQualityProperties>();
export const awaitedHandler = new AwaitedHandler<IVideoPlaybackQuality>('VideoPlaybackQuality', getState, setState);

export function VideoPlaybackQualityGenerator() {
  return class VideoPlaybackQuality implements IVideoPlaybackQuality {
    constructor() {
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, VideoPlaybackQualityPropertyKeys, VideoPlaybackQualityConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IVideoPlaybackQualityProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const VideoPlaybackQualityPropertyKeys = [];

export const VideoPlaybackQualityConstantKeys = [];
