import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLSourceElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLSourceElement, IHTMLSourceElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLSourceElement>('HTMLSourceElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLSourceElement>(getState, setState, awaitedHandler);

export function HTMLSourceElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLSourceElement extends HTMLElement implements IHTMLSourceElement, PromiseLike<IHTMLSourceElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLSourceElement>(this, HTMLSourceElementConstantKeys, HTMLSourceElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLSourceElement',
      });
    }

    // properties

    public get media(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'media', false);
    }

    public get sizes(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'sizes', false);
    }

    public get src(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'src', false);
    }

    public get srcset(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'srcset', false);
    }

    public get type(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'type', false);
    }

    public then<TResult1 = IHTMLSourceElement, TResult2 = never>(onfulfilled?: ((value: IHTMLSourceElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLSourceElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly media?: Promise<string>;
  readonly sizes?: Promise<string>;
  readonly src?: Promise<string>;
  readonly srcset?: Promise<string>;
  readonly type?: Promise<string>;
}

export const HTMLSourceElementPropertyKeys = [...HTMLElementPropertyKeys, 'media', 'sizes', 'src', 'srcset', 'type'];

export const HTMLSourceElementConstantKeys = [...HTMLElementConstantKeys];
