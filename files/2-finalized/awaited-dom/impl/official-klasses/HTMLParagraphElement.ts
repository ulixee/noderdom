import StateMachine from '../../base/StateMachine';
import { IHTMLParagraphElement } from '../../base/interfaces/official';
import { HTMLParagraphElementGenerator, IHTMLParagraphElementProperties } from '../../base/official-klasses/HTMLParagraphElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLParagraphElement, IHTMLParagraphElementProperties>();
const HTMLParagraphElementBaseClass = HTMLParagraphElementGenerator(HTMLElement);

export default class HTMLParagraphElement extends HTMLParagraphElementBaseClass implements IHTMLParagraphElement {
  constructor() {
    super();
  }
}
