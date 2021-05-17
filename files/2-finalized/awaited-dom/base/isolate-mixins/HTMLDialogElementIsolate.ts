import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLDialogElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLDialogElementIsolate, IHTMLDialogElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLDialogElementIsolate>('HTMLDialogElementIsolate', getState, setState);

export default class HTMLDialogElementIsolate implements IHTMLDialogElementIsolate {
  public get open(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'open', false);
  }

  public get returnValue(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'returnValue', false);
  }

  // methods

  public close(returnValue?: string): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'close', [returnValue]);
  }

  public show(): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'show', []);
  }

  public showModal(): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'showModal', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDialogElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly open?: Promise<boolean>;
  readonly returnValue?: Promise<string>;
}

export const HTMLDialogElementIsolatePropertyKeys = ['open', 'returnValue'];

export const HTMLDialogElementIsolateConstantKeys = [];
