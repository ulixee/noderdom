import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLFormElement } from '../../awaited-base/interfaces/official';
import { HTMLFormElementGenerator, IHTMLFormElementProperties } from '../../awaited-base/official-klasses/HTMLFormElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLFormElement, IHTMLFormElementProperties>();
const HTMLFormElementBaseClass = HTMLFormElementGenerator(HTMLElement);

export default class HTMLFormElement extends HTMLFormElementBaseClass implements IHTMLFormElement {
  constructor() {
    super();
  }
}
