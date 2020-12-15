import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLDivElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLDivElementIsolate, IHTMLDivElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLDivElementIsolate>('HTMLDivElementIsolate', getState, setState);

export default class HTMLDivElementIsolate implements IHTMLDivElementIsolate {
  public get align(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'align', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDivElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly align?: Promise<string>;
}

export const HTMLDivElementIsolatePropertyKeys = ['align'];

export const HTMLDivElementIsolateConstantKeys = [];
