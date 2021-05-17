import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLLabelElement, IHTMLElement, IHTMLFormElement } from '../interfaces/official';
import { ISuperHTMLElement } from '../interfaces/super';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLLabelElement, IHTMLLabelElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLLabelElement>('HTMLLabelElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLLabelElement>(getState, setState, awaitedHandler);

export function HTMLLabelElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLLabelElement extends HTMLElement implements IHTMLLabelElement, PromiseLike<IHTMLLabelElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLLabelElement',
      });
    }

    // properties

    public get control(): ISuperHTMLElement {
      throw new Error('HTMLLabelElement.control getter not implemented');
    }

    public get form(): IHTMLFormElement {
      throw new Error('HTMLLabelElement.form getter not implemented');
    }

    public get htmlFor(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'htmlFor', false);
    }

    public then<TResult1 = IHTMLLabelElement, TResult2 = never>(onfulfilled?: ((value: IHTMLLabelElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLLabelElementPropertyKeys, HTMLLabelElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLLabelElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly control?: ISuperHTMLElement;
  readonly form?: IHTMLFormElement;
  readonly htmlFor?: Promise<string>;
}

export const HTMLLabelElementPropertyKeys = [...HTMLElementPropertyKeys, 'control', 'form', 'htmlFor'];

export const HTMLLabelElementConstantKeys = [...HTMLElementConstantKeys];
