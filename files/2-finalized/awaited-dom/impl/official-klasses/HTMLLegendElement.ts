import StateMachine from '../../base/StateMachine';
import { IHTMLLegendElement, IHTMLFormElement } from '../../base/interfaces/official';
import { HTMLLegendElementGenerator, IHTMLLegendElementProperties } from '../../base/official-klasses/HTMLLegendElement';
import { createHTMLFormElement } from '../create';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLLegendElement, IHTMLLegendElementProperties>();
const HTMLLegendElementBaseClass = HTMLLegendElementGenerator(HTMLElement);

export default class HTMLLegendElement extends HTMLLegendElementBaseClass implements IHTMLLegendElement {
  constructor() {
    super();
  }

  // properties

  public get form(): IHTMLFormElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLFormElement(awaitedPath.addProperty('form'), awaitedOptions);
  }
}
