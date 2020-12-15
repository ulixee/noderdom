import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLFrameElementIsolate } from '../interfaces/isolate';
import { ISuperDocument } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLFrameElementIsolate, IHTMLFrameElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLFrameElementIsolate>('HTMLFrameElementIsolate', getState, setState);

export default class HTMLFrameElementIsolate implements IHTMLFrameElementIsolate {
  public get contentDocument(): ISuperDocument {
    throw new Error('HTMLFrameElementIsolate.contentDocument getter not implemented');
  }

  public get frameBorder(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'frameBorder', false);
  }

  public get longDesc(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'longDesc', false);
  }

  public get marginHeight(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'marginHeight', false);
  }

  public get marginWidth(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'marginWidth', false);
  }

  public get name(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'name', false);
  }

  public get noResize(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'noResize', false);
  }

  public get scrolling(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'scrolling', false);
  }

  public get src(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'src', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLFrameElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly contentDocument?: ISuperDocument;
  readonly frameBorder?: Promise<string>;
  readonly longDesc?: Promise<string>;
  readonly marginHeight?: Promise<string>;
  readonly marginWidth?: Promise<string>;
  readonly name?: Promise<string>;
  readonly noResize?: Promise<boolean>;
  readonly scrolling?: Promise<string>;
  readonly src?: Promise<string>;
}

export const HTMLFrameElementIsolatePropertyKeys = ['contentDocument', 'frameBorder', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'noResize', 'scrolling', 'src'];

export const HTMLFrameElementIsolateConstantKeys = [];
