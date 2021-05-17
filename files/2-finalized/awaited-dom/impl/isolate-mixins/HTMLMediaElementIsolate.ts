import StateMachine from '../../base/StateMachine';
import { IHTMLMediaElementIsolate } from '../../base/interfaces/isolate';
import { IAudioTrackList, ITimeRanges, IDOMTokenList, IMediaError, IMediaKeys, ITextTrackList, IVideoTrackList, IMediaStream } from '../../base/interfaces/official';
import HTMLMediaElementIsolateBase, { IHTMLMediaElementIsolateProperties } from '../../base/isolate-mixins/HTMLMediaElementIsolate';
import { createAudioTrackList, createTimeRanges, createDOMTokenList, createMediaError, createMediaKeys, createTextTrackList, createVideoTrackList, createMediaStream } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLMediaElementIsolate, IHTMLMediaElementIsolateProperties>();

export default class HTMLMediaElementIsolate extends HTMLMediaElementIsolateBase implements IHTMLMediaElementIsolate {
  public get audioTracks(): IAudioTrackList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createAudioTrackList(awaitedPath.addProperty(this, 'audioTracks'), awaitedOptions);
  }

  public get buffered(): ITimeRanges {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createTimeRanges(awaitedPath.addProperty(this, 'buffered'), awaitedOptions);
  }

  public get controlsList(): IDOMTokenList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMTokenList(awaitedPath.addProperty(this, 'controlsList'), awaitedOptions);
  }

  public get error(): IMediaError {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createMediaError(awaitedPath.addProperty(this, 'error'), awaitedOptions);
  }

  public get mediaKeys(): IMediaKeys {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createMediaKeys(awaitedPath.addProperty(this, 'mediaKeys'), awaitedOptions);
  }

  public get played(): ITimeRanges {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createTimeRanges(awaitedPath.addProperty(this, 'played'), awaitedOptions);
  }

  public get seekable(): ITimeRanges {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createTimeRanges(awaitedPath.addProperty(this, 'seekable'), awaitedOptions);
  }

  public get textTracks(): ITextTrackList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createTextTrackList(awaitedPath.addProperty(this, 'textTracks'), awaitedOptions);
  }

  public get videoTracks(): IVideoTrackList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createVideoTrackList(awaitedPath.addProperty(this, 'videoTracks'), awaitedOptions);
  }

  // methods

  public captureStream(): IMediaStream {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createMediaStream(awaitedPath.addMethod(this, 'captureStream', ), awaitedOptions);
  }
}
