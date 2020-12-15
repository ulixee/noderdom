import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IAudioTrackList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IAudioTrackList, IAudioTrackListProperties>();
export const awaitedHandler = new AwaitedHandler<IAudioTrackList>('AudioTrackList', getState, setState);

export function AudioTrackListGenerator() {
  return class AudioTrackList implements IAudioTrackList {
    constructor() {
      initializeConstantsAndProperties<AudioTrackList>(this, AudioTrackListConstantKeys, AudioTrackListPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IAudioTrackListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const AudioTrackListPropertyKeys = [];

export const AudioTrackListConstantKeys = [];
