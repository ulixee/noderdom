import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IAudioTrack } from '../interfaces';

export default class AudioTrack implements IAudioTrack {
  public get enabled(): boolean {
    return InternalHandler.get<IAudioTrack, boolean>(this, 'enabled');
  }

  public set enabled(value: boolean) {
    InternalHandler.set<IAudioTrack, boolean>(this, 'enabled', value);
  }

  public get id(): string {
    return InternalHandler.get<IAudioTrack, string>(this, 'id');
  }

  public get kind(): string {
    return InternalHandler.get<IAudioTrack, string>(this, 'kind');
  }

  public get label(): string {
    return InternalHandler.get<IAudioTrack, string>(this, 'label');
  }

  public get language(): string {
    return InternalHandler.get<IAudioTrack, string>(this, 'language');
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IAudioTrackProperties {
  enabled?: boolean;
  id?: string;
  kind?: string;
  label?: string;
  language?: string;
}

export interface IAudioTrackReadonlyProperties {
  id?: string;
  kind?: string;
  label?: string;
  language?: string;
}

export const { getState, setState, setReadonlyOfAudioTrack } = InternalStateGenerator<
  IAudioTrack,
  IAudioTrackProperties,
  IAudioTrackReadonlyProperties
>('AudioTrack');
