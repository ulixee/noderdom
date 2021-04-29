import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLMapElement, IHTMLElement } from '../interfaces/official';
import { ISuperHTMLCollection } from '../interfaces/super';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLMapElement, IHTMLMapElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLMapElement>('HTMLMapElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLMapElement>(getState, setState, awaitedHandler);

export function HTMLMapElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLMapElement extends HTMLElement implements IHTMLMapElement, PromiseLike<IHTMLMapElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLMapElement>(this, HTMLMapElementConstantKeys, HTMLMapElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLMapElement',
      });
    }

    // properties

    public get areas(): ISuperHTMLCollection {
      throw new Error('HTMLMapElement.areas getter not implemented');
    }

    public get name(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'name', false);
    }

    public then<TResult1 = IHTMLMapElement, TResult2 = never>(onfulfilled?: ((value: IHTMLMapElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLMapElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly areas?: ISuperHTMLCollection;
  readonly name?: Promise<string>;
}

export const HTMLMapElementPropertyKeys = [...HTMLElementPropertyKeys, 'areas', 'name'];

export const HTMLMapElementConstantKeys = [...HTMLElementConstantKeys];
