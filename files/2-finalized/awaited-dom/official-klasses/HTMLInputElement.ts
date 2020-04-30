import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLInputElement } from '../../awaited-base/interfaces/official';
import { HTMLInputElementGenerator, initialize, IHTMLInputElementProperties } from '../../awaited-base/official-klasses/HTMLInputElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLInputElement, IHTMLInputElementProperties>();
const HTMLInputElementBase = HTMLInputElementGenerator(HTMLElement);

export default class HTMLInputElement extends HTMLInputElementBase implements IHTMLInputElement {
  constructor() {
    super();
    initialize(HTMLInputElement, this);
  }
}
