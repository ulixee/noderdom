import Handler, { initializeConstantsAndPrototypes } from '../DynamicHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement } from '../interfaces/dom';
// tslint:disable:variable-name

export const { getState, setState, setHiddenState, setReadonlyOfHTMLElement } = StateMachine<
  IHTMLElement,
  IHTMLElementProperties,
  IHTMLElementReadonlyProperties
>('HTMLElement');

export const handler = new Handler<IHTMLElement>('HTMLElement', getState, setState);

export default class HTMLElement implements IHTMLElement {
  constructor() {
    initializeConstantsAndPrototypes<HTMLElement>(HTMLElement, this, handler, HTMLElementConstantKeys, HTMLElementPropertyKeys);
  }
}
// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLElementReadonlyProperties {}

export interface IHTMLElementProperties extends IHTMLElementReadonlyProperties {}

export const HTMLElementPropertyKeys = [];

export const HTMLElementConstantKeys = [];
