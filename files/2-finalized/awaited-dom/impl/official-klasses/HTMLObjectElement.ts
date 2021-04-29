import StateMachine from '../../base/StateMachine';
import { IHTMLObjectElement, IHTMLFormElement } from '../../base/interfaces/official';
import { ISuperDocument } from '../../base/interfaces/super';
import { HTMLObjectElementGenerator, IHTMLObjectElementProperties } from '../../base/official-klasses/HTMLObjectElement';
import { createSuperDocument, createHTMLFormElement } from '../create';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLObjectElement, IHTMLObjectElementProperties>();
const HTMLObjectElementBaseClass = HTMLObjectElementGenerator(HTMLElement);

export default class HTMLObjectElement extends HTMLObjectElementBaseClass implements IHTMLObjectElement {
  constructor() {
    super();
  }

  // properties

  public get contentDocument(): ISuperDocument {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperDocument(awaitedPath.addProperty(this, 'contentDocument'), awaitedOptions);
  }

  public get form(): IHTMLFormElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLFormElement(awaitedPath.addProperty(this, 'form'), awaitedOptions);
  }
}
