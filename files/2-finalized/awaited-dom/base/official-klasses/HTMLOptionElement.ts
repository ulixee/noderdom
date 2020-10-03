import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLOptionElement, IHTMLElement, IHTMLFormElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLOptionElement, IHTMLOptionElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLOptionElement>('HTMLOptionElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLOptionElement>(getState, setState, awaitedHandler);

export function HTMLOptionElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLOptionElement extends HTMLElement implements IHTMLOptionElement, PromiseLike<IHTMLOptionElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLOptionElement>(this, HTMLOptionElementConstantKeys, HTMLOptionElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLOptionElement',
      });
    }

    // properties

    public get defaultSelected(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'defaultSelected', false);
    }

    public get disabled(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'disabled', false);
    }

    public get form(): IHTMLFormElement {
      throw new Error('HTMLOptionElement.form getter not implemented');
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

    public then<TResult1 = IHTMLOptionElement, TResult2 = never>(onfulfilled?: ((value: IHTMLOptionElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLOptionElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly defaultSelected?: Promise<boolean>;
  readonly disabled?: Promise<boolean>;
  readonly form?: IHTMLFormElement;
  readonly index?: Promise<number>;
  readonly label?: Promise<string>;
  readonly selected?: Promise<boolean>;
  readonly text?: Promise<string>;
  readonly value?: Promise<string>;
}

export const HTMLOptionElementPropertyKeys = [...HTMLElementPropertyKeys, 'defaultSelected', 'disabled', 'form', 'index', 'label', 'selected', 'text', 'value'];

export const HTMLOptionElementConstantKeys = [...HTMLElementConstantKeys];
