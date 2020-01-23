import InternalHandler from '../InternalHandler';
import { IAudioTrackListEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IAudioTrack, IEvent, IAudioTrackList } from '../interfaces';
import EventTarget, { IEventTargetRps, rpEventTargetKeys } from './EventTarget';

export default class AudioTrackList extends EventTarget implements IAudioTrackList {
  protected readonly _: IAudioTrackListRps = {};

  // properties

  public get length(): number {
    return InternalHandler.get<IAudioTrackList, number>(this, 'length');
  }

  public get onaddtrack(): ((this: IAudioTrackList, ev: IEvent) => any) | null {
    return InternalHandler.get<IAudioTrackList, ((this: IAudioTrackList, ev: IEvent) => any) | null>(this, 'onaddtrack');
  }

  public set onaddtrack(value: ((this: IAudioTrackList, ev: IEvent) => any) | null) {
    InternalHandler.set<IAudioTrackList, ((this: IAudioTrackList, ev: IEvent) => any) | null>(this, 'onaddtrack', value);
  }

  public get onchange(): ((this: IAudioTrackList, ev: IEvent) => any) | null {
    return InternalHandler.get<IAudioTrackList, ((this: IAudioTrackList, ev: IEvent) => any) | null>(this, 'onchange');
  }

  public set onchange(value: ((this: IAudioTrackList, ev: IEvent) => any) | null) {
    InternalHandler.set<IAudioTrackList, ((this: IAudioTrackList, ev: IEvent) => any) | null>(this, 'onchange', value);
  }

  public get onremovetrack(): ((this: IAudioTrackList, ev: IEvent) => any) | null {
    return InternalHandler.get<IAudioTrackList, ((this: IAudioTrackList, ev: IEvent) => any) | null>(this, 'onremovetrack');
  }

  public set onremovetrack(value: ((this: IAudioTrackList, ev: IEvent) => any) | null) {
    InternalHandler.set<IAudioTrackList, ((this: IAudioTrackList, ev: IEvent) => any) | null>(this, 'onremovetrack', value);
  }

  // methods

  public getTrackById(id: string): IAudioTrack | null {
    return InternalHandler.run<IAudioTrackList, IAudioTrack | null>(this, 'getTrackById', [id]);
  }

  public addEventListener<K extends keyof IAudioTrackListEventMap>(type: K, listener: (this: IAudioTrackList, ev: IAudioTrackListEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<IAudioTrackList, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IAudioTrackListEventMap>(type: K, listener: (this: IAudioTrackList, ev: IAudioTrackListEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<IAudioTrackList, void>(this, 'removeEventListener', [type, listener, options]);
  }

  [index: number]: IAudioTrack;
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpAudioTrackListKeys: Set<string> = new Set([...rpEventTargetKeys]);

export interface IAudioTrackListRps extends IEventTargetRps {
  readonly length?: number;
}

export function setAudioTrackListRps(instance: IAudioTrackList, data: IAudioTrackListRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpAudioTrackListKeys.has(key)) {
      throw new Error(`${key} is not a property of AudioTrackList`);
    }
    properties[key] = value;
  });
}
