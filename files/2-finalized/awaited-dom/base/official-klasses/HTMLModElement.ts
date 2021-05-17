import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLModElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLModElement, IHTMLModElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLModElement>('HTMLModElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLModElement>(getState, setState, awaitedHandler);

export function HTMLModElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLModElement extends HTMLElement implements IHTMLModElement, PromiseLike<IHTMLModElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLModElement',
      });
    }

    // properties

    public get cite(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'cite', false);
    }

    public get dateTime(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'dateTime', false);
    }

    public then<TResult1 = IHTMLModElement, TResult2 = never>(onfulfilled?: ((value: IHTMLModElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLModElementPropertyKeys, HTMLModElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLModElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly cite?: Promise<string>;
  readonly dateTime?: Promise<string>;
}

export const HTMLModElementPropertyKeys = [...HTMLElementPropertyKeys, 'cite', 'dateTime'];

export const HTMLModElementConstantKeys = [...HTMLElementConstantKeys];
