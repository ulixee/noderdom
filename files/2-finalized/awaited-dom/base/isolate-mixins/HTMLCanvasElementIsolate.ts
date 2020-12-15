import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLCanvasElementIsolate } from '../interfaces/isolate';
import { IMediaStream, IOffscreenCanvas } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLCanvasElementIsolate, IHTMLCanvasElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLCanvasElementIsolate>('HTMLCanvasElementIsolate', getState, setState);

export default class HTMLCanvasElementIsolate implements IHTMLCanvasElementIsolate {
  public get height(): Promise<number> | Promise<string> {
    return awaitedHandler.getProperty<number>(this, 'height', false);
  }

  public get width(): Promise<number> | Promise<string> {
    return awaitedHandler.getProperty<number>(this, 'width', false);
  }

  // methods

  public captureStream(frameRequestRate?: number): IMediaStream {
    throw new Error('HTMLCanvasElementIsolate.captureStream not implemented');
  }

  public toDataURL(type?: string, quality?: any): Promise<string> {
    return awaitedHandler.runMethod<string>(this, 'toDataURL', [type, quality]);
  }

  public transferControlToOffscreen(): IOffscreenCanvas {
    throw new Error('HTMLCanvasElementIsolate.transferControlToOffscreen not implemented');
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLCanvasElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly height?: Promise<number> | Promise<string>;
  readonly width?: Promise<number> | Promise<string>;
}

export const HTMLCanvasElementIsolatePropertyKeys = ['height', 'width'];

export const HTMLCanvasElementIsolateConstantKeys = [];
