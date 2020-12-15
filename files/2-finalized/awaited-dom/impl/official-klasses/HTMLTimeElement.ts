import StateMachine from '../../base/StateMachine';
import { IHTMLTimeElement } from '../../base/interfaces/official';
import { HTMLTimeElementGenerator, IHTMLTimeElementProperties } from '../../base/official-klasses/HTMLTimeElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTimeElement, IHTMLTimeElementProperties>();
const HTMLTimeElementBaseClass = HTMLTimeElementGenerator(HTMLElement);

export default class HTMLTimeElement extends HTMLTimeElementBaseClass implements IHTMLTimeElement {
  constructor() {
    super();
  }
}
