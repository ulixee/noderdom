import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import { IHTMLSelectElementIsolate } from '../interfaces/isolate';
import { IHTMLFormElement, IHTMLOptionsCollection, IValidityState, IHTMLOptionElement } from '../interfaces/official';
import { ISuperNodeList, ISuperHTMLCollection, ISuperElement } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLSelectElementIsolate, IHTMLSelectElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLSelectElementIsolate>('HTMLSelectElementIsolate', getState, setState);
export const awaitedIterator = new AwaitedIterator<IHTMLSelectElementIsolate, ISuperElement>(getState, setState, awaitedHandler);

export default class HTMLSelectElementIsolate implements IHTMLSelectElementIsolate {
  public get autocomplete(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'autocomplete', false);
  }

  public get autofocus(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'autofocus', false);
  }

  public get disabled(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'disabled', false);
  }

  public get form(): IHTMLFormElement {
    throw new Error('HTMLSelectElementIsolate.form getter not implemented');
  }

  public get labels(): ISuperNodeList {
    throw new Error('HTMLSelectElementIsolate.labels getter not implemented');
  }

  public get length(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'length', false);
  }

  public get multiple(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'multiple', false);
  }

  public get name(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'name', false);
  }

  public get options(): Promise<ISuperHTMLCollection> | IHTMLOptionsCollection {
    throw new Error('HTMLSelectElementIsolate.options getter not implemented');
  }

  public get required(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'required', false);
  }

  public get selectedIndex(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'selectedIndex', false);
  }

  public get selectedOptions(): ISuperHTMLCollection {
    throw new Error('HTMLSelectElementIsolate.selectedOptions getter not implemented');
  }

  public get size(): Promise<string> | Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'size', false);
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

  public get value(): Promise<string> | Promise<number> {
    return awaitedHandler.getProperty<string>(this, 'value', false);
  }

  public get willValidate(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'willValidate', false);
  }

  // methods

  public checkValidity(): Promise<boolean> {
    return awaitedHandler.runMethod<boolean>(this, 'checkValidity', []);
  }

  public item(index: number): ISuperElement {
    throw new Error('HTMLSelectElementIsolate.item not implemented');
  }

  public namedItem(name: string): IHTMLOptionElement {
    throw new Error('HTMLSelectElementIsolate.namedItem not implemented');
  }

  public reportValidity(): Promise<boolean> {
    return awaitedHandler.runMethod<boolean>(this, 'reportValidity', []);
  }

  public [Symbol.iterator](): Iterator<ISuperElement> {
    return awaitedIterator.iterateNodePointers(this);
  }

  [index: number]: ISuperElement;
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLSelectElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  createIterableName: string;

  readonly autocomplete?: Promise<string>;
  readonly autofocus?: Promise<boolean>;
  readonly disabled?: Promise<boolean>;
  readonly form?: IHTMLFormElement;
  readonly labels?: ISuperNodeList;
  readonly length?: Promise<number>;
  readonly multiple?: Promise<boolean>;
  readonly name?: Promise<string>;
  readonly options?: Promise<ISuperHTMLCollection> | IHTMLOptionsCollection;
  readonly required?: Promise<boolean>;
  readonly selectedIndex?: Promise<number>;
  readonly selectedOptions?: ISuperHTMLCollection;
  readonly size?: Promise<string> | Promise<number>;
  readonly type?: Promise<string>;
  readonly validationMessage?: Promise<string>;
  readonly validity?: Promise<IValidityState>;
  readonly value?: Promise<string> | Promise<number>;
  readonly willValidate?: Promise<boolean>;
}

export const HTMLSelectElementIsolatePropertyKeys = ['autocomplete', 'autofocus', 'disabled', 'form', 'labels', 'length', 'multiple', 'name', 'options', 'required', 'selectedIndex', 'selectedOptions', 'size', 'type', 'validationMessage', 'validity', 'value', 'willValidate'];

export const HTMLSelectElementIsolateConstantKeys = [];
