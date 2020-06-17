import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLElement } from '../../awaited-base/interfaces/official';
import { ISuperElement } from '../../awaited-base/interfaces/super';
import { HTMLElementGenerator, IHTMLElementProperties } from '../../awaited-base/official-klasses/HTMLElement';
import { createSuperElement } from '../create';
import Element from './Element';
import HTMLOrSVGElement from '../official-mixins/HTMLOrSVGElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLElement, IHTMLElementProperties>();
const HTMLElementBaseClass = HTMLElementGenerator(Element, HTMLOrSVGElement);

export default class HTMLElement extends HTMLElementBaseClass implements IHTMLElement {
  constructor() {
    super();
  }

  // properties

  public get offsetParent(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty('offsetParent'), awaitedOptions);
  }
}
