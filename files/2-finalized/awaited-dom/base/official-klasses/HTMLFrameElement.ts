import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLFrameElement, IHTMLElement } from '../interfaces/official';
import { ISuperDocument } from '../interfaces/super';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLFrameElement, IHTMLFrameElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLFrameElement>('HTMLFrameElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLFrameElement>(getState, setState, awaitedHandler);

export function HTMLFrameElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLFrameElement extends HTMLElement implements IHTMLFrameElement, PromiseLike<IHTMLFrameElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLFrameElement>(this, HTMLFrameElementConstantKeys, HTMLFrameElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLFrameElement',
      });
    }

    // properties

    public get contentDocument(): ISuperDocument {
      throw new Error('HTMLFrameElement.contentDocument getter not implemented');
    }

    public get frameBorder(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'frameBorder', false);
    }

    public get longDesc(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'longDesc', false);
    }

    public get marginHeight(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'marginHeight', false);
    }

    public get marginWidth(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'marginWidth', false);
    }

    public get name(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'name', false);
    }

    public get noResize(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'noResize', false);
    }

    public get scrolling(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'scrolling', false);
    }

    public get src(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'src', false);
    }

    public then<TResult1 = IHTMLFrameElement, TResult2 = never>(onfulfilled?: ((value: IHTMLFrameElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLFrameElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly contentDocument?: ISuperDocument;
  readonly frameBorder?: Promise<string>;
  readonly longDesc?: Promise<string>;
  readonly marginHeight?: Promise<string>;
  readonly marginWidth?: Promise<string>;
  readonly name?: Promise<string>;
  readonly noResize?: Promise<boolean>;
  readonly scrolling?: Promise<string>;
  readonly src?: Promise<string>;
}

export const HTMLFrameElementPropertyKeys = [...HTMLElementPropertyKeys, 'contentDocument', 'frameBorder', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'noResize', 'scrolling', 'src'];

export const HTMLFrameElementConstantKeys = [...HTMLElementConstantKeys];
