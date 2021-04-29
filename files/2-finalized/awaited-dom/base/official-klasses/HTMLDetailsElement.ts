import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLDetailsElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLDetailsElement, IHTMLDetailsElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLDetailsElement>('HTMLDetailsElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLDetailsElement>(getState, setState, awaitedHandler);

export function HTMLDetailsElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDetailsElement extends HTMLElement implements IHTMLDetailsElement, PromiseLike<IHTMLDetailsElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLDetailsElement>(this, HTMLDetailsElementConstantKeys, HTMLDetailsElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLDetailsElement',
      });
    }

    // properties

    public get open(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'open', false);
    }

    public then<TResult1 = IHTMLDetailsElement, TResult2 = never>(onfulfilled?: ((value: IHTMLDetailsElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDetailsElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly open?: Promise<boolean>;
}

export const HTMLDetailsElementPropertyKeys = [...HTMLElementPropertyKeys, 'open'];

export const HTMLDetailsElementConstantKeys = [...HTMLElementConstantKeys];
