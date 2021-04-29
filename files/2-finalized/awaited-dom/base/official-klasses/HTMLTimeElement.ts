import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLTimeElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTimeElement, IHTMLTimeElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTimeElement>('HTMLTimeElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLTimeElement>(getState, setState, awaitedHandler);

export function HTMLTimeElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTimeElement extends HTMLElement implements IHTMLTimeElement, PromiseLike<IHTMLTimeElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLTimeElement>(this, HTMLTimeElementConstantKeys, HTMLTimeElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLTimeElement',
      });
    }

    // properties

    public get dateTime(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'dateTime', false);
    }

    public then<TResult1 = IHTMLTimeElement, TResult2 = never>(onfulfilled?: ((value: IHTMLTimeElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTimeElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly dateTime?: Promise<string>;
}

export const HTMLTimeElementPropertyKeys = [...HTMLElementPropertyKeys, 'dateTime'];

export const HTMLTimeElementConstantKeys = [...HTMLElementConstantKeys];
