import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLButtonElementIsolate } from '../interfaces/isolate';
import { IHTMLFormElement, IValidityState } from '../interfaces/official';
import { ISuperNodeList } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLButtonElementIsolate, IHTMLButtonElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLButtonElementIsolate>('HTMLButtonElementIsolate', getState, setState);

export default class HTMLButtonElementIsolate implements IHTMLButtonElementIsolate {
  public get autofocus(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'autofocus', false);
  }

  public get disabled(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'disabled', false);
  }

  public get form(): IHTMLFormElement {
    throw new Error('HTMLButtonElementIsolate.form getter not implemented');
  }

  public get formAction(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'formAction', false);
  }

  public get formEnctype(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'formEnctype', false);
  }

  public get formMethod(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'formMethod', false);
  }

  public get formNoValidate(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'formNoValidate', false);
  }

  public get formTarget(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'formTarget', false);
  }

  public get labels(): ISuperNodeList {
    throw new Error('HTMLButtonElementIsolate.labels getter not implemented');
  }

  public get name(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'name', false);
  }

  public get type(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'type', false);
  }

  public get validationMessage(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'validationMessage', false);
  }

  public get validity(): Promise<IValidityState> {
    return awaitedHandler.getProperty<IValidityState>(this, 'validity', false);
  }

  public get value(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'value', false);
  }

  public get willValidate(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'willValidate', false);
  }

  // methods

  public checkValidity(): Promise<boolean> {
    return awaitedHandler.runMethod<boolean>(this, 'checkValidity', []);
  }

  public reportValidity(): Promise<boolean> {
    return awaitedHandler.runMethod<boolean>(this, 'reportValidity', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLButtonElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly autofocus?: Promise<boolean>;
  readonly disabled?: Promise<boolean>;
  readonly form?: IHTMLFormElement;
  readonly formAction?: Promise<string>;
  readonly formEnctype?: Promise<string>;
  readonly formMethod?: Promise<string>;
  readonly formNoValidate?: Promise<boolean>;
  readonly formTarget?: Promise<string>;
  readonly labels?: ISuperNodeList;
  readonly name?: Promise<string>;
  readonly type?: Promise<string>;
  readonly validationMessage?: Promise<string>;
  readonly validity?: Promise<IValidityState>;
  readonly value?: Promise<string>;
  readonly willValidate?: Promise<boolean>;
}

export const HTMLButtonElementIsolatePropertyKeys = ['autofocus', 'disabled', 'form', 'formAction', 'formEnctype', 'formMethod', 'formNoValidate', 'formTarget', 'labels', 'name', 'type', 'validationMessage', 'validity', 'value', 'willValidate'];

export const HTMLButtonElementIsolateConstantKeys = [];
