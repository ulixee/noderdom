import StateMachine from '../../base/StateMachine';
import { IHTMLOptionElement, IHTMLFormElement } from '../../base/interfaces/official';
import { HTMLOptionElementGenerator, IHTMLOptionElementProperties } from '../../base/official-klasses/HTMLOptionElement';
import { createHTMLFormElement } from '../create';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOptionElement, IHTMLOptionElementProperties>();
const HTMLOptionElementBaseClass = HTMLOptionElementGenerator(HTMLElement);

export default class HTMLOptionElement extends HTMLOptionElementBaseClass implements IHTMLOptionElement {
  constructor() {
    super();
  }

  // properties

  public get form(): IHTMLFormElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLFormElement(awaitedPath.addProperty(this, 'form'), awaitedOptions);
  }
}
