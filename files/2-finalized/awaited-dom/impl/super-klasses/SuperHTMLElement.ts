import StateMachine from '../../base/StateMachine';
import { ISuperHTMLElement, ISuperElement } from '../../base/interfaces/super';
import { SuperHTMLElementGenerator, ISuperHTMLElementProperties } from '../../base/super-klasses/SuperHTMLElement';
import { createSuperElement } from '../create';
import ElementIsolate from '../isolate-mixins/ElementIsolate';
import HTMLButtonElementIsolate from '../isolate-mixins/HTMLButtonElementIsolate';
import HTMLElementIsolate from '../isolate-mixins/HTMLElementIsolate';
import HTMLFieldSetElementIsolate from '../isolate-mixins/HTMLFieldSetElementIsolate';
import HTMLFormElementIsolate from '../isolate-mixins/HTMLFormElementIsolate';
import HTMLHeadElementIsolate from '../isolate-mixins/HTMLHeadElementIsolate';
import HTMLInputElementIsolate from '../isolate-mixins/HTMLInputElementIsolate';
import HTMLLabelElementIsolate from '../isolate-mixins/HTMLLabelElementIsolate';
import HTMLOptGroupElementIsolate from '../isolate-mixins/HTMLOptGroupElementIsolate';
import HTMLOptionElementIsolate from '../isolate-mixins/HTMLOptionElementIsolate';
import HTMLOrSVGElement from '../official-mixins/HTMLOrSVGElement';
import HTMLSelectElementIsolate from '../isolate-mixins/HTMLSelectElementIsolate';
import HTMLTextAreaElementIsolate from '../isolate-mixins/HTMLTextAreaElementIsolate';
import NodeIsolate from '../isolate-mixins/NodeIsolate';
import NonDocumentTypeChildNode from '../official-mixins/NonDocumentTypeChildNode';
import ParentNode from '../official-mixins/ParentNode';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ISuperHTMLElement, ISuperHTMLElementProperties>();
const SuperHTMLElementBaseClass = SuperHTMLElementGenerator(ElementIsolate, HTMLButtonElementIsolate, HTMLElementIsolate, HTMLFieldSetElementIsolate, HTMLFormElementIsolate, HTMLHeadElementIsolate, HTMLInputElementIsolate, HTMLLabelElementIsolate, HTMLOptGroupElementIsolate, HTMLOptionElementIsolate, HTMLOrSVGElement, HTMLSelectElementIsolate, HTMLTextAreaElementIsolate, NodeIsolate, NonDocumentTypeChildNode, ParentNode);

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
