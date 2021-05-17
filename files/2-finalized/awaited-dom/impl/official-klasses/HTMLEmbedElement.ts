import StateMachine from '../../base/StateMachine';
import { IHTMLEmbedElement } from '../../base/interfaces/official';
import { HTMLEmbedElementGenerator, IHTMLEmbedElementProperties } from '../../base/official-klasses/HTMLEmbedElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLEmbedElement, IHTMLEmbedElementProperties>();
const HTMLEmbedElementBaseClass = HTMLEmbedElementGenerator(HTMLElement);

export default class HTMLEmbedElement extends HTMLEmbedElementBaseClass implements IHTMLEmbedElement {
  constructor() {
    super();
  }
}
