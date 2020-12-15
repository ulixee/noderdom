import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLVideoElementIsolate } from '../interfaces/isolate';
import { IVideoPlaybackQuality } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLVideoElementIsolate, IHTMLVideoElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLVideoElementIsolate>('HTMLVideoElementIsolate', getState, setState);

export default class HTMLVideoElementIsolate implements IHTMLVideoElementIsolate {
  public get height(): Promise<number> | Promise<string> {
    return awaitedHandler.getProperty<number>(this, 'height', false);
  }

  public get poster(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'poster', false);
  }

  public get videoHeight(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'videoHeight', false);
  }

  public get videoWidth(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'videoWidth', false);
  }

  public get width(): Promise<number> | Promise<string> {
    return awaitedHandler.getProperty<number>(this, 'width', false);
  }

  // methods

  public getVideoPlaybackQuality(): IVideoPlaybackQuality {
    throw new Error('HTMLVideoElementIsolate.getVideoPlaybackQuality not implemented');
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLVideoElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly height?: Promise<number> | Promise<string>;
  readonly poster?: Promise<string>;
  readonly videoHeight?: Promise<number>;
  readonly videoWidth?: Promise<number>;
  readonly width?: Promise<number> | Promise<string>;
}

export const HTMLVideoElementIsolatePropertyKeys = ['height', 'poster', 'videoHeight', 'videoWidth', 'width'];

export const HTMLVideoElementIsolateConstantKeys = [];
