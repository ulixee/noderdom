import StateMachine from '../../awaited-base/StateMachine';
import { ISuperHTMLElement, ISuperElement } from '../../awaited-base/interfaces/super';
import { SuperHTMLElementGenerator, initialize, ISuperHTMLElementProperties } from '../../awaited-base/super-klasses/SuperHTMLElement';
import { createSuperElement } from '../create';
import Element from '../official-klasses/Element';
import HTMLHeadElementIsolate from '../isolate-mixins/HTMLHeadElementIsolate';
import HTMLInputElementIsolate from '../isolate-mixins/HTMLInputElementIsolate';
import HTMLOrSVGElement from '../official-mixins/HTMLOrSVGElement';
import Node from '../official-klasses/Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperHTMLElement, ISuperHTMLElementProperties>();
const SuperHTMLElementBase = SuperHTMLElementGenerator(Element, HTMLHeadElementIsolate, HTMLInputElementIsolate, HTMLOrSVGElement, Node);

export default class SuperHTMLElement extends SuperHTMLElementBase implements ISuperHTMLElement {
  constructor() {
    super();
    initialize(SuperHTMLElement, this);
  }

  // properties

  public get offsetParent(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty('offsetParent'), awaitedOptions);
  }
}
