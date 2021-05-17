import StateMachine from '../../base/StateMachine';
import { IHTMLSlotElement } from '../../base/interfaces/official';
import { HTMLSlotElementGenerator, IHTMLSlotElementProperties } from '../../base/official-klasses/HTMLSlotElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLSlotElement, IHTMLSlotElementProperties>();
const HTMLSlotElementBaseClass = HTMLSlotElementGenerator(HTMLElement);

export default class HTMLSlotElement extends HTMLSlotElementBaseClass implements IHTMLSlotElement {
  constructor() {
    super();
  }
}
