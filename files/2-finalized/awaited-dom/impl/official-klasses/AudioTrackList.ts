import StateMachine from '../../base/StateMachine';
import { IAudioTrackList } from '../../base/interfaces/official';
import { AudioTrackListGenerator, IAudioTrackListProperties } from '../../base/official-klasses/AudioTrackList';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IAudioTrackList, IAudioTrackListProperties>();
const AudioTrackListBaseClass = AudioTrackListGenerator();

export default class AudioTrackList extends AudioTrackListBaseClass implements IAudioTrackList {}
