import StateMachine from '../../base/StateMachine';
import { IVideoTrackList, IVideoTrack } from '../../base/interfaces/official';
import { VideoTrackListGenerator, IVideoTrackListProperties } from '../../base/official-klasses/VideoTrackList';
import { createVideoTrack } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IVideoTrackList, IVideoTrackListProperties>();
const VideoTrackListBaseClass = VideoTrackListGenerator();

export default class VideoTrackList extends VideoTrackListBaseClass implements IVideoTrackList {
  public getTrackById(id: string): IVideoTrack {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createVideoTrack(awaitedPath.addMethod('getTrackById', id), awaitedOptions);
  }
}
