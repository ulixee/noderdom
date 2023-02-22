import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLMediaElementIsolate } from '../interfaces/isolate';
import { IAudioTrackList, ITimeRanges, IDOMTokenList, IMediaError, IMediaKeys, IDocumentReadyState, ITextTrackList, IVideoTrackList, ICanPlayTypeResult } from '../interfaces/official';
export declare const getState: (instance: IHTMLMediaElementIsolate) => IHTMLMediaElementIsolateProperties, setState: (instance: IHTMLMediaElementIsolate, properties: Partial<IHTMLMediaElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLMediaElementIsolate>;
export default class HTMLMediaElementIsolate implements IHTMLMediaElementIsolate {
    static readonly HAVE_CURRENT_DATA: number;
    static readonly HAVE_ENOUGH_DATA: number;
    static readonly HAVE_FUTURE_DATA: number;
    static readonly HAVE_METADATA: number;
    static readonly HAVE_NOTHING: number;
    static readonly NETWORK_EMPTY: number;
    static readonly NETWORK_IDLE: number;
    static readonly NETWORK_LOADING: number;
    static readonly NETWORK_NO_SOURCE: number;
    readonly HAVE_CURRENT_DATA: number;
    readonly HAVE_ENOUGH_DATA: number;
    readonly HAVE_FUTURE_DATA: number;
    readonly HAVE_METADATA: number;
    readonly HAVE_NOTHING: number;
    readonly NETWORK_EMPTY: number;
    readonly NETWORK_IDLE: number;
    readonly NETWORK_LOADING: number;
    readonly NETWORK_NO_SOURCE: number;
    get audioTracks(): IAudioTrackList;
    get autoplay(): Promise<boolean>;
    get buffered(): ITimeRanges;
    get controls(): Promise<boolean>;
    get controlsList(): IDOMTokenList;
    get crossOrigin(): Promise<string | null>;
    get currentSrc(): Promise<string>;
    get currentTime(): Promise<number>;
    get defaultMuted(): Promise<boolean>;
    get defaultPlaybackRate(): Promise<number>;
    get disableRemotePlayback(): Promise<boolean>;
    get duration(): Promise<number>;
    get ended(): Promise<boolean>;
    get error(): IMediaError;
    get loop(): Promise<boolean>;
    get mediaKeys(): IMediaKeys;
    get muted(): Promise<boolean>;
    get networkState(): Promise<number>;
    get playbackRate(): Promise<number>;
    get played(): ITimeRanges;
    get preload(): Promise<string>;
    get readyState(): Promise<IDocumentReadyState> | Promise<number>;
    get seekable(): ITimeRanges;
    get seeking(): Promise<boolean>;
    get sinkId(): Promise<string>;
    get src(): Promise<string>;
    get textTracks(): ITextTrackList;
    get videoTracks(): IVideoTrackList;
    get volume(): Promise<number>;
    canPlayType(type: string): Promise<ICanPlayTypeResult>;
    load(): Promise<void>;
    pause(): Promise<void>;
    play(): Promise<void>;
    setSinkId(sinkId: string): Promise<void>;
}
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
export declare const HTMLMediaElementIsolatePropertyKeys: string[];
export declare const HTMLMediaElementIsolateConstantKeys: string[];
