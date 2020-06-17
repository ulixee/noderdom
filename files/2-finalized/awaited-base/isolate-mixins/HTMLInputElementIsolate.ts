import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLInputElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLInputElementIsolate, IHTMLInputElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLInputElementIsolate>('HTMLInputElementIsolate', getState, setState);

export default class HTMLInputElementIsolate implements IHTMLInputElementIsolate {
  public select(): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'select', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLInputElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLInputElementIsolatePropertyKeys = [];

export const HTMLInputElementIsolateConstantKeys = [];
