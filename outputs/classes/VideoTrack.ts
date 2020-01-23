import InternalHandler from '../InternalHandler';
import { IVideoTrack } from '../interfaces';

export default class VideoTrack implements IVideoTrack {
  protected readonly _: IVideoTrackRps = {};

  // properties

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

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpVideoTrackKeys: Set<string> = new Set([]);

export interface IVideoTrackRps {
  readonly id?: string;
  readonly kind?: string;
  readonly label?: string;
  readonly language?: string;
}

export function setVideoTrackRps(instance: IVideoTrack, data: IVideoTrackRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpVideoTrackKeys.has(key)) {
      throw new Error(`${key} is not a property of VideoTrack`);
    }
    properties[key] = value;
  });
}
