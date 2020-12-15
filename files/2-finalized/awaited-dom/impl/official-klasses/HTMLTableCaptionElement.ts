import StateMachine from '../../base/StateMachine';
import { IHTMLTableCaptionElement } from '../../base/interfaces/official';
import { HTMLTableCaptionElementGenerator, IHTMLTableCaptionElementProperties } from '../../base/official-klasses/HTMLTableCaptionElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableCaptionElement, IHTMLTableCaptionElementProperties>();
const HTMLTableCaptionElementBaseClass = HTMLTableCaptionElementGenerator(HTMLElement);

export default class HTMLTableCaptionElement extends HTMLTableCaptionElementBaseClass implements IHTMLTableCaptionElement {
  constructor() {
    super();
  }
}
