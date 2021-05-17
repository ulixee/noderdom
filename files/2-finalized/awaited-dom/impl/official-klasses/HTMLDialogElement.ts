import StateMachine from '../../base/StateMachine';
import { IHTMLDialogElement } from '../../base/interfaces/official';
import { HTMLDialogElementGenerator, IHTMLDialogElementProperties } from '../../base/official-klasses/HTMLDialogElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLDialogElement, IHTMLDialogElementProperties>();
const HTMLDialogElementBaseClass = HTMLDialogElementGenerator(HTMLElement);

export default class HTMLDialogElement extends HTMLDialogElementBaseClass implements IHTMLDialogElement {
  constructor() {
    super();
  }
}
