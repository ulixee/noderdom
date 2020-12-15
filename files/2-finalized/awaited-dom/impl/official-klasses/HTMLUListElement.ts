import StateMachine from '../../base/StateMachine';
import { IHTMLUListElement } from '../../base/interfaces/official';
import { HTMLUListElementGenerator, IHTMLUListElementProperties } from '../../base/official-klasses/HTMLUListElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLUListElement, IHTMLUListElementProperties>();
const HTMLUListElementBaseClass = HTMLUListElementGenerator(HTMLElement);

export default class HTMLUListElement extends HTMLUListElementBaseClass implements IHTMLUListElement {
  constructor() {
    super();
  }
}
