import StateMachine from '../../base/StateMachine';
import { IHTMLOptGroupElement } from '../../base/interfaces/official';
import { HTMLOptGroupElementGenerator, IHTMLOptGroupElementProperties } from '../../base/official-klasses/HTMLOptGroupElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLOptGroupElement, IHTMLOptGroupElementProperties>();
const HTMLOptGroupElementBaseClass = HTMLOptGroupElementGenerator(HTMLElement);

export default class HTMLOptGroupElement extends HTMLOptGroupElementBaseClass implements IHTMLOptGroupElement {
  constructor() {
    super();
  }
}
