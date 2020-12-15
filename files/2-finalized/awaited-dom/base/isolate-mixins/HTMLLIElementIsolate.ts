import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLLIElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLLIElementIsolate, IHTMLLIElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLLIElementIsolate>('HTMLLIElementIsolate', getState, setState);

export default class HTMLLIElementIsolate implements IHTMLLIElementIsolate {
  public get type(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'type', false);
  }

  public get value(): Promise<string> | Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'value', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLLIElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly type?: Promise<string>;
  readonly value?: Promise<string> | Promise<number>;
}

export const HTMLLIElementIsolatePropertyKeys = ['type', 'value'];

export const HTMLLIElementIsolateConstantKeys = [];
