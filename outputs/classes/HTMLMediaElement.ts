import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, ITimeRanges, IAudioTrackList, IVideoTrackList, ITextTrackList, ICanPlayTypeResult, ITextTrackKind, ITextTrack, IHTMLMediaElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLMediaElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLMediaElement extends HTMLElement implements IHTMLMediaElement {
    public static readonly HAVE_CURRENT_DATA: number = 2;
    public static readonly HAVE_ENOUGH_DATA: number = 4;
    public static readonly HAVE_FUTURE_DATA: number = 3;
    public static readonly HAVE_METADATA: number = 1;
    public static readonly HAVE_NOTHING: number = 0;
    public static readonly NETWORK_EMPTY: number = 0;
    public static readonly NETWORK_IDLE: number = 1;
    public static readonly NETWORK_LOADING: number = 2;
    public static readonly NETWORK_NO_SOURCE: number = 3;

    public readonly HAVE_CURRENT_DATA: number = 2;
    public readonly HAVE_ENOUGH_DATA: number = 4;
    public readonly HAVE_FUTURE_DATA: number = 3;
    public readonly HAVE_METADATA: number = 1;
    public readonly HAVE_NOTHING: number = 0;
    public readonly NETWORK_EMPTY: number = 0;
    public readonly NETWORK_IDLE: number = 1;
    public readonly NETWORK_LOADING: number = 2;
    public readonly NETWORK_NO_SOURCE: number = 3;

    // properties

    public get audioTracks(): IAudioTrackList {
      return InternalHandler.get<IHTMLMediaElement, IAudioTrackList>(this, 'audioTracks');
    }

    public get autoplay(): boolean {
      return InternalHandler.get<IHTMLMediaElement, boolean>(this, 'autoplay');
    }

    public set autoplay(value: boolean) {
      InternalHandler.set<IHTMLMediaElement, boolean>(this, 'autoplay', value);
    }

    public get buffered(): ITimeRanges {
      return InternalHandler.get<IHTMLMediaElement, ITimeRanges>(this, 'buffered');
    }

    public get controls(): boolean {
      return InternalHandler.get<IHTMLMediaElement, boolean>(this, 'controls');
    }

    public set controls(value: boolean) {
      InternalHandler.set<IHTMLMediaElement, boolean>(this, 'controls', value);
    }

    public get crossOrigin(): string | null {
      return InternalHandler.get<IHTMLMediaElement, string | null>(this, 'crossOrigin');
    }

    public set crossOrigin(value: string | null) {
      InternalHandler.set<IHTMLMediaElement, string | null>(this, 'crossOrigin', value);
    }

    public get currentSrc(): string {
      return InternalHandler.get<IHTMLMediaElement, string>(this, 'currentSrc');
    }

    public get currentTime(): number {
      return InternalHandler.get<IHTMLMediaElement, number>(this, 'currentTime');
    }

    public set currentTime(value: number) {
      InternalHandler.set<IHTMLMediaElement, number>(this, 'currentTime', value);
    }

    public get defaultMuted(): boolean {
      return InternalHandler.get<IHTMLMediaElement, boolean>(this, 'defaultMuted');
    }

    public set defaultMuted(value: boolean) {
      InternalHandler.set<IHTMLMediaElement, boolean>(this, 'defaultMuted', value);
    }

    public get defaultPlaybackRate(): number {
      return InternalHandler.get<IHTMLMediaElement, number>(this, 'defaultPlaybackRate');
    }

    public set defaultPlaybackRate(value: number) {
      InternalHandler.set<IHTMLMediaElement, number>(this, 'defaultPlaybackRate', value);
    }

    public get duration(): number {
      return InternalHandler.get<IHTMLMediaElement, number>(this, 'duration');
    }

    public get ended(): boolean {
      return InternalHandler.get<IHTMLMediaElement, boolean>(this, 'ended');
    }

    public get loop(): boolean {
      return InternalHandler.get<IHTMLMediaElement, boolean>(this, 'loop');
    }

    public set loop(value: boolean) {
      InternalHandler.set<IHTMLMediaElement, boolean>(this, 'loop', value);
    }

    public get muted(): boolean {
      return InternalHandler.get<IHTMLMediaElement, boolean>(this, 'muted');
    }

    public set muted(value: boolean) {
      InternalHandler.set<IHTMLMediaElement, boolean>(this, 'muted', value);
    }

    public get networkState(): number {
      return InternalHandler.get<IHTMLMediaElement, number>(this, 'networkState');
    }

    public get paused(): boolean {
      return InternalHandler.get<IHTMLMediaElement, boolean>(this, 'paused');
    }

    public get playbackRate(): number {
      return InternalHandler.get<IHTMLMediaElement, number>(this, 'playbackRate');
    }

    public set playbackRate(value: number) {
      InternalHandler.set<IHTMLMediaElement, number>(this, 'playbackRate', value);
    }

    public get played(): ITimeRanges {
      return InternalHandler.get<IHTMLMediaElement, ITimeRanges>(this, 'played');
    }

    public get preload(): string {
      return InternalHandler.get<IHTMLMediaElement, string>(this, 'preload');
    }

    public set preload(value: string) {
      InternalHandler.set<IHTMLMediaElement, string>(this, 'preload', value);
    }

    public get readyState(): number {
      return InternalHandler.get<IHTMLMediaElement, number>(this, 'readyState');
    }

    public get seekable(): ITimeRanges {
      return InternalHandler.get<IHTMLMediaElement, ITimeRanges>(this, 'seekable');
    }

    public get seeking(): boolean {
      return InternalHandler.get<IHTMLMediaElement, boolean>(this, 'seeking');
    }

    public get src(): string {
      return InternalHandler.get<IHTMLMediaElement, string>(this, 'src');
    }

    public set src(value: string) {
      InternalHandler.set<IHTMLMediaElement, string>(this, 'src', value);
    }

    public get textTracks(): ITextTrackList {
      return InternalHandler.get<IHTMLMediaElement, ITextTrackList>(this, 'textTracks');
    }

    public get videoTracks(): IVideoTrackList {
      return InternalHandler.get<IHTMLMediaElement, IVideoTrackList>(this, 'videoTracks');
    }

    public get volume(): number {
      return InternalHandler.get<IHTMLMediaElement, number>(this, 'volume');
    }

    public set volume(value: number) {
      InternalHandler.set<IHTMLMediaElement, number>(this, 'volume', value);
    }

    // methods

    public addTextTrack(kind: ITextTrackKind, label?: string, language?: string): ITextTrack {
      return InternalHandler.run<IHTMLMediaElement, ITextTrack>(this, 'addTextTrack', [kind, label, language]);
    }

    public canPlayType(type: string): ICanPlayTypeResult {
      return InternalHandler.run<IHTMLMediaElement, ICanPlayTypeResult>(this, 'canPlayType', [type]);
    }

    public load(): void {
      InternalHandler.run<IHTMLMediaElement, void>(this, 'load', []);
    }

    public pause(): void {
      InternalHandler.run<IHTMLMediaElement, void>(this, 'pause', []);
    }

    public play(): Promise<void> {
      return InternalHandler.run<IHTMLMediaElement, Promise<void>>(this, 'play', []);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMediaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLMediaElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMediaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLMediaElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLMediaElementProperties extends IHTMLElementProperties {
  audioTracks?: IAudioTrackList;
  autoplay?: boolean;
  buffered?: ITimeRanges;
  controls?: boolean;
  crossOrigin?: string | null;
  currentSrc?: string;
  currentTime?: number;
  defaultMuted?: boolean;
  defaultPlaybackRate?: number;
  duration?: number;
  ended?: boolean;
  loop?: boolean;
  muted?: boolean;
  networkState?: number;
  paused?: boolean;
  playbackRate?: number;
  played?: ITimeRanges;
  preload?: string;
  readyState?: number;
  seekable?: ITimeRanges;
  seeking?: boolean;
  src?: string;
  textTracks?: ITextTrackList;
  videoTracks?: IVideoTrackList;
  volume?: number;
}

export interface IHTMLMediaElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  audioTracks?: IAudioTrackList;
  buffered?: ITimeRanges;
  currentSrc?: string;
  duration?: number;
  ended?: boolean;
  networkState?: number;
  paused?: boolean;
  played?: ITimeRanges;
  readyState?: number;
  seekable?: ITimeRanges;
  seeking?: boolean;
  textTracks?: ITextTrackList;
  videoTracks?: IVideoTrackList;
}

export const { getState, setState, setReadonlyOfHTMLMediaElement } = InternalStateGenerator<
  IHTMLMediaElement,
  IHTMLMediaElementProperties,
  IHTMLMediaElementReadonlyProperties
>('HTMLMediaElement');
