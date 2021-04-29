import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLLIElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLLIElement, IHTMLLIElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLLIElement>('HTMLLIElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLLIElement>(getState, setState, awaitedHandler);

export function HTMLLIElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLLIElement extends HTMLElement implements IHTMLLIElement, PromiseLike<IHTMLLIElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLLIElement>(this, HTMLLIElementConstantKeys, HTMLLIElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLLIElement',
      });
    }

    // properties

    public get type(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'type', false);
    }

    public get value(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'value', false);
    }

    public then<TResult1 = IHTMLLIElement, TResult2 = never>(onfulfilled?: ((value: IHTMLLIElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLLIElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly type?: Promise<string>;
  readonly value?: Promise<number>;
}

export const HTMLLIElementPropertyKeys = [...HTMLElementPropertyKeys, 'type', 'value'];

export const HTMLLIElementConstantKeys = [...HTMLElementConstantKeys];
