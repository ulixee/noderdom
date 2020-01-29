import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IEventTarget, IAudioTrackListEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IAudioTrack, IEvent, IAudioTrackList } from '../interfaces';
import { IEventTargetProperties, IEventTargetReadonlyProperties } from './EventTarget';

// tslint:disable-next-line:variable-name
export function AudioTrackListGenerator(EventTarget: Constructable<IEventTarget>) {
  return class AudioTrackList extends EventTarget implements IAudioTrackList {
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
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IAudioTrackListProperties extends IEventTargetProperties {
  length?: number;
  onaddtrack?: ((this: IAudioTrackList, ev: IEvent) => any) | null;
  onchange?: ((this: IAudioTrackList, ev: IEvent) => any) | null;
  onremovetrack?: ((this: IAudioTrackList, ev: IEvent) => any) | null;
}

export interface IAudioTrackListReadonlyProperties extends IEventTargetReadonlyProperties {
  length?: number;
}

export const { getState, setState, setReadonlyOfAudioTrackList } = InternalStateGenerator<
  IAudioTrackList,
  IAudioTrackListProperties,
  IAudioTrackListReadonlyProperties
>('AudioTrackList');
