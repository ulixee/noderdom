import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLUListElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLUListElement, IHTMLUListElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLUListElement>('HTMLUListElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLUListElement>(getState, setState, awaitedHandler);

export function HTMLUListElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLUListElement extends HTMLElement implements IHTMLUListElement, PromiseLike<IHTMLUListElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLUListElement>(this, HTMLUListElementConstantKeys, HTMLUListElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLUListElement',
      });
    }

    // properties

    public get compact(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'compact', false);
    }

    public get type(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'type', false);
    }

    public then<TResult1 = IHTMLUListElement, TResult2 = never>(onfulfilled?: ((value: IHTMLUListElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLUListElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly compact?: Promise<boolean>;
  readonly type?: Promise<string>;
}

export const HTMLUListElementPropertyKeys = [...HTMLElementPropertyKeys, 'compact', 'type'];

export const HTMLUListElementConstantKeys = [...HTMLElementConstantKeys];
