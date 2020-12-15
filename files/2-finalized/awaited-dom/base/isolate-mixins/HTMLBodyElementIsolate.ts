import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLBodyElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLBodyElementIsolate, IHTMLBodyElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLBodyElementIsolate>('HTMLBodyElementIsolate', getState, setState);

export default class HTMLBodyElementIsolate implements IHTMLBodyElementIsolate {
  public get aLink(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'aLink', false);
  }

  public get background(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'background', false);
  }

  public get bgColor(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'bgColor', false);
  }

  public get link(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'link', false);
  }

  public get text(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'text', false);
  }

  public get vLink(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'vLink', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLBodyElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly aLink?: Promise<string>;
  readonly background?: Promise<string>;
  readonly bgColor?: Promise<string>;
  readonly link?: Promise<string>;
  readonly text?: Promise<string>;
  readonly vLink?: Promise<string>;
}

export const HTMLBodyElementIsolatePropertyKeys = ['aLink', 'background', 'bgColor', 'link', 'text', 'vLink'];

export const HTMLBodyElementIsolateConstantKeys = [];
