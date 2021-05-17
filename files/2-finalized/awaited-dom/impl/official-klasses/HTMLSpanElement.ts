import StateMachine from '../../base/StateMachine';
import { IHTMLSpanElement } from '../../base/interfaces/official';
import { HTMLSpanElementGenerator, IHTMLSpanElementProperties } from '../../base/official-klasses/HTMLSpanElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLSpanElement, IHTMLSpanElementProperties>();
const HTMLSpanElementBaseClass = HTMLSpanElementGenerator(HTMLElement);

export default class HTMLSpanElement extends HTMLSpanElementBaseClass implements IHTMLSpanElement {
  constructor() {
    super();
  }
}
