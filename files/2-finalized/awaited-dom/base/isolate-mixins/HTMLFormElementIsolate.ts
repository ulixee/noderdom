import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLFormElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLFormElementIsolate, IHTMLFormElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLFormElementIsolate>('HTMLFormElementIsolate', getState, setState);

export default class HTMLFormElementIsolate implements IHTMLFormElementIsolate {
  public get acceptCharset(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'acceptCharset', false);
  }

  public get action(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'action', false);
  }

  public get autocomplete(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'autocomplete', false);
  }

  public get encoding(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'encoding', false);
  }

  public get enctype(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'enctype', false);
  }

  public get length(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'length', false);
  }

  public get name(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'name', false);
  }

  public get noValidate(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'noValidate', false);
  }

  public get target(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'target', false);
  }

  // methods

  public checkValidity(): Promise<boolean> {
    return awaitedHandler.runMethod<boolean>(this, 'checkValidity', []);
  }

  public reportValidity(): Promise<boolean> {
    return awaitedHandler.runMethod<boolean>(this, 'reportValidity', []);
  }

  public reset(): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'reset', []);
  }

  public submit(): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'submit', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLFormElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly acceptCharset?: Promise<string>;
  readonly action?: Promise<string>;
  readonly autocomplete?: Promise<string>;
  readonly encoding?: Promise<string>;
  readonly enctype?: Promise<string>;
  readonly length?: Promise<number>;
  readonly name?: Promise<string>;
  readonly noValidate?: Promise<boolean>;
  readonly target?: Promise<string>;
}

export const HTMLFormElementIsolatePropertyKeys = ['acceptCharset', 'action', 'autocomplete', 'encoding', 'enctype', 'length', 'name', 'noValidate', 'target'];

export const HTMLFormElementIsolateConstantKeys = [];
