import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLFieldSetElement, IHTMLElement, IHTMLFormElement, IValidityState } from '../interfaces/official';
import { ISuperHTMLCollection } from '../interfaces/super';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLFieldSetElement, IHTMLFieldSetElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLFieldSetElement>('HTMLFieldSetElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLFieldSetElement>(getState, setState, awaitedHandler);

export function HTMLFieldSetElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLFieldSetElement extends HTMLElement implements IHTMLFieldSetElement, PromiseLike<IHTMLFieldSetElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLFieldSetElement',
      });
    }

    // properties

    public get disabled(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'disabled', false);
    }

    public get elements(): ISuperHTMLCollection {
      throw new Error('HTMLFieldSetElement.elements getter not implemented');
    }

    public get form(): IHTMLFormElement {
      throw new Error('HTMLFieldSetElement.form getter not implemented');
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

    public then<TResult1 = IHTMLFieldSetElement, TResult2 = never>(onfulfilled?: ((value: IHTMLFieldSetElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLFieldSetElementPropertyKeys, HTMLFieldSetElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLFieldSetElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly disabled?: Promise<boolean>;
  readonly elements?: ISuperHTMLCollection;
  readonly form?: IHTMLFormElement;
  readonly name?: Promise<string>;
  readonly type?: Promise<string>;
  readonly validationMessage?: Promise<string>;
  readonly validity?: Promise<IValidityState>;
  readonly willValidate?: Promise<boolean>;
}

export const HTMLFieldSetElementPropertyKeys = [...HTMLElementPropertyKeys, 'disabled', 'elements', 'form', 'name', 'type', 'validationMessage', 'validity', 'willValidate'];

export const HTMLFieldSetElementConstantKeys = [...HTMLElementConstantKeys];
