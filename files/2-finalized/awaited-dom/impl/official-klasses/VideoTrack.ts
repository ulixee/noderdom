import StateMachine from '../../base/StateMachine';
import { IVideoTrack } from '../../base/interfaces/official';
import { VideoTrackGenerator, IVideoTrackProperties } from '../../base/official-klasses/VideoTrack';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IVideoTrack, IVideoTrackProperties>();
const VideoTrackBaseClass = VideoTrackGenerator();

export default class VideoTrack extends VideoTrackBaseClass implements IVideoTrack {}
