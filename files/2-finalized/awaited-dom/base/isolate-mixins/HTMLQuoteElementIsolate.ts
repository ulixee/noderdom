import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLQuoteElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLQuoteElementIsolate, IHTMLQuoteElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLQuoteElementIsolate>('HTMLQuoteElementIsolate', getState, setState);

export default class HTMLQuoteElementIsolate implements IHTMLQuoteElementIsolate {
  public get cite(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'cite', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLQuoteElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly cite?: Promise<string>;
}

export const HTMLQuoteElementIsolatePropertyKeys = ['cite'];

export const HTMLQuoteElementIsolateConstantKeys = [];
