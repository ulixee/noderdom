import StateMachine from '../../base/StateMachine';
import { IHTMLTemplateElement, IDocumentFragment } from '../../base/interfaces/official';
import { HTMLTemplateElementGenerator, IHTMLTemplateElementProperties } from '../../base/official-klasses/HTMLTemplateElement';
import { createDocumentFragment } from '../create';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTemplateElement, IHTMLTemplateElementProperties>();
const HTMLTemplateElementBaseClass = HTMLTemplateElementGenerator(HTMLElement);

export default class HTMLTemplateElement extends HTMLTemplateElementBaseClass implements IHTMLTemplateElement {
  constructor() {
    super();
  }

  // properties

  public get content(): IDocumentFragment {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDocumentFragment(awaitedPath.addProperty(this, 'content'), awaitedOptions);
  }
}
