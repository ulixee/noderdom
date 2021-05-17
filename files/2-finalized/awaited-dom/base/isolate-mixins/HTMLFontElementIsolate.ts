import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLFontElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLFontElementIsolate, IHTMLFontElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLFontElementIsolate>('HTMLFontElementIsolate', getState, setState);

export default class HTMLFontElementIsolate implements IHTMLFontElementIsolate {
  public get color(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'color', false);
  }

  public get face(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'face', false);
  }

  public get size(): Promise<string> | Promise<number> {
    return awaitedHandler.getProperty<string>(this, 'size', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLFontElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly color?: Promise<string>;
  readonly face?: Promise<string>;
  readonly size?: Promise<string> | Promise<number>;
}

export const HTMLFontElementIsolatePropertyKeys = ['color', 'face', 'size'];

export const HTMLFontElementIsolateConstantKeys = [];
