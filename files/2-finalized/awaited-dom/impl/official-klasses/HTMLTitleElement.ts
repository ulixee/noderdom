import StateMachine from '../../base/StateMachine';
import { IHTMLTitleElement } from '../../base/interfaces/official';
import { HTMLTitleElementGenerator, IHTMLTitleElementProperties } from '../../base/official-klasses/HTMLTitleElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTitleElement, IHTMLTitleElementProperties>();
const HTMLTitleElementBaseClass = HTMLTitleElementGenerator(HTMLElement);

export default class HTMLTitleElement extends HTMLTitleElementBaseClass implements IHTMLTitleElement {
  constructor() {
    super();
  }
}
