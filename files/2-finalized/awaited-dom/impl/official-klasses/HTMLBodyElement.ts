import StateMachine from '../../base/StateMachine';
import { IHTMLBodyElement } from '../../base/interfaces/official';
import { HTMLBodyElementGenerator, IHTMLBodyElementProperties } from '../../base/official-klasses/HTMLBodyElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLBodyElement, IHTMLBodyElementProperties>();
const HTMLBodyElementBaseClass = HTMLBodyElementGenerator(HTMLElement);

export default class HTMLBodyElement extends HTMLBodyElementBaseClass implements IHTMLBodyElement {
  constructor() {
    super();
  }
}
