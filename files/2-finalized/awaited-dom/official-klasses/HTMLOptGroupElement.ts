import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLOptGroupElement } from '../../awaited-base/interfaces/official';
import { HTMLOptGroupElementGenerator, IHTMLOptGroupElementProperties } from '../../awaited-base/official-klasses/HTMLOptGroupElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOptGroupElement, IHTMLOptGroupElementProperties>();
const HTMLOptGroupElementBaseClass = HTMLOptGroupElementGenerator(HTMLElement);

export default class HTMLOptGroupElement extends HTMLOptGroupElementBaseClass implements IHTMLOptGroupElement {
  constructor() {
    super();
  }
}
