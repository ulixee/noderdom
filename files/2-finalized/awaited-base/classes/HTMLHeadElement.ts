// tslint:disable:variable-name
import Constructable from '../Constructable';
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IHTMLHeadElement, IHTMLElement } from '../interfaces/dom';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from '../classes/HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLHeadElement } = StateMachine<
  IHTMLHeadElement,
  IHTMLHeadElementProperties,
  IHTMLHeadElementReadonlyProperties
>('HTMLHeadElement');

export const awaitedHandler = new AwaitedHandler<IHTMLHeadElement>('HTMLHeadElement', getState, setState);

export function HTMLHeadElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLHeadElement extends HTMLElement implements IHTMLHeadElement {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLHeadElement>(HTMLHeadElement, this, HTMLHeadElementConstantKeys, HTMLHeadElementPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLHeadElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export interface IHTMLHeadElementProperties extends IHTMLHeadElementReadonlyProperties, IHTMLElementProperties {}

export const HTMLHeadElementPropertyKeys = [...HTMLElementPropertyKeys];

export const HTMLHeadElementConstantKeys = [...HTMLElementConstantKeys];
