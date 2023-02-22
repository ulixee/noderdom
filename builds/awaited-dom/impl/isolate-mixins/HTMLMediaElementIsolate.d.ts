import { IHTMLMediaElementIsolate } from '../../base/interfaces/isolate';
import { IAudioTrackList, ITimeRanges, IDOMTokenList, IMediaError, IMediaKeys, ITextTrackList, IVideoTrackList } from '../../base/interfaces/official';
import HTMLMediaElementIsolateBase, { IHTMLMediaElementIsolateProperties } from '../../base/isolate-mixins/HTMLMediaElementIsolate';
export declare const getState: (instance: IHTMLMediaElementIsolate) => IHTMLMediaElementIsolateProperties, setState: (instance: IHTMLMediaElementIsolate, properties: Partial<IHTMLMediaElementIsolateProperties>) => void;
export default class HTMLMediaElementIsolate extends HTMLMediaElementIsolateBase implements IHTMLMediaElementIsolate {
    get audioTracks(): IAudioTrackList;
    get buffered(): ITimeRanges;
    get controlsList(): IDOMTokenList;
    get error(): IMediaError;
    get mediaKeys(): IMediaKeys;
    get played(): ITimeRanges;
    get seekable(): ITimeRanges;
    get textTracks(): ITextTrackList;
    get videoTracks(): IVideoTrackList;
}
