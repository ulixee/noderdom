import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLFormElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLFormElement, IHTMLFormElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLFormElement>('HTMLFormElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLFormElement>(getState, setState, awaitedHandler);

export function HTMLFormElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLFormElement extends HTMLElement implements IHTMLFormElement, PromiseLike<IHTMLFormElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLFormElement>(this, HTMLFormElementConstantKeys, HTMLFormElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLFormElement',
      });
    }

    // properties

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

    public then<TResult1 = IHTMLFormElement, TResult2 = never>(onfulfilled?: ((value: IHTMLFormElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLFormElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

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

export const HTMLFormElementPropertyKeys = [...HTMLElementPropertyKeys, 'acceptCharset', 'action', 'autocomplete', 'encoding', 'enctype', 'length', 'name', 'noValidate', 'target'];

export const HTMLFormElementConstantKeys = [...HTMLElementConstantKeys];
