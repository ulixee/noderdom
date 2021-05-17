import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTimeElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLTimeElementIsolate, IHTMLTimeElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTimeElementIsolate>('HTMLTimeElementIsolate', getState, setState);

export default class HTMLTimeElementIsolate implements IHTMLTimeElementIsolate {
  public get dateTime(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'dateTime', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTimeElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly dateTime?: Promise<string>;
}

export const HTMLTimeElementIsolatePropertyKeys = ['dateTime'];

export const HTMLTimeElementIsolateConstantKeys = [];
