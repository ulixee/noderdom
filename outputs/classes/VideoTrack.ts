import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IVideoTrack } from '../interfaces';

export default class VideoTrack implements IVideoTrack {
  public get id(): string {
    return InternalHandler.get<IVideoTrack, string>(this, 'id');
  }

  public get kind(): string {
    return InternalHandler.get<IVideoTrack, string>(this, 'kind');
  }

  public get label(): string {
    return InternalHandler.get<IVideoTrack, string>(this, 'label');
  }

  public get language(): string {
    return InternalHandler.get<IVideoTrack, string>(this, 'language');
  }

  public get selected(): boolean {
    return InternalHandler.get<IVideoTrack, boolean>(this, 'selected');
  }

  public set selected(value: boolean) {
    InternalHandler.set<IVideoTrack, boolean>(this, 'selected', value);
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IVideoTrackProperties {
  id?: string;
  kind?: string;
  label?: string;
  language?: string;
  selected?: boolean;
}

export interface IVideoTrackReadonlyProperties {
  id?: string;
  kind?: string;
  label?: string;
  language?: string;
}

export const { getState, setState, setReadonlyOfVideoTrack } = InternalStateGenerator<
  IVideoTrack,
  IVideoTrackProperties,
  IVideoTrackReadonlyProperties
>('VideoTrack');
