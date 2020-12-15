import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLStyleElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLStyleElement, IHTMLStyleElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLStyleElement>('HTMLStyleElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLStyleElement>(getState, setState, awaitedHandler);

export function HTMLStyleElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLStyleElement extends HTMLElement implements IHTMLStyleElement, PromiseLike<IHTMLStyleElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLStyleElement>(this, HTMLStyleElementConstantKeys, HTMLStyleElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLStyleElement',
      });
    }

    // properties

    public get media(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'media', false);
    }

    public get type(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'type', false);
    }

    public then<TResult1 = IHTMLStyleElement, TResult2 = never>(onfulfilled?: ((value: IHTMLStyleElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLStyleElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly media?: Promise<string>;
  readonly type?: Promise<string>;
}

export const HTMLStyleElementPropertyKeys = [...HTMLElementPropertyKeys, 'media', 'type'];

export const HTMLStyleElementConstantKeys = [...HTMLElementConstantKeys];
