import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLMediaElementIsolate } from '../interfaces/isolate';
import { IAudioTrackList, ITimeRanges, IDOMTokenList, IMediaError, IMediaKeys, IDocumentReadyState, ITextTrackList, IVideoTrackList, ICanPlayTypeResult, IMediaStream } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLMediaElementIsolate, IHTMLMediaElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLMediaElementIsolate>('HTMLMediaElementIsolate', getState, setState);

export default class HTMLMediaElementIsolate implements IHTMLMediaElementIsolate {
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
    throw new Error('HTMLMediaElementIsolate.audioTracks getter not implemented');
  }

  public get autoplay(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'autoplay', false);
  }

  public get buffered(): ITimeRanges {
    throw new Error('HTMLMediaElementIsolate.buffered getter not implemented');
  }

  public get controls(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'controls', false);
  }

  public get controlsList(): IDOMTokenList {
    throw new Error('HTMLMediaElementIsolate.controlsList getter not implemented');
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
    throw new Error('HTMLMediaElementIsolate.error getter not implemented');
  }

  public get loop(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'loop', false);
  }

  public get mediaKeys(): IMediaKeys {
    throw new Error('HTMLMediaElementIsolate.mediaKeys getter not implemented');
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
    throw new Error('HTMLMediaElementIsolate.played getter not implemented');
  }

  public get preload(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'preload', false);
  }

  public get readyState(): Promise<IDocumentReadyState> | Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'readyState', false);
  }

  public get seekable(): ITimeRanges {
    throw new Error('HTMLMediaElementIsolate.seekable getter not implemented');
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
    throw new Error('HTMLMediaElementIsolate.textTracks getter not implemented');
  }

  public get videoTracks(): IVideoTrackList {
    throw new Error('HTMLMediaElementIsolate.videoTracks getter not implemented');
  }

  public get volume(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'volume', false);
  }

  // methods

  public canPlayType(type: string): Promise<ICanPlayTypeResult> {
    return awaitedHandler.runMethod<ICanPlayTypeResult>(this, 'canPlayType', [type]);
  }

  public captureStream(): IMediaStream {
    throw new Error('HTMLMediaElementIsolate.captureStream not implemented');
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
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLMediaElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
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
  readonly readyState?: Promise<IDocumentReadyState> | Promise<number>;
  readonly seekable?: ITimeRanges;
  readonly seeking?: Promise<boolean>;
  readonly sinkId?: Promise<string>;
  readonly src?: Promise<string>;
  readonly textTracks?: ITextTrackList;
  readonly videoTracks?: IVideoTrackList;
  readonly volume?: Promise<number>;
}

export const HTMLMediaElementIsolatePropertyKeys = ['audioTracks', 'autoplay', 'buffered', 'controls', 'controlsList', 'crossOrigin', 'currentSrc', 'currentTime', 'defaultMuted', 'defaultPlaybackRate', 'disableRemotePlayback', 'duration', 'ended', 'error', 'loop', 'mediaKeys', 'muted', 'networkState', 'playbackRate', 'played', 'preload', 'readyState', 'seekable', 'seeking', 'sinkId', 'src', 'textTracks', 'videoTracks', 'volume'];

export const HTMLMediaElementIsolateConstantKeys = ['HAVE_CURRENT_DATA', 'HAVE_ENOUGH_DATA', 'HAVE_FUTURE_DATA', 'HAVE_METADATA', 'HAVE_NOTHING', 'NETWORK_EMPTY', 'NETWORK_IDLE', 'NETWORK_LOADING', 'NETWORK_NO_SOURCE'];
