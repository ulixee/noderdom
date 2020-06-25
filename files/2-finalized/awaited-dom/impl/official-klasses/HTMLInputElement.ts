import StateMachine from '../../base/StateMachine';
import { IHTMLInputElement, IHTMLFormElement } from '../../base/interfaces/official';
import { ISuperNodeList, ISuperHTMLElement } from '../../base/interfaces/super';
import { HTMLInputElementGenerator, IHTMLInputElementProperties } from '../../base/official-klasses/HTMLInputElement';
import { createHTMLFormElement, createSuperNodeList, createSuperHTMLElement } from '../create';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLInputElement, IHTMLInputElementProperties>();
const HTMLInputElementBaseClass = HTMLInputElementGenerator(HTMLElement);

export default class HTMLInputElement extends HTMLInputElementBaseClass implements IHTMLInputElement {
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

  public get list(): ISuperHTMLElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLElement(awaitedPath.addProperty('list'), awaitedOptions);
  }
}
