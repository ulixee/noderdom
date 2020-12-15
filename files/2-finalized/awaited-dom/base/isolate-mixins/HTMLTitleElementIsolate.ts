import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTitleElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTitleElementIsolate, IHTMLTitleElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTitleElementIsolate>('HTMLTitleElementIsolate', getState, setState);

export default class HTMLTitleElementIsolate implements IHTMLTitleElementIsolate {
  public get text(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'text', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTitleElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly text?: Promise<string>;
}

export const HTMLTitleElementIsolatePropertyKeys = ['text'];

export const HTMLTitleElementIsolateConstantKeys = [];
