import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLQuoteElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLQuoteElement, IHTMLQuoteElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLQuoteElement>('HTMLQuoteElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLQuoteElement>(getState, setState, awaitedHandler);

export function HTMLQuoteElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLQuoteElement extends HTMLElement implements IHTMLQuoteElement, PromiseLike<IHTMLQuoteElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLQuoteElement',
      });
    }

    // properties

    public get cite(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'cite', false);
    }

    public then<TResult1 = IHTMLQuoteElement, TResult2 = never>(onfulfilled?: ((value: IHTMLQuoteElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLQuoteElementPropertyKeys, HTMLQuoteElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLQuoteElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly cite?: Promise<string>;
}

export const HTMLQuoteElementPropertyKeys = [...HTMLElementPropertyKeys, 'cite'];

export const HTMLQuoteElementConstantKeys = [...HTMLElementConstantKeys];
