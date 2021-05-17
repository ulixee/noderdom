import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLBodyElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLBodyElement, IHTMLBodyElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLBodyElement>('HTMLBodyElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLBodyElement>(getState, setState, awaitedHandler);

export function HTMLBodyElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLBodyElement extends HTMLElement implements IHTMLBodyElement, PromiseLike<IHTMLBodyElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLBodyElement',
      });
    }

    // properties

    public get aLink(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'aLink', false);
    }

    public get background(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'background', false);
    }

    public get bgColor(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'bgColor', false);
    }

    public get link(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'link', false);
    }

    public get text(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'text', false);
    }

    public get vLink(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'vLink', false);
    }

    public then<TResult1 = IHTMLBodyElement, TResult2 = never>(onfulfilled?: ((value: IHTMLBodyElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLBodyElementPropertyKeys, HTMLBodyElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLBodyElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly aLink?: Promise<string>;
  readonly background?: Promise<string>;
  readonly bgColor?: Promise<string>;
  readonly link?: Promise<string>;
  readonly text?: Promise<string>;
  readonly vLink?: Promise<string>;
}

export const HTMLBodyElementPropertyKeys = [...HTMLElementPropertyKeys, 'aLink', 'background', 'bgColor', 'link', 'text', 'vLink'];

export const HTMLBodyElementConstantKeys = [...HTMLElementConstantKeys];
