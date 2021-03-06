import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLDataElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLDataElement, IHTMLDataElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLDataElement>('HTMLDataElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLDataElement>(getState, setState, awaitedHandler);

export function HTMLDataElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDataElement extends HTMLElement implements IHTMLDataElement, PromiseLike<IHTMLDataElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLDataElement',
      });
    }

    // properties

    public get value(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'value', false);
    }

    public then<TResult1 = IHTMLDataElement, TResult2 = never>(onfulfilled?: ((value: IHTMLDataElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLDataElementPropertyKeys, HTMLDataElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDataElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly value?: Promise<string>;
}

export const HTMLDataElementPropertyKeys = [...HTMLElementPropertyKeys, 'value'];

export const HTMLDataElementConstantKeys = [...HTMLElementConstantKeys];
