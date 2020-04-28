import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { IHTMLElement, IElement } from '../../awaited-base/interfaces/official';
import { HTMLElementGenerator, initialize, IHTMLElementProperties } from '../../awaited-base/official-klasses/HTMLElement';
import { createElement } from './Element';
import Element from './Element';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLElement, IHTMLElementProperties>();
const HTMLElementBase = HTMLElementGenerator(Element);

export default class HTMLElement extends HTMLElementBase implements IHTMLElement {
  constructor() {
    super();
    initialize(HTMLElement, this);
  }

  // properties

  public get offsetParent(): IElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createElement(awaitedPath.addProperty('offsetParent'), awaitedOptions);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createHTMLElement(awaitedPath: AwaitedPath, awaitedOptions: any): HTMLElement {
  const instance = new HTMLElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
