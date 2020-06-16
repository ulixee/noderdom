import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLHeadElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLHeadElement, IHTMLHeadElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLHeadElement>('HTMLHeadElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLHeadElement>('createHTMLHeadElement', getState, setState, awaitedHandler);

export function HTMLHeadElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLHeadElement extends HTMLElement implements IHTMLHeadElement, PromiseLike<IHTMLHeadElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLHeadElement>(this, HTMLHeadElementConstantKeys, HTMLHeadElementPropertyKeys);
    }

    public then<TResult1 = IHTMLHeadElement, TResult2 = never>(onfulfilled?: ((value: IHTMLHeadElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLHeadElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLHeadElementPropertyKeys = [...HTMLElementPropertyKeys];

export const HTMLHeadElementConstantKeys = [...HTMLElementConstantKeys];
