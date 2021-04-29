import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLDListElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLDListElement, IHTMLDListElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLDListElement>('HTMLDListElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLDListElement>(getState, setState, awaitedHandler);

export function HTMLDListElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDListElement extends HTMLElement implements IHTMLDListElement, PromiseLike<IHTMLDListElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLDListElement>(this, HTMLDListElementConstantKeys, HTMLDListElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLDListElement',
      });
    }

    // properties

    public get compact(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'compact', false);
    }

    public then<TResult1 = IHTMLDListElement, TResult2 = never>(onfulfilled?: ((value: IHTMLDListElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDListElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly compact?: Promise<boolean>;
}

export const HTMLDListElementPropertyKeys = [...HTMLElementPropertyKeys, 'compact'];

export const HTMLDListElementConstantKeys = [...HTMLElementConstantKeys];
