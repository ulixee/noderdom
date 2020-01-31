import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IEventTarget, IVideoTrackListEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IVideoTrack, IEvent, IVideoTrackList } from '../interfaces';
import { IEventTargetProperties, IEventTargetReadonlyProperties } from './EventTarget';

// tslint:disable-next-line:variable-name
export function VideoTrackListGenerator(EventTarget: Constructable<IEventTarget>) {
  return class VideoTrackList extends EventTarget implements IVideoTrackList {
    public get length(): number {
      return InternalHandler.get<IVideoTrackList, number>(this, 'length');
    }

    public get onaddtrack(): ((this: IVideoTrackList, ev: IEvent) => any) | null {
      return InternalHandler.get<IVideoTrackList, ((this: IVideoTrackList, ev: IEvent) => any) | null>(this, 'onaddtrack');
    }

    public set onaddtrack(value: ((this: IVideoTrackList, ev: IEvent) => any) | null) {
      InternalHandler.set<IVideoTrackList, ((this: IVideoTrackList, ev: IEvent) => any) | null>(this, 'onaddtrack', value);
    }

    public get onchange(): ((this: IVideoTrackList, ev: IEvent) => any) | null {
      return InternalHandler.get<IVideoTrackList, ((this: IVideoTrackList, ev: IEvent) => any) | null>(this, 'onchange');
    }

    public set onchange(value: ((this: IVideoTrackList, ev: IEvent) => any) | null) {
      InternalHandler.set<IVideoTrackList, ((this: IVideoTrackList, ev: IEvent) => any) | null>(this, 'onchange', value);
    }

    public get onremovetrack(): ((this: IVideoTrackList, ev: IEvent) => any) | null {
      return InternalHandler.get<IVideoTrackList, ((this: IVideoTrackList, ev: IEvent) => any) | null>(this, 'onremovetrack');
    }

    public set onremovetrack(value: ((this: IVideoTrackList, ev: IEvent) => any) | null) {
      InternalHandler.set<IVideoTrackList, ((this: IVideoTrackList, ev: IEvent) => any) | null>(this, 'onremovetrack', value);
    }

    public get selectedIndex(): number {
      return InternalHandler.get<IVideoTrackList, number>(this, 'selectedIndex');
    }

    // methods

    public getTrackById(id: string): IVideoTrack | null {
      return InternalHandler.run<IVideoTrackList, IVideoTrack | null>(this, 'getTrackById', [id]);
    }

    public addEventListener<K extends keyof IVideoTrackListEventMap>(type: K, listener: (this: IVideoTrackList, ev: IVideoTrackListEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IVideoTrackList, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IVideoTrackListEventMap>(type: K, listener: (this: IVideoTrackList, ev: IVideoTrackListEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IVideoTrackList, void>(this, 'removeEventListener', [type, listener, options]);
    }

    public [Symbol.iterator](): IterableIterator<IVideoTrack> {
      return InternalHandler.run<IVideoTrackList, IterableIterator<IVideoTrack>>(this, '[Symbol.iterator]', []);
    }

    [index: number]: IVideoTrack;
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IVideoTrackListProperties extends IEventTargetProperties {
  length?: number;
  onaddtrack?: ((this: IVideoTrackList, ev: IEvent) => any) | null;
  onchange?: ((this: IVideoTrackList, ev: IEvent) => any) | null;
  onremovetrack?: ((this: IVideoTrackList, ev: IEvent) => any) | null;
  selectedIndex?: number;
}

export interface IVideoTrackListReadonlyProperties extends IEventTargetReadonlyProperties {
  length?: number;
  selectedIndex?: number;
}

export const { getState, setState, setReadonlyOfVideoTrackList } = InternalStateGenerator<
  IVideoTrackList,
  IVideoTrackListProperties,
  IVideoTrackListReadonlyProperties
>('VideoTrackList');
