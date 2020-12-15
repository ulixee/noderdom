import StateMachine from '../../base/StateMachine';
import { IHTMLDataListElement } from '../../base/interfaces/official';
import { HTMLDataListElementGenerator, IHTMLDataListElementProperties } from '../../base/official-klasses/HTMLDataListElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLDataListElement, IHTMLDataListElementProperties>();
const HTMLDataListElementBaseClass = HTMLDataListElementGenerator(HTMLElement);

export default class HTMLDataListElement extends HTMLDataListElementBaseClass implements IHTMLDataListElement {
  constructor() {
    super();
  }
}
