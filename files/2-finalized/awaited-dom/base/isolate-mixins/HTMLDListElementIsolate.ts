import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLDListElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLDListElementIsolate, IHTMLDListElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLDListElementIsolate>('HTMLDListElementIsolate', getState, setState);

export default class HTMLDListElementIsolate implements IHTMLDListElementIsolate {
  public get compact(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'compact', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDListElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly compact?: Promise<boolean>;
}

export const HTMLDListElementIsolatePropertyKeys = ['compact'];

export const HTMLDListElementIsolateConstantKeys = [];
