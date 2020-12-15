import StateMachine from '../../base/StateMachine';
import { IHTMLOListElement } from '../../base/interfaces/official';
import { HTMLOListElementGenerator, IHTMLOListElementProperties } from '../../base/official-klasses/HTMLOListElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLOListElement, IHTMLOListElementProperties>();
const HTMLOListElementBaseClass = HTMLOListElementGenerator(HTMLElement);

export default class HTMLOListElement extends HTMLOListElementBaseClass implements IHTMLOListElement {
  constructor() {
    super();
  }
}
