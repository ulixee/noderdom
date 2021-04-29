import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLHtmlElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLHtmlElement, IHTMLHtmlElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLHtmlElement>('HTMLHtmlElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLHtmlElement>(getState, setState, awaitedHandler);

export function HTMLHtmlElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLHtmlElement extends HTMLElement implements IHTMLHtmlElement, PromiseLike<IHTMLHtmlElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLHtmlElement>(this, HTMLHtmlElementConstantKeys, HTMLHtmlElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLHtmlElement',
      });
    }

    // properties

    public get version(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'version', false);
    }

    public then<TResult1 = IHTMLHtmlElement, TResult2 = never>(onfulfilled?: ((value: IHTMLHtmlElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLHtmlElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly version?: Promise<string>;
}

export const HTMLHtmlElementPropertyKeys = [...HTMLElementPropertyKeys, 'version'];

export const HTMLHtmlElementConstantKeys = [...HTMLElementConstantKeys];
