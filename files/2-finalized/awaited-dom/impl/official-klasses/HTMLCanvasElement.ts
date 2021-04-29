import StateMachine from '../../base/StateMachine';
import { IHTMLCanvasElement, IMediaStream, IOffscreenCanvas } from '../../base/interfaces/official';
import { HTMLCanvasElementGenerator, IHTMLCanvasElementProperties } from '../../base/official-klasses/HTMLCanvasElement';
import { createMediaStream, createOffscreenCanvas } from '../create';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLCanvasElement, IHTMLCanvasElementProperties>();
const HTMLCanvasElementBaseClass = HTMLCanvasElementGenerator(HTMLElement);

export default class HTMLCanvasElement extends HTMLCanvasElementBaseClass implements IHTMLCanvasElement {
  constructor() {
    super();
  }

  // methods

  public captureStream(frameRequestRate?: number): IMediaStream {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createMediaStream(awaitedPath.addMethod(this, 'captureStream', frameRequestRate), awaitedOptions);
  }

  public transferControlToOffscreen(): IOffscreenCanvas {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createOffscreenCanvas(awaitedPath.addMethod(this, 'transferControlToOffscreen', ), awaitedOptions);
  }
}
