import InternalHandler from '../InternalHandler';
import {
  ITextTrackListEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  ITextTrack,
  IEvent,
  ITextTrackList,
} from '../interfaces';
import EventTarget, { IEventTargetRps, rpEventTargetKeys } from './EventTarget';

export default class TextTrackList extends EventTarget implements ITextTrackList {
  protected readonly _: ITextTrackListRps = {};

  // properties

  public get length(): number {
    return InternalHandler.get<ITextTrackList, number>(this, 'length');
  }

  public get onaddtrack(): ((this: ITextTrackList, ev: IEvent) => any) | null {
    return InternalHandler.get<ITextTrackList, ((this: ITextTrackList, ev: IEvent) => any) | null>(this, 'onaddtrack');
  }

  public set onaddtrack(value: ((this: ITextTrackList, ev: IEvent) => any) | null) {
    InternalHandler.set<ITextTrackList, ((this: ITextTrackList, ev: IEvent) => any) | null>(this, 'onaddtrack', value);
  }

  public get onchange(): ((this: ITextTrackList, ev: IEvent) => any) | null {
    return InternalHandler.get<ITextTrackList, ((this: ITextTrackList, ev: IEvent) => any) | null>(this, 'onchange');
  }

  public set onchange(value: ((this: ITextTrackList, ev: IEvent) => any) | null) {
    InternalHandler.set<ITextTrackList, ((this: ITextTrackList, ev: IEvent) => any) | null>(this, 'onchange', value);
  }

  public get onremovetrack(): ((this: ITextTrackList, ev: IEvent) => any) | null {
    return InternalHandler.get<ITextTrackList, ((this: ITextTrackList, ev: IEvent) => any) | null>(
      this,
      'onremovetrack',
    );
  }

  public set onremovetrack(value: ((this: ITextTrackList, ev: IEvent) => any) | null) {
    InternalHandler.set<ITextTrackList, ((this: ITextTrackList, ev: IEvent) => any) | null>(
      this,
      'onremovetrack',
      value,
    );
  }

  // methods

  public getTrackById(id: string): ITextTrack | null {
    return InternalHandler.run<ITextTrackList, ITextTrack | null>(this, 'getTrackById', [id]);
  }

  public addEventListener<K extends keyof ITextTrackListEventMap>(
    type: K,
    listener: (this: ITextTrackList, ev: ITextTrackListEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<ITextTrackList, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof ITextTrackListEventMap>(
    type: K,
    listener: (this: ITextTrackList, ev: ITextTrackListEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<ITextTrackList, void>(this, 'removeEventListener', [type, listener, options]);
  }

  [index: number]: ITextTrack;
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpTextTrackListKeys: Set<string> = new Set([...rpEventTargetKeys]);

export interface ITextTrackListRps extends IEventTargetRps {
  readonly length?: number;
}

export function setTextTrackListRps(instance: ITextTrackList, data: ITextTrackListRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpTextTrackListKeys.has(key)) {
      throw new Error(`${key} is not a property of TextTrackList`);
    }
    properties[key] = value;
  });
}
