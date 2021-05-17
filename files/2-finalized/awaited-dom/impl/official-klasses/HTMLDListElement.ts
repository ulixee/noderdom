import StateMachine from '../../base/StateMachine';
import { IHTMLDListElement } from '../../base/interfaces/official';
import { HTMLDListElementGenerator, IHTMLDListElementProperties } from '../../base/official-klasses/HTMLDListElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLDListElement, IHTMLDListElementProperties>();
const HTMLDListElementBaseClass = HTMLDListElementGenerator(HTMLElement);

export default class HTMLDListElement extends HTMLDListElementBaseClass implements IHTMLDListElement {
  constructor() {
    super();
  }
}
