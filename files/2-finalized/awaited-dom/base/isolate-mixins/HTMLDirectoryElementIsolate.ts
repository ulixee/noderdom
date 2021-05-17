import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLDirectoryElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLDirectoryElementIsolate, IHTMLDirectoryElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLDirectoryElementIsolate>('HTMLDirectoryElementIsolate', getState, setState);

export default class HTMLDirectoryElementIsolate implements IHTMLDirectoryElementIsolate {
  public get compact(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'compact', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDirectoryElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly compact?: Promise<boolean>;
}

export const HTMLDirectoryElementIsolatePropertyKeys = ['compact'];

export const HTMLDirectoryElementIsolateConstantKeys = [];
