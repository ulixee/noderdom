import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLLinkElement, IHTMLElement, ILinkStyle, IDOMTokenList } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';
import { ILinkStyleProperties, LinkStylePropertyKeys, LinkStyleConstantKeys } from '../official-mixins/LinkStyle';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLLinkElement, IHTMLLinkElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLLinkElement>('HTMLLinkElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLLinkElement>(getState, setState, awaitedHandler);

export function HTMLLinkElementGenerator(HTMLElement: Constructable<IHTMLElement>, LinkStyle: Constructable<ILinkStyle>) {
  const Parent = (ClassMixer(HTMLElement, [LinkStyle]) as unknown) as Constructable<IHTMLElement & ILinkStyle>;

  return class HTMLLinkElement extends Parent implements IHTMLLinkElement, PromiseLike<IHTMLLinkElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLLinkElement>(this, HTMLLinkElementConstantKeys, HTMLLinkElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLLinkElement',
      });
    }

    // properties

    public get as(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'as', false);
    }

    public get crossOrigin(): Promise<string | null> {
      return awaitedHandler.getProperty<string | null>(this, 'crossOrigin', true);
    }

    public get href(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'href', false);
    }

    public get hreflang(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'hreflang', false);
    }

    public get media(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'media', false);
    }

    public get referrerPolicy(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'referrerPolicy', false);
    }

    public get rel(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'rel', false);
    }

    public get relList(): IDOMTokenList {
      throw new Error('HTMLLinkElement.relList getter not implemented');
    }

    public get sizes(): IDOMTokenList {
      throw new Error('HTMLLinkElement.sizes getter not implemented');
    }

    public get type(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'type', false);
    }

    public then<TResult1 = IHTMLLinkElement, TResult2 = never>(onfulfilled?: ((value: IHTMLLinkElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLLinkElementProperties extends IHTMLElementProperties, ILinkStyleProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly as?: Promise<string>;
  readonly crossOrigin?: Promise<string | null>;
  readonly href?: Promise<string>;
  readonly hreflang?: Promise<string>;
  readonly media?: Promise<string>;
  readonly referrerPolicy?: Promise<string>;
  readonly rel?: Promise<string>;
  readonly relList?: IDOMTokenList;
  readonly sizes?: IDOMTokenList;
  readonly type?: Promise<string>;
}

export const HTMLLinkElementPropertyKeys = [...HTMLElementPropertyKeys, ...LinkStylePropertyKeys, 'as', 'crossOrigin', 'href', 'hreflang', 'media', 'referrerPolicy', 'rel', 'relList', 'sizes', 'type'];

export const HTMLLinkElementConstantKeys = [...HTMLElementConstantKeys, ...LinkStyleConstantKeys];
