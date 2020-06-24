import StateMachine from '../../awaited-base/StateMachine';
import { ISuperElement, ISuperHTMLCollection } from '../../awaited-base/interfaces/super';
import { INamedNodeMap, IDOMTokenList, IShadowRoot } from '../../awaited-base/interfaces/official';
import { SuperElementGenerator, ISuperElementProperties } from '../../awaited-base/super-klasses/SuperElement';
import { createNamedNodeMap, createDOMTokenList, createShadowRoot, createSuperElement, createSuperHTMLCollection } from '../create';
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
export const { getState, setState } = StateMachine<ISuperElement, ISuperElementProperties>();
const SuperElementBaseClass = SuperElementGenerator(ElementIsolate, HTMLButtonElementIsolate, HTMLElementIsolate, HTMLFieldSetElementIsolate, HTMLFormElementIsolate, HTMLHeadElementIsolate, HTMLInputElementIsolate, HTMLLabelElementIsolate, HTMLOptGroupElementIsolate, HTMLOptionElementIsolate, HTMLOrSVGElement, HTMLSelectElementIsolate, HTMLTextAreaElementIsolate, NodeIsolate, NonDocumentTypeChildNode, ParentNode);

export default class SuperElement extends SuperElementBaseClass implements ISuperElement {
  constructor() {
    super();
  }

  // properties

  public get attributes(): INamedNodeMap {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createNamedNodeMap(awaitedPath.addProperty('attributes'), awaitedOptions);
  }

  public get classList(): IDOMTokenList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMTokenList(awaitedPath.addProperty('classList'), awaitedOptions);
  }

  public get part(): IDOMTokenList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMTokenList(awaitedPath.addProperty('part'), awaitedOptions);
  }

  public get shadowRoot(): IShadowRoot {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createShadowRoot(awaitedPath.addProperty('shadowRoot'), awaitedOptions);
  }

  // methods

  public closest(selectors: string): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addMethod('closest', selectors), awaitedOptions);
  }

  public getElementsByClassName(classNames: string): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addMethod('getElementsByClassName', classNames), awaitedOptions);
  }

  public getElementsByTagName(qualifiedName: string): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addMethod('getElementsByTagName', qualifiedName), awaitedOptions);
  }

  public getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addMethod('getElementsByTagNameNS', namespace, localName), awaitedOptions);
  }
}
