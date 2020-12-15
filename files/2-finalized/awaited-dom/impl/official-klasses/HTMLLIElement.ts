import StateMachine from '../../base/StateMachine';
import { IHTMLLIElement } from '../../base/interfaces/official';
import { HTMLLIElementGenerator, IHTMLLIElementProperties } from '../../base/official-klasses/HTMLLIElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLLIElement, IHTMLLIElementProperties>();
const HTMLLIElementBaseClass = HTMLLIElementGenerator(HTMLElement);

export default class HTMLLIElement extends HTMLLIElementBaseClass implements IHTMLLIElement {
  constructor() {
    super();
  }
}
