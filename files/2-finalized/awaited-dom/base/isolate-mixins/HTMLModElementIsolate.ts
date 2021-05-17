import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLModElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLModElementIsolate, IHTMLModElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLModElementIsolate>('HTMLModElementIsolate', getState, setState);

export default class HTMLModElementIsolate implements IHTMLModElementIsolate {
  public get cite(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'cite', false);
  }

  public get dateTime(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'dateTime', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLModElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly cite?: Promise<string>;
  readonly dateTime?: Promise<string>;
}

export const HTMLModElementIsolatePropertyKeys = ['cite', 'dateTime'];

export const HTMLModElementIsolateConstantKeys = [];
