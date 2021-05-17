import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLFieldSetElementIsolate } from '../interfaces/isolate';
import { ISuperHTMLCollection } from '../interfaces/super';
import { IHTMLFormElement, IValidityState } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLFieldSetElementIsolate, IHTMLFieldSetElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLFieldSetElementIsolate>('HTMLFieldSetElementIsolate', getState, setState);

export default class HTMLFieldSetElementIsolate implements IHTMLFieldSetElementIsolate {
  public get disabled(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'disabled', false);
  }

  public get elements(): ISuperHTMLCollection {
    throw new Error('HTMLFieldSetElementIsolate.elements getter not implemented');
  }

  public get form(): IHTMLFormElement {
    throw new Error('HTMLFieldSetElementIsolate.form getter not implemented');
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

export interface IHTMLFieldSetElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly disabled?: Promise<boolean>;
  readonly elements?: ISuperHTMLCollection;
  readonly form?: IHTMLFormElement;
  readonly name?: Promise<string>;
  readonly type?: Promise<string>;
  readonly validationMessage?: Promise<string>;
  readonly validity?: Promise<IValidityState>;
  readonly willValidate?: Promise<boolean>;
}

export const HTMLFieldSetElementIsolatePropertyKeys = ['disabled', 'elements', 'form', 'name', 'type', 'validationMessage', 'validity', 'willValidate'];

export const HTMLFieldSetElementIsolateConstantKeys = [];
