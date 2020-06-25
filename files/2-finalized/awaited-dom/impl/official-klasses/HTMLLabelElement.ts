import StateMachine from '../../base/StateMachine';
import { IHTMLLabelElement, IHTMLFormElement } from '../../base/interfaces/official';
import { ISuperHTMLElement } from '../../base/interfaces/super';
import { HTMLLabelElementGenerator, IHTMLLabelElementProperties } from '../../base/official-klasses/HTMLLabelElement';
import { createSuperHTMLElement, createHTMLFormElement } from '../create';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLLabelElement, IHTMLLabelElementProperties>();
const HTMLLabelElementBaseClass = HTMLLabelElementGenerator(HTMLElement);

export default class HTMLLabelElement extends HTMLLabelElementBaseClass implements IHTMLLabelElement {
  constructor() {
    super();
  }

  // properties

  public get control(): ISuperHTMLElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLElement(awaitedPath.addProperty('control'), awaitedOptions);
  }

  public get form(): IHTMLFormElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLFormElement(awaitedPath.addProperty('form'), awaitedOptions);
  }
}
