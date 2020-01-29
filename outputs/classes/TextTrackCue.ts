import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IEventTarget, ITextTrackCueEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, ITextTrack, IEvent, ITextTrackCue } from '../interfaces';
import { IEventTargetProperties, IEventTargetReadonlyProperties } from './EventTarget';

// tslint:disable-next-line:variable-name
export function TextTrackCueGenerator(EventTarget: Constructable<IEventTarget>) {
  return class TextTrackCue extends EventTarget implements ITextTrackCue {
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

    public addEventListener<K extends keyof ITextTrackCueEventMap>(type: K, listener: (this: ITextTrackCue, ev: ITextTrackCueEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<ITextTrackCue, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof ITextTrackCueEventMap>(type: K, listener: (this: ITextTrackCue, ev: ITextTrackCueEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<ITextTrackCue, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ITextTrackCueProperties extends IEventTargetProperties {
  endTime?: number;
  id?: string;
  onenter?: ((this: ITextTrackCue, ev: IEvent) => any) | null;
  onexit?: ((this: ITextTrackCue, ev: IEvent) => any) | null;
  pauseOnExit?: boolean;
  startTime?: number;
  track?: ITextTrack | null;
}

export interface ITextTrackCueReadonlyProperties extends IEventTargetReadonlyProperties {
  track?: ITextTrack | null;
}

export const { getState, setState, setReadonlyOfTextTrackCue } = InternalStateGenerator<
  ITextTrackCue,
  ITextTrackCueProperties,
  ITextTrackCueReadonlyProperties
>('TextTrackCue');
