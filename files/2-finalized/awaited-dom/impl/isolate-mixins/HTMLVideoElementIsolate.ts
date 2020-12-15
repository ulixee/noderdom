import StateMachine from '../../base/StateMachine';
import { IHTMLVideoElementIsolate } from '../../base/interfaces/isolate';
import { IVideoPlaybackQuality } from '../../base/interfaces/official';
import HTMLVideoElementIsolateBase, { IHTMLVideoElementIsolateProperties } from '../../base/isolate-mixins/HTMLVideoElementIsolate';
import { createVideoPlaybackQuality } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLVideoElementIsolate, IHTMLVideoElementIsolateProperties>();

export default class HTMLVideoElementIsolate extends HTMLVideoElementIsolateBase implements IHTMLVideoElementIsolate {
  public getVideoPlaybackQuality(): IVideoPlaybackQuality {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createVideoPlaybackQuality(awaitedPath.addMethod('getVideoPlaybackQuality', ), awaitedOptions);
  }
}
