import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLButtonElement, IHTMLElement, IHTMLFormElement, IValidityState } from '../interfaces/official';
import { ISuperNodeList } from '../interfaces/super';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLButtonElement, IHTMLButtonElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLButtonElement>('HTMLButtonElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLButtonElement>(getState, setState, awaitedHandler);

export function HTMLButtonElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLButtonElement extends HTMLElement implements IHTMLButtonElement, PromiseLike<IHTMLButtonElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLButtonElement>(this, HTMLButtonElementConstantKeys, HTMLButtonElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLButtonElement',
      });
    }

    // properties

    public get autofocus(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'autofocus', false);
    }

    public get disabled(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'disabled', false);
    }

    public get form(): IHTMLFormElement {
      throw new Error('HTMLButtonElement.form getter not implemented');
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
      throw new Error('HTMLButtonElement.labels getter not implemented');
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

    public then<TResult1 = IHTMLButtonElement, TResult2 = never>(onfulfilled?: ((value: IHTMLButtonElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLButtonElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

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

export const HTMLButtonElementPropertyKeys = [...HTMLElementPropertyKeys, 'autofocus', 'disabled', 'form', 'formAction', 'formEnctype', 'formMethod', 'formNoValidate', 'formTarget', 'labels', 'name', 'type', 'validationMessage', 'validity', 'value', 'willValidate'];

export const HTMLButtonElementConstantKeys = [...HTMLElementConstantKeys];
