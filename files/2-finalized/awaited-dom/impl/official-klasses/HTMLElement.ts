import StateMachine from '../../base/StateMachine';
import { IHTMLElement } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import { HTMLElementGenerator, IHTMLElementProperties } from '../../base/official-klasses/HTMLElement';
import { createSuperElement } from '../create';
import Element from './Element';
import ElementCSSInlineStyle from '../official-mixins/ElementCSSInlineStyle';
import ElementContentEditable from '../official-mixins/ElementContentEditable';
import HTMLOrSVGElement from '../official-mixins/HTMLOrSVGElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLElement, IHTMLElementProperties>();
const HTMLElementBaseClass = HTMLElementGenerator(Element, ElementCSSInlineStyle, ElementContentEditable, HTMLOrSVGElement);

export default class HTMLElement extends HTMLElementBaseClass implements IHTMLElement {
  constructor() {
    super();
  }

  // properties

  public get offsetParent(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty(this, 'offsetParent'), awaitedOptions);
  }
}
