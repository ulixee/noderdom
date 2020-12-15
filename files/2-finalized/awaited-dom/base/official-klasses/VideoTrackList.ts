import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IVideoTrackList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IVideoTrackList, IVideoTrackListProperties>();
export const awaitedHandler = new AwaitedHandler<IVideoTrackList>('VideoTrackList', getState, setState);

export function VideoTrackListGenerator() {
  return class VideoTrackList implements IVideoTrackList {
    constructor() {
      initializeConstantsAndProperties<VideoTrackList>(this, VideoTrackListConstantKeys, VideoTrackListPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IVideoTrackListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const VideoTrackListPropertyKeys = [];

export const VideoTrackListConstantKeys = [];
