import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLScriptElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLScriptElement, IHTMLScriptElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLScriptElement>('HTMLScriptElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLScriptElement>(getState, setState, awaitedHandler);

export function HTMLScriptElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLScriptElement extends HTMLElement implements IHTMLScriptElement, PromiseLike<IHTMLScriptElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLScriptElement>(this, HTMLScriptElementConstantKeys, HTMLScriptElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLScriptElement',
      });
    }

    // properties

    public get async(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'async', false);
    }

    public get charset(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'charset', false);
    }

    public get crossOrigin(): Promise<string | null> {
      return awaitedHandler.getProperty<string | null>(this, 'crossOrigin', true);
    }

    public get defer(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'defer', false);
    }

    public get event(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'event', false);
    }

    public get noModule(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'noModule', false);
    }

    public get referrerPolicy(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'referrerPolicy', false);
    }

    public get src(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'src', false);
    }

    public get text(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'text', false);
    }

    public get type(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'type', false);
    }

    public then<TResult1 = IHTMLScriptElement, TResult2 = never>(onfulfilled?: ((value: IHTMLScriptElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLScriptElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly async?: Promise<boolean>;
  readonly charset?: Promise<string>;
  readonly crossOrigin?: Promise<string | null>;
  readonly defer?: Promise<boolean>;
  readonly event?: Promise<string>;
  readonly noModule?: Promise<boolean>;
  readonly referrerPolicy?: Promise<string>;
  readonly src?: Promise<string>;
  readonly text?: Promise<string>;
  readonly type?: Promise<string>;
}

export const HTMLScriptElementPropertyKeys = [...HTMLElementPropertyKeys, 'async', 'charset', 'crossOrigin', 'defer', 'event', 'noModule', 'referrerPolicy', 'src', 'text', 'type'];

export const HTMLScriptElementConstantKeys = [...HTMLElementConstantKeys];
