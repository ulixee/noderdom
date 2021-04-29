import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLEmbedElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLEmbedElement, IHTMLEmbedElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLEmbedElement>('HTMLEmbedElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLEmbedElement>(getState, setState, awaitedHandler);

export function HTMLEmbedElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLEmbedElement extends HTMLElement implements IHTMLEmbedElement, PromiseLike<IHTMLEmbedElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLEmbedElement>(this, HTMLEmbedElementConstantKeys, HTMLEmbedElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLEmbedElement',
      });
    }

    // properties

    public get align(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'align', false);
    }

    public get height(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'height', false);
    }

    public get name(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'name', false);
    }

    public get src(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'src', false);
    }

    public get type(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'type', false);
    }

    public get width(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'width', false);
    }

    public then<TResult1 = IHTMLEmbedElement, TResult2 = never>(onfulfilled?: ((value: IHTMLEmbedElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLEmbedElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly align?: Promise<string>;
  readonly height?: Promise<string>;
  readonly name?: Promise<string>;
  readonly src?: Promise<string>;
  readonly type?: Promise<string>;
  readonly width?: Promise<string>;
}

export const HTMLEmbedElementPropertyKeys = [...HTMLElementPropertyKeys, 'align', 'height', 'name', 'src', 'type', 'width'];

export const HTMLEmbedElementConstantKeys = [...HTMLElementConstantKeys];
