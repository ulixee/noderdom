import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IHTMLHeadElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLHeadElement, IHTMLHeadElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLHeadElement>('HTMLHeadElement', getState, setState);

export function HTMLHeadElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLHeadElement extends HTMLElement implements IHTMLHeadElement {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLHeadElement>(this, HTMLHeadElementConstantKeys, HTMLHeadElementPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLHeadElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLHeadElementPropertyKeys = [...HTMLElementPropertyKeys];

export const HTMLHeadElementConstantKeys = [...HTMLElementConstantKeys];
