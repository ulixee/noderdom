import StateMachine from '../../base/StateMachine';
import { IHTMLFormElement } from '../../base/interfaces/official';
import { HTMLFormElementGenerator, IHTMLFormElementProperties } from '../../base/official-klasses/HTMLFormElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLFormElement, IHTMLFormElementProperties>();
const HTMLFormElementBaseClass = HTMLFormElementGenerator(HTMLElement);

export default class HTMLFormElement extends HTMLFormElementBaseClass implements IHTMLFormElement {
  constructor() {
    super();
  }
}
