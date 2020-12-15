import StateMachine from '../../base/StateMachine';
import { IHTMLVideoElement, IVideoPlaybackQuality } from '../../base/interfaces/official';
import { HTMLVideoElementGenerator, IHTMLVideoElementProperties } from '../../base/official-klasses/HTMLVideoElement';
import { createVideoPlaybackQuality } from '../create';
import HTMLMediaElement from './HTMLMediaElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLVideoElement, IHTMLVideoElementProperties>();
const HTMLVideoElementBaseClass = HTMLVideoElementGenerator(HTMLMediaElement);

export default class HTMLVideoElement extends HTMLVideoElementBaseClass implements IHTMLVideoElement {
  constructor() {
    super();
  }

  // methods

  public getVideoPlaybackQuality(): IVideoPlaybackQuality {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createVideoPlaybackQuality(awaitedPath.addMethod('getVideoPlaybackQuality', ), awaitedOptions);
  }
}
