import StateMachine from '../../base/StateMachine';
import { IHTMLSourceElement } from '../../base/interfaces/official';
import { HTMLSourceElementGenerator, IHTMLSourceElementProperties } from '../../base/official-klasses/HTMLSourceElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLSourceElement, IHTMLSourceElementProperties>();
const HTMLSourceElementBaseClass = HTMLSourceElementGenerator(HTMLElement);

export default class HTMLSourceElement extends HTMLSourceElementBaseClass implements IHTMLSourceElement {
  constructor() {
    super();
  }
}
