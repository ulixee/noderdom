import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLInputElementIsolate } from '../interfaces/isolate';
import { IHTMLFormElement, IValidityState, ISelectionMode } from '../interfaces/official';
import { ISuperNodeList, ISuperHTMLElement } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLInputElementIsolate, IHTMLInputElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLInputElementIsolate>('HTMLInputElementIsolate', getState, setState);

export default class HTMLInputElementIsolate implements IHTMLInputElementIsolate {
  public get accept(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'accept', false);
  }

  public get alt(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'alt', false);
  }

  public get autocomplete(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'autocomplete', false);
  }

  public get autofocus(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'autofocus', false);
  }

  public get checked(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'checked', false);
  }

  public get defaultChecked(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'defaultChecked', false);
  }

  public get defaultValue(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'defaultValue', false);
  }

  public get dirName(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'dirName', false);
  }

  public get disabled(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'disabled', false);
  }

  public get form(): IHTMLFormElement {
    throw new Error('HTMLInputElementIsolate.form getter not implemented');
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

  public get height(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'height', false);
  }

  public get indeterminate(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'indeterminate', false);
  }

  public get inputMode(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'inputMode', false);
  }

  public get labels(): ISuperNodeList {
    throw new Error('HTMLInputElementIsolate.labels getter not implemented');
  }

  public get list(): ISuperHTMLElement {
    throw new Error('HTMLInputElementIsolate.list getter not implemented');
  }

  public get max(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'max', false);
  }

  public get maxLength(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'maxLength', false);
  }

  public get min(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'min', false);
  }

  public get minLength(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'minLength', false);
  }

  public get multiple(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'multiple', false);
  }

  public get name(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'name', false);
  }

  public get pattern(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'pattern', false);
  }

  public get placeholder(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'placeholder', false);
  }

  public get readOnly(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'readOnly', false);
  }

  public get required(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'required', false);
  }

  public get selectionDirection(): Promise<string | null> {
    return awaitedHandler.getProperty<string | null>(this, 'selectionDirection', true);
  }

  public get selectionEnd(): Promise<number | null> {
    return awaitedHandler.getProperty<number | null>(this, 'selectionEnd', true);
  }

  public get selectionStart(): Promise<number | null> {
    return awaitedHandler.getProperty<number | null>(this, 'selectionStart', true);
  }

  public get size(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'size', false);
  }

  public get src(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'src', false);
  }

  public get step(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'step', false);
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

  public get valueAsDate(): Promise<any> {
    return awaitedHandler.getProperty<any>(this, 'valueAsDate', true);
  }

  public get valueAsNumber(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'valueAsNumber', false);
  }

  public get width(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'width', false);
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

  public select(): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'select', []);
  }

  public setRangeText(replacement: string, start?: number, end?: number, selectionMode?: ISelectionMode): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'setRangeText', [replacement, start, end, selectionMode]);
  }

  public setSelectionRange(start: number, end: number, direction?: string): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'setSelectionRange', [start, end, direction]);
  }

  public stepDown(n?: number): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'stepDown', [n]);
  }

  public stepUp(n?: number): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'stepUp', [n]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLInputElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly accept?: Promise<string>;
  readonly alt?: Promise<string>;
  readonly autocomplete?: Promise<string>;
  readonly autofocus?: Promise<boolean>;
  readonly checked?: Promise<boolean>;
  readonly defaultChecked?: Promise<boolean>;
  readonly defaultValue?: Promise<string>;
  readonly dirName?: Promise<string>;
  readonly disabled?: Promise<boolean>;
  readonly form?: IHTMLFormElement;
  readonly formAction?: Promise<string>;
  readonly formEnctype?: Promise<string>;
  readonly formMethod?: Promise<string>;
  readonly formNoValidate?: Promise<boolean>;
  readonly formTarget?: Promise<string>;
  readonly height?: Promise<number>;
  readonly indeterminate?: Promise<boolean>;
  readonly inputMode?: Promise<string>;
  readonly labels?: ISuperNodeList;
  readonly list?: ISuperHTMLElement;
  readonly max?: Promise<string>;
  readonly maxLength?: Promise<number>;
  readonly min?: Promise<string>;
  readonly minLength?: Promise<number>;
  readonly multiple?: Promise<boolean>;
  readonly name?: Promise<string>;
  readonly pattern?: Promise<string>;
  readonly placeholder?: Promise<string>;
  readonly readOnly?: Promise<boolean>;
  readonly required?: Promise<boolean>;
  readonly selectionDirection?: Promise<string | null>;
  readonly selectionEnd?: Promise<number | null>;
  readonly selectionStart?: Promise<number | null>;
  readonly size?: Promise<number>;
  readonly src?: Promise<string>;
  readonly step?: Promise<string>;
  readonly type?: Promise<string>;
  readonly validationMessage?: Promise<string>;
  readonly validity?: Promise<IValidityState>;
  readonly value?: Promise<string>;
  readonly valueAsDate?: Promise<any>;
  readonly valueAsNumber?: Promise<number>;
  readonly width?: Promise<number>;
  readonly willValidate?: Promise<boolean>;
}

export const HTMLInputElementIsolatePropertyKeys = ['accept', 'alt', 'autocomplete', 'autofocus', 'checked', 'defaultChecked', 'defaultValue', 'dirName', 'disabled', 'form', 'formAction', 'formEnctype', 'formMethod', 'formNoValidate', 'formTarget', 'height', 'indeterminate', 'inputMode', 'labels', 'list', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'name', 'pattern', 'placeholder', 'readOnly', 'required', 'selectionDirection', 'selectionEnd', 'selectionStart', 'size', 'src', 'step', 'type', 'validationMessage', 'validity', 'value', 'valueAsDate', 'valueAsNumber', 'width', 'willValidate'];

export const HTMLInputElementIsolateConstantKeys = [];
