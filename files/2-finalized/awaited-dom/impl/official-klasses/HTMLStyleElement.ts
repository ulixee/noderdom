import StateMachine from '../../base/StateMachine';
import { IHTMLStyleElement } from '../../base/interfaces/official';
import { HTMLStyleElementGenerator, IHTMLStyleElementProperties } from '../../base/official-klasses/HTMLStyleElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLStyleElement, IHTMLStyleElementProperties>();
const HTMLStyleElementBaseClass = HTMLStyleElementGenerator(HTMLElement);

export default class HTMLStyleElement extends HTMLStyleElementBaseClass implements IHTMLStyleElement {
  constructor() {
    super();
  }
}
