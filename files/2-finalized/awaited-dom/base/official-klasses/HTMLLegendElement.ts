import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLLegendElement, IHTMLElement, IHTMLFormElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLLegendElement, IHTMLLegendElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLLegendElement>('HTMLLegendElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLLegendElement>(getState, setState, awaitedHandler);

export function HTMLLegendElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLLegendElement extends HTMLElement implements IHTMLLegendElement, PromiseLike<IHTMLLegendElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLLegendElement',
      });
    }

    // properties

    public get align(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'align', false);
    }

    public get form(): IHTMLFormElement {
      throw new Error('HTMLLegendElement.form getter not implemented');
    }

    public then<TResult1 = IHTMLLegendElement, TResult2 = never>(onfulfilled?: ((value: IHTMLLegendElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLLegendElementPropertyKeys, HTMLLegendElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLLegendElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly align?: Promise<string>;
  readonly form?: IHTMLFormElement;
}

export const HTMLLegendElementPropertyKeys = [...HTMLElementPropertyKeys, 'align', 'form'];

export const HTMLLegendElementConstantKeys = [...HTMLElementConstantKeys];
