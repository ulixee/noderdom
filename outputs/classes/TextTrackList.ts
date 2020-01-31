import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IEventTarget, ITextTrackListEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, ITextTrack, IEvent, ITextTrackList } from '../interfaces';
import { IEventTargetProperties, IEventTargetReadonlyProperties } from './EventTarget';

// tslint:disable-next-line:variable-name
export function TextTrackListGenerator(EventTarget: Constructable<IEventTarget>) {
  return class TextTrackList extends EventTarget implements ITextTrackList {
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
      return InternalHandler.get<ITextTrackList, ((this: ITextTrackList, ev: IEvent) => any) | null>(this, 'onremovetrack');
    }

    public set onremovetrack(value: ((this: ITextTrackList, ev: IEvent) => any) | null) {
      InternalHandler.set<ITextTrackList, ((this: ITextTrackList, ev: IEvent) => any) | null>(this, 'onremovetrack', value);
    }

    // methods

    public getTrackById(id: string): ITextTrack | null {
      return InternalHandler.run<ITextTrackList, ITextTrack | null>(this, 'getTrackById', [id]);
    }

    public addEventListener<K extends keyof ITextTrackListEventMap>(type: K, listener: (this: ITextTrackList, ev: ITextTrackListEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<ITextTrackList, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof ITextTrackListEventMap>(type: K, listener: (this: ITextTrackList, ev: ITextTrackListEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<ITextTrackList, void>(this, 'removeEventListener', [type, listener, options]);
    }

    public [Symbol.iterator](): IterableIterator<ITextTrack> {
      return InternalHandler.run<ITextTrackList, IterableIterator<ITextTrack>>(this, '[Symbol.iterator]', []);
    }

    [index: number]: ITextTrack;
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ITextTrackListProperties extends IEventTargetProperties {
  length?: number;
  onaddtrack?: ((this: ITextTrackList, ev: IEvent) => any) | null;
  onchange?: ((this: ITextTrackList, ev: IEvent) => any) | null;
  onremovetrack?: ((this: ITextTrackList, ev: IEvent) => any) | null;
}

export interface ITextTrackListReadonlyProperties extends IEventTargetReadonlyProperties {
  length?: number;
}

export const { getState, setState, setReadonlyOfTextTrackList } = InternalStateGenerator<
  ITextTrackList,
  ITextTrackListProperties,
  ITextTrackListReadonlyProperties
>('TextTrackList');
