import InternalHandler from '../InternalHandler';
import {
  IVideoTrackListEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IVideoTrack,
  IEvent,
  IVideoTrackList,
} from '../interfaces';
import EventTarget, { IEventTargetRps, rpEventTargetKeys } from './EventTarget';

export default class VideoTrackList extends EventTarget implements IVideoTrackList {
  protected readonly _: IVideoTrackListRps = {};

  // properties

  public get length(): number {
    return InternalHandler.get<IVideoTrackList, number>(this, 'length');
  }

  public get onaddtrack(): ((this: IVideoTrackList, ev: IEvent) => any) | null {
    return InternalHandler.get<IVideoTrackList, ((this: IVideoTrackList, ev: IEvent) => any) | null>(
      this,
      'onaddtrack',
    );
  }

  public set onaddtrack(value: ((this: IVideoTrackList, ev: IEvent) => any) | null) {
    InternalHandler.set<IVideoTrackList, ((this: IVideoTrackList, ev: IEvent) => any) | null>(
      this,
      'onaddtrack',
      value,
    );
  }

  public get onchange(): ((this: IVideoTrackList, ev: IEvent) => any) | null {
    return InternalHandler.get<IVideoTrackList, ((this: IVideoTrackList, ev: IEvent) => any) | null>(this, 'onchange');
  }

  public set onchange(value: ((this: IVideoTrackList, ev: IEvent) => any) | null) {
    InternalHandler.set<IVideoTrackList, ((this: IVideoTrackList, ev: IEvent) => any) | null>(this, 'onchange', value);
  }

  public get onremovetrack(): ((this: IVideoTrackList, ev: IEvent) => any) | null {
    return InternalHandler.get<IVideoTrackList, ((this: IVideoTrackList, ev: IEvent) => any) | null>(
      this,
      'onremovetrack',
    );
  }

  public set onremovetrack(value: ((this: IVideoTrackList, ev: IEvent) => any) | null) {
    InternalHandler.set<IVideoTrackList, ((this: IVideoTrackList, ev: IEvent) => any) | null>(
      this,
      'onremovetrack',
      value,
    );
  }

  public get selectedIndex(): number {
    return InternalHandler.get<IVideoTrackList, number>(this, 'selectedIndex');
  }

  // methods

  public getTrackById(id: string): IVideoTrack | null {
    return InternalHandler.run<IVideoTrackList, IVideoTrack | null>(this, 'getTrackById', [id]);
  }

  public addEventListener<K extends keyof IVideoTrackListEventMap>(
    type: K,
    listener: (this: IVideoTrackList, ev: IVideoTrackListEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IVideoTrackList, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IVideoTrackListEventMap>(
    type: K,
    listener: (this: IVideoTrackList, ev: IVideoTrackListEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IVideoTrackList, void>(this, 'removeEventListener', [type, listener, options]);
  }

  [index: number]: IVideoTrack;
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpVideoTrackListKeys: Set<string> = new Set([...rpEventTargetKeys]);

export interface IVideoTrackListRps extends IEventTargetRps {
  readonly length?: number;
  readonly selectedIndex?: number;
}

export function setVideoTrackListRps(instance: IVideoTrackList, data: IVideoTrackListRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpVideoTrackListKeys.has(key)) {
      throw new Error(`${key} is not a property of VideoTrackList`);
    }
    properties[key] = value;
  });
}
