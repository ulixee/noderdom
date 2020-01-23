import InternalHandler from '../InternalHandler';
import {
  ITextTrackCueEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  ITextTrack,
  IEvent,
  ITextTrackCue,
} from '../interfaces';
import EventTarget, { IEventTargetRps, rpEventTargetKeys } from './EventTarget';

export default class TextTrackCue extends EventTarget implements ITextTrackCue {
  protected readonly _: ITextTrackCueRps = {};

  // properties

  public get endTime(): number {
    return InternalHandler.get<ITextTrackCue, number>(this, 'endTime');
  }

  public set endTime(value: number) {
    InternalHandler.set<ITextTrackCue, number>(this, 'endTime', value);
  }

  public get id(): string {
    return InternalHandler.get<ITextTrackCue, string>(this, 'id');
  }

  public set id(value: string) {
    InternalHandler.set<ITextTrackCue, string>(this, 'id', value);
  }

  public get onenter(): ((this: ITextTrackCue, ev: IEvent) => any) | null {
    return InternalHandler.get<ITextTrackCue, ((this: ITextTrackCue, ev: IEvent) => any) | null>(this, 'onenter');
  }

  public set onenter(value: ((this: ITextTrackCue, ev: IEvent) => any) | null) {
    InternalHandler.set<ITextTrackCue, ((this: ITextTrackCue, ev: IEvent) => any) | null>(this, 'onenter', value);
  }

  public get onexit(): ((this: ITextTrackCue, ev: IEvent) => any) | null {
    return InternalHandler.get<ITextTrackCue, ((this: ITextTrackCue, ev: IEvent) => any) | null>(this, 'onexit');
  }

  public set onexit(value: ((this: ITextTrackCue, ev: IEvent) => any) | null) {
    InternalHandler.set<ITextTrackCue, ((this: ITextTrackCue, ev: IEvent) => any) | null>(this, 'onexit', value);
  }

  public get pauseOnExit(): boolean {
    return InternalHandler.get<ITextTrackCue, boolean>(this, 'pauseOnExit');
  }

  public set pauseOnExit(value: boolean) {
    InternalHandler.set<ITextTrackCue, boolean>(this, 'pauseOnExit', value);
  }

  public get startTime(): number {
    return InternalHandler.get<ITextTrackCue, number>(this, 'startTime');
  }

  public set startTime(value: number) {
    InternalHandler.set<ITextTrackCue, number>(this, 'startTime', value);
  }

  public get track(): ITextTrack | null {
    return InternalHandler.get<ITextTrackCue, ITextTrack | null>(this, 'track');
  }

  public addEventListener<K extends keyof ITextTrackCueEventMap>(
    type: K,
    listener: (this: ITextTrackCue, ev: ITextTrackCueEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<ITextTrackCue, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof ITextTrackCueEventMap>(
    type: K,
    listener: (this: ITextTrackCue, ev: ITextTrackCueEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<ITextTrackCue, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpTextTrackCueKeys: Set<string> = new Set([...rpEventTargetKeys]);

export interface ITextTrackCueRps extends IEventTargetRps {
  readonly track?: ITextTrack | null;
}

export function setTextTrackCueRps(instance: ITextTrackCue, data: ITextTrackCueRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpTextTrackCueKeys.has(key)) {
      throw new Error(`${key} is not a property of TextTrackCue`);
    }
    properties[key] = value;
  });
}
