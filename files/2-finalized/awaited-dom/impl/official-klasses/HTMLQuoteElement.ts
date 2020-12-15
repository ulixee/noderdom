import StateMachine from '../../base/StateMachine';
import { IHTMLQuoteElement } from '../../base/interfaces/official';
import { HTMLQuoteElementGenerator, IHTMLQuoteElementProperties } from '../../base/official-klasses/HTMLQuoteElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLQuoteElement, IHTMLQuoteElementProperties>();
const HTMLQuoteElementBaseClass = HTMLQuoteElementGenerator(HTMLElement);

export default class HTMLQuoteElement extends HTMLQuoteElementBaseClass implements IHTMLQuoteElement {
  constructor() {
    super();
  }
}
