import StateMachine from '../../base/StateMachine';
import { IHTMLHtmlElement } from '../../base/interfaces/official';
import { HTMLHtmlElementGenerator, IHTMLHtmlElementProperties } from '../../base/official-klasses/HTMLHtmlElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLHtmlElement, IHTMLHtmlElementProperties>();
const HTMLHtmlElementBaseClass = HTMLHtmlElementGenerator(HTMLElement);

export default class HTMLHtmlElement extends HTMLHtmlElementBaseClass implements IHTMLHtmlElement {
  constructor() {
    super();
  }
}
