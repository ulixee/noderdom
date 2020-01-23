import InternalHandler from '../InternalHandler';
import {
  ITextTrackEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  ITextTrackKind,
  ITextTrackMode,
  ITextTrackCueList,
  ITextTrackCue,
  IEvent,
  ITextTrack,
} from '../interfaces';
import EventTarget, { IEventTargetRps, rpEventTargetKeys } from './EventTarget';

export default class TextTrack extends EventTarget implements ITextTrack {
  protected readonly _: ITextTrackRps = {};

  // properties

  public get activeCues(): ITextTrackCueList | null {
    return InternalHandler.get<ITextTrack, ITextTrackCueList | null>(this, 'activeCues');
  }

  public get cues(): ITextTrackCueList | null {
    return InternalHandler.get<ITextTrack, ITextTrackCueList | null>(this, 'cues');
  }

  public get id(): string {
    return InternalHandler.get<ITextTrack, string>(this, 'id');
  }

  public get inBandMetadataTrackDispatchType(): string {
    return InternalHandler.get<ITextTrack, string>(this, 'inBandMetadataTrackDispatchType');
  }

  public get kind(): ITextTrackKind {
    return InternalHandler.get<ITextTrack, ITextTrackKind>(this, 'kind');
  }

  public get label(): string {
    return InternalHandler.get<ITextTrack, string>(this, 'label');
  }

  public get language(): string {
    return InternalHandler.get<ITextTrack, string>(this, 'language');
  }

  public get mode(): ITextTrackMode {
    return InternalHandler.get<ITextTrack, ITextTrackMode>(this, 'mode');
  }

  public set mode(value: ITextTrackMode) {
    InternalHandler.set<ITextTrack, ITextTrackMode>(this, 'mode', value);
  }

  public get oncuechange(): ((this: ITextTrack, ev: IEvent) => any) | null {
    return InternalHandler.get<ITextTrack, ((this: ITextTrack, ev: IEvent) => any) | null>(this, 'oncuechange');
  }

  public set oncuechange(value: ((this: ITextTrack, ev: IEvent) => any) | null) {
    InternalHandler.set<ITextTrack, ((this: ITextTrack, ev: IEvent) => any) | null>(this, 'oncuechange', value);
  }

  // methods

  public addCue(cue: ITextTrackCue): void {
    InternalHandler.run<ITextTrack, void>(this, 'addCue', [cue]);
  }

  public removeCue(cue: ITextTrackCue): void {
    InternalHandler.run<ITextTrack, void>(this, 'removeCue', [cue]);
  }

  public addEventListener<K extends keyof ITextTrackEventMap>(
    type: K,
    listener: (this: ITextTrack, ev: ITextTrackEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<ITextTrack, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof ITextTrackEventMap>(
    type: K,
    listener: (this: ITextTrack, ev: ITextTrackEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<ITextTrack, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpTextTrackKeys: Set<string> = new Set([...rpEventTargetKeys]);

export interface ITextTrackRps extends IEventTargetRps {
  readonly activeCues?: ITextTrackCueList | null;
  readonly cues?: ITextTrackCueList | null;
  readonly id?: string;
  readonly inBandMetadataTrackDispatchType?: string;
  readonly kind?: ITextTrackKind;
  readonly label?: string;
  readonly language?: string;
}

export function setTextTrackRps(instance: ITextTrack, data: ITextTrackRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpTextTrackKeys.has(key)) {
      throw new Error(`${key} is not a property of TextTrack`);
    }
    properties[key] = value;
  });
}
