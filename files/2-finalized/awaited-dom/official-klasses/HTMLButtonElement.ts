import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLButtonElement, IHTMLFormElement } from '../../awaited-base/interfaces/official';
import { ISuperNodeList } from '../../awaited-base/interfaces/super';
import { HTMLButtonElementGenerator, IHTMLButtonElementProperties } from '../../awaited-base/official-klasses/HTMLButtonElement';
import { createHTMLFormElement, createSuperNodeList } from '../create';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLButtonElement, IHTMLButtonElementProperties>();
const HTMLButtonElementBaseClass = HTMLButtonElementGenerator(HTMLElement);

export default class HTMLButtonElement extends HTMLButtonElementBaseClass implements IHTMLButtonElement {
  constructor() {
    super();
  }

  // properties

  public get form(): IHTMLFormElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLFormElement(awaitedPath.addProperty('form'), awaitedOptions);
  }

  public get labels(): ISuperNodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNodeList(awaitedPath.addProperty('labels'), awaitedOptions);
  }
}
