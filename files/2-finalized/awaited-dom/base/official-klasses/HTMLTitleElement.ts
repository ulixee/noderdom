import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLTitleElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTitleElement, IHTMLTitleElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTitleElement>('HTMLTitleElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLTitleElement>(getState, setState, awaitedHandler);

export function HTMLTitleElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTitleElement extends HTMLElement implements IHTMLTitleElement, PromiseLike<IHTMLTitleElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLTitleElement>(this, HTMLTitleElementConstantKeys, HTMLTitleElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLTitleElement',
      });
    }

    // properties

    public get text(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'text', false);
    }

    public then<TResult1 = IHTMLTitleElement, TResult2 = never>(onfulfilled?: ((value: IHTMLTitleElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTitleElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly text?: Promise<string>;
}

export const HTMLTitleElementPropertyKeys = [...HTMLElementPropertyKeys, 'text'];

export const HTMLTitleElementConstantKeys = [...HTMLElementConstantKeys];
