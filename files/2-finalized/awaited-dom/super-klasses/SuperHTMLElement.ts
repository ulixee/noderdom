import StateMachine from '../../awaited-base/StateMachine';
import { ISuperHTMLElement, ISuperElement } from '../../awaited-base/interfaces/super';
import { SuperHTMLElementGenerator, ISuperHTMLElementProperties } from '../../awaited-base/super-klasses/SuperHTMLElement';
import { createSuperElement } from '../create';
import ElementIsolate from '../isolate-mixins/ElementIsolate';
import HTMLElementIsolate from '../isolate-mixins/HTMLElementIsolate';
import HTMLHeadElementIsolate from '../isolate-mixins/HTMLHeadElementIsolate';
import HTMLInputElementIsolate from '../isolate-mixins/HTMLInputElementIsolate';
import HTMLOrSVGElement from '../official-mixins/HTMLOrSVGElement';
import NodeIsolate from '../isolate-mixins/NodeIsolate';
import NonDocumentTypeChildNode from '../official-mixins/NonDocumentTypeChildNode';
import ParentNode from '../official-mixins/ParentNode';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperHTMLElement, ISuperHTMLElementProperties>();
const SuperHTMLElementBaseClass = SuperHTMLElementGenerator(ElementIsolate, HTMLElementIsolate, HTMLHeadElementIsolate, HTMLInputElementIsolate, HTMLOrSVGElement, NodeIsolate, NonDocumentTypeChildNode, ParentNode);

export default class SuperHTMLElement extends SuperHTMLElementBaseClass implements ISuperHTMLElement {
  constructor() {
    super();
  }

  // properties

  public get offsetParent(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty('offsetParent'), awaitedOptions);
  }
}
