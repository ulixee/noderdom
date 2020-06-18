import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLInputElement } from '../../awaited-base/interfaces/official';
import { HTMLInputElementGenerator, IHTMLInputElementProperties } from '../../awaited-base/official-klasses/HTMLInputElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLInputElement, IHTMLInputElementProperties>();
const HTMLInputElementBaseClass = HTMLInputElementGenerator(HTMLElement);

export default class HTMLInputElement extends HTMLInputElementBaseClass implements IHTMLInputElement {
  constructor() {
    super();
  }
}
