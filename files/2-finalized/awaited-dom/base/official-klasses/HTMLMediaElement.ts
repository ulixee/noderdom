import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLMediaElement, IHTMLElement, IAudioTrackList, ITimeRanges, IDOMTokenList, IMediaError, IMediaKeys, ITextTrackList, IVideoTrackList, ICanPlayTypeResult, IMediaStream } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLMediaElement, IHTMLMediaElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLMediaElement>('HTMLMediaElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLMediaElement>(getState, setState, awaitedHandler);

export function HTMLMediaElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLMediaElement extends HTMLElement implements IHTMLMediaElement, PromiseLike<IHTMLMediaElement> {
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
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLMediaElement>(this, HTMLMediaElementConstantKeys, HTMLMediaElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLMediaElement',
      });
    }

    // properties

    public get audioTracks(): IAudioTrackList {
      throw new Error('HTMLMediaElement.audioTracks getter not implemented');
    }

    public get autoplay(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'autoplay', false);
    }

    public get buffered(): ITimeRanges {
      throw new Error('HTMLMediaElement.buffered getter not implemented');
    }

    public get controls(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'controls', false);
    }

    public get controlsList(): IDOMTokenList {
      throw new Error('HTMLMediaElement.controlsList getter not implemented');
    }

    public get crossOrigin(): Promise<string | null> {
      return awaitedHandler.getProperty<string | null>(this, 'crossOrigin', true);
    }

    public get currentSrc(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'currentSrc', false);
    }

    public get currentTime(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'currentTime', false);
    }

    public get defaultMuted(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'defaultMuted', false);
    }

    public get defaultPlaybackRate(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'defaultPlaybackRate', false);
    }

    public get disableRemotePlayback(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'disableRemotePlayback', false);
    }

    public get duration(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'duration', false);
    }

    public get ended(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'ended', false);
    }

    public get error(): IMediaError {
      throw new Error('HTMLMediaElement.error getter not implemented');
    }

    public get loop(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'loop', false);
    }

    public get mediaKeys(): IMediaKeys {
      throw new Error('HTMLMediaElement.mediaKeys getter not implemented');
    }

    public get muted(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'muted', false);
    }

    public get networkState(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'networkState', false);
    }

    public get playbackRate(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'playbackRate', false);
    }

    public get played(): ITimeRanges {
      throw new Error('HTMLMediaElement.played getter not implemented');
    }

    public get preload(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'preload', false);
    }

    public get readyState(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'readyState', false);
    }

    public get seekable(): ITimeRanges {
      throw new Error('HTMLMediaElement.seekable getter not implemented');
    }

    public get seeking(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'seeking', false);
    }

    public get sinkId(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'sinkId', false);
    }

    public get src(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'src', false);
    }

    public get textTracks(): ITextTrackList {
      throw new Error('HTMLMediaElement.textTracks getter not implemented');
    }

    public get videoTracks(): IVideoTrackList {
      throw new Error('HTMLMediaElement.videoTracks getter not implemented');
    }

    public get volume(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'volume', false);
    }

    // methods

    public canPlayType(type: string): Promise<ICanPlayTypeResult> {
      return awaitedHandler.runMethod<ICanPlayTypeResult>(this, 'canPlayType', [type]);
    }

    public captureStream(): IMediaStream {
      throw new Error('HTMLMediaElement.captureStream not implemented');
    }

    public load(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'load', []);
    }

    public pause(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'pause', []);
    }

    public play(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'play', []);
    }

    public setSinkId(sinkId: string): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'setSinkId', [sinkId]);
    }

    public then<TResult1 = IHTMLMediaElement, TResult2 = never>(onfulfilled?: ((value: IHTMLMediaElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLMediaElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly audioTracks?: IAudioTrackList;
  readonly autoplay?: Promise<boolean>;
  readonly buffered?: ITimeRanges;
  readonly controls?: Promise<boolean>;
  readonly controlsList?: IDOMTokenList;
  readonly crossOrigin?: Promise<string | null>;
  readonly currentSrc?: Promise<string>;
  readonly currentTime?: Promise<number>;
  readonly defaultMuted?: Promise<boolean>;
  readonly defaultPlaybackRate?: Promise<number>;
  readonly disableRemotePlayback?: Promise<boolean>;
  readonly duration?: Promise<number>;
  readonly ended?: Promise<boolean>;
  readonly error?: IMediaError;
  readonly loop?: Promise<boolean>;
  readonly mediaKeys?: IMediaKeys;
  readonly muted?: Promise<boolean>;
  readonly networkState?: Promise<number>;
  readonly playbackRate?: Promise<number>;
  readonly played?: ITimeRanges;
  readonly preload?: Promise<string>;
  readonly readyState?: Promise<number>;
  readonly seekable?: ITimeRanges;
  readonly seeking?: Promise<boolean>;
  readonly sinkId?: Promise<string>;
  readonly src?: Promise<string>;
  readonly textTracks?: ITextTrackList;
  readonly videoTracks?: IVideoTrackList;
  readonly volume?: Promise<number>;
}

export const HTMLMediaElementPropertyKeys = [...HTMLElementPropertyKeys, 'audioTracks', 'autoplay', 'buffered', 'controls', 'controlsList', 'crossOrigin', 'currentSrc', 'currentTime', 'defaultMuted', 'defaultPlaybackRate', 'disableRemotePlayback', 'duration', 'ended', 'error', 'loop', 'mediaKeys', 'muted', 'networkState', 'playbackRate', 'played', 'preload', 'readyState', 'seekable', 'seeking', 'sinkId', 'src', 'textTracks', 'videoTracks', 'volume'];

export const HTMLMediaElementConstantKeys = [...HTMLElementConstantKeys, 'HAVE_CURRENT_DATA', 'HAVE_ENOUGH_DATA', 'HAVE_FUTURE_DATA', 'HAVE_METADATA', 'HAVE_NOTHING', 'NETWORK_EMPTY', 'NETWORK_IDLE', 'NETWORK_LOADING', 'NETWORK_NO_SOURCE'];
