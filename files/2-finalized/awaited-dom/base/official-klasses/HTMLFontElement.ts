import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLFontElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLFontElement, IHTMLFontElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLFontElement>('HTMLFontElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLFontElement>(getState, setState, awaitedHandler);

export function HTMLFontElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLFontElement extends HTMLElement implements IHTMLFontElement, PromiseLike<IHTMLFontElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLFontElement>(this, HTMLFontElementConstantKeys, HTMLFontElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLFontElement',
      });
    }

    // properties

    public get color(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'color', false);
    }

    public get face(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'face', false);
    }

    public get size(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'size', false);
    }

    public then<TResult1 = IHTMLFontElement, TResult2 = never>(onfulfilled?: ((value: IHTMLFontElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLFontElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly color?: Promise<string>;
  readonly face?: Promise<string>;
  readonly size?: Promise<string>;
}

export const HTMLFontElementPropertyKeys = [...HTMLElementPropertyKeys, 'color', 'face', 'size'];

export const HTMLFontElementConstantKeys = [...HTMLElementConstantKeys];
