import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLOptionElementIsolate } from '../interfaces/isolate';
import { IHTMLFormElement } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOptionElementIsolate, IHTMLOptionElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLOptionElementIsolate>('HTMLOptionElementIsolate', getState, setState);

export default class HTMLOptionElementIsolate implements IHTMLOptionElementIsolate {
  public get defaultSelected(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'defaultSelected', false);
  }

  public get disabled(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'disabled', false);
  }

  public get form(): IHTMLFormElement {
    throw new Error('HTMLOptionElementIsolate.form getter not implemented');
  }

  public get index(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'index', false);
  }

  public get label(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'label', false);
  }

  public get selected(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'selected', false);
  }

  public get text(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'text', false);
  }

  public get value(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'value', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLOptionElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly defaultSelected?: Promise<boolean>;
  readonly disabled?: Promise<boolean>;
  readonly form?: IHTMLFormElement;
  readonly index?: Promise<number>;
  readonly label?: Promise<string>;
  readonly selected?: Promise<boolean>;
  readonly text?: Promise<string>;
  readonly value?: Promise<string>;
}

export const HTMLOptionElementIsolatePropertyKeys = ['defaultSelected', 'disabled', 'form', 'index', 'label', 'selected', 'text', 'value'];

export const HTMLOptionElementIsolateConstantKeys = [];
