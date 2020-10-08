import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLTextAreaElement, IHTMLElement, IHTMLFormElement, IValidityState, ISelectionMode } from '../interfaces/official';
import { ISuperNodeList } from '../interfaces/super';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTextAreaElement, IHTMLTextAreaElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTextAreaElement>('HTMLTextAreaElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLTextAreaElement>(getState, setState, awaitedHandler);

export function HTMLTextAreaElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTextAreaElement extends HTMLElement implements IHTMLTextAreaElement, PromiseLike<IHTMLTextAreaElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLTextAreaElement>(this, HTMLTextAreaElementConstantKeys, HTMLTextAreaElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLTextAreaElement',
      });
    }

    // properties

    public get autocomplete(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'autocomplete', false);
    }

    public get autofocus(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'autofocus', false);
    }

    public get cols(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'cols', false);
    }

    public get defaultValue(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'defaultValue', false);
    }

    public get disabled(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'disabled', false);
    }

    public get form(): IHTMLFormElement {
      throw new Error('HTMLTextAreaElement.form getter not implemented');
    }

    public get inputMode(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'inputMode', false);
    }

    public get labels(): ISuperNodeList {
      throw new Error('HTMLTextAreaElement.labels getter not implemented');
    }

    public get maxLength(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'maxLength', false);
    }

    public get minLength(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'minLength', false);
    }

    public get name(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'name', false);
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

    public get rows(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'rows', false);
    }

    public get selectionDirection(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'selectionDirection', false);
    }

    public get selectionEnd(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'selectionEnd', false);
    }

    public get selectionStart(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'selectionStart', false);
    }

    public get textLength(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'textLength', false);
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

    public get wrap(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'wrap', false);
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

    public setCustomValidity(error: string): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'setCustomValidity', [error]);
    }

    public setRangeText(replacement: string, start?: number, end?: number, selectionMode?: ISelectionMode): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'setRangeText', [replacement, start, end, selectionMode]);
    }

    public setSelectionRange(start: number, end: number, direction?: string): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'setSelectionRange', [start, end, direction]);
    }

    public then<TResult1 = IHTMLTextAreaElement, TResult2 = never>(onfulfilled?: ((value: IHTMLTextAreaElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTextAreaElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly autocomplete?: Promise<string>;
  readonly autofocus?: Promise<boolean>;
  readonly cols?: Promise<number>;
  readonly defaultValue?: Promise<string>;
  readonly disabled?: Promise<boolean>;
  readonly form?: IHTMLFormElement;
  readonly inputMode?: Promise<string>;
  readonly labels?: ISuperNodeList;
  readonly maxLength?: Promise<number>;
  readonly minLength?: Promise<number>;
  readonly name?: Promise<string>;
  readonly placeholder?: Promise<string>;
  readonly readOnly?: Promise<boolean>;
  readonly required?: Promise<boolean>;
  readonly rows?: Promise<number>;
  readonly selectionDirection?: Promise<string>;
  readonly selectionEnd?: Promise<number>;
  readonly selectionStart?: Promise<number>;
  readonly textLength?: Promise<number>;
  readonly type?: Promise<string>;
  readonly validationMessage?: Promise<string>;
  readonly validity?: Promise<IValidityState>;
  readonly value?: Promise<string>;
  readonly willValidate?: Promise<boolean>;
  readonly wrap?: Promise<string>;
}

export const HTMLTextAreaElementPropertyKeys = [...HTMLElementPropertyKeys, 'autocomplete', 'autofocus', 'cols', 'defaultValue', 'disabled', 'form', 'inputMode', 'labels', 'maxLength', 'minLength', 'name', 'placeholder', 'readOnly', 'required', 'rows', 'selectionDirection', 'selectionEnd', 'selectionStart', 'textLength', 'type', 'validationMessage', 'validity', 'value', 'willValidate', 'wrap'];

export const HTMLTextAreaElementConstantKeys = [...HTMLElementConstantKeys];
