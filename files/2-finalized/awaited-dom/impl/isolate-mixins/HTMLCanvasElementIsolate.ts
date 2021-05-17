import StateMachine from '../../base/StateMachine';
import { IHTMLCanvasElementIsolate } from '../../base/interfaces/isolate';
import { IMediaStream, IOffscreenCanvas } from '../../base/interfaces/official';
import HTMLCanvasElementIsolateBase, { IHTMLCanvasElementIsolateProperties } from '../../base/isolate-mixins/HTMLCanvasElementIsolate';
import { createMediaStream, createOffscreenCanvas } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLCanvasElementIsolate, IHTMLCanvasElementIsolateProperties>();

export default class HTMLCanvasElementIsolate extends HTMLCanvasElementIsolateBase implements IHTMLCanvasElementIsolate {
  public captureStream(frameRequestRate?: number): IMediaStream {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createMediaStream(awaitedPath.addMethod(this, 'captureStream', frameRequestRate), awaitedOptions);
  }

  public transferControlToOffscreen(): IOffscreenCanvas {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createOffscreenCanvas(awaitedPath.addMethod(this, 'transferControlToOffscreen', ), awaitedOptions);
  }
}
