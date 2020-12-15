import StateMachine from '../../base/StateMachine';
import { IVideoTrackList } from '../../base/interfaces/official';
import { VideoTrackListGenerator, IVideoTrackListProperties } from '../../base/official-klasses/VideoTrackList';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IVideoTrackList, IVideoTrackListProperties>();
const VideoTrackListBaseClass = VideoTrackListGenerator();

export default class VideoTrackList extends VideoTrackListBaseClass implements IVideoTrackList {}
