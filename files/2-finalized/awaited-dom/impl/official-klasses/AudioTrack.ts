import StateMachine from '../../base/StateMachine';
import { IAudioTrack } from '../../base/interfaces/official';
import { AudioTrackGenerator, IAudioTrackProperties } from '../../base/official-klasses/AudioTrack';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IAudioTrack, IAudioTrackProperties>();
const AudioTrackBaseClass = AudioTrackGenerator();

export default class AudioTrack extends AudioTrackBaseClass implements IAudioTrack {}
