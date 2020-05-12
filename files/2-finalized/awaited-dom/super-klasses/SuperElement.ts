import StateMachine from '../../awaited-base/StateMachine';
import { ISuperElement } from '../../awaited-base/interfaces/super';
import { INamedNodeMap, IDOMTokenList, IShadowRoot } from '../../awaited-base/interfaces/official';
import { SuperElementGenerator, ISuperElementProperties } from '../../awaited-base/super-klasses/SuperElement';
import { createNamedNodeMap, createDOMTokenList, createShadowRoot } from '../create';
import ElementIsolate from '../isolate-mixins/ElementIsolate';
import HTMLElementIsolate from '../isolate-mixins/HTMLElementIsolate';
import HTMLHeadElementIsolate from '../isolate-mixins/HTMLHeadElementIsolate';
import HTMLInputElementIsolate from '../isolate-mixins/HTMLInputElementIsolate';
import HTMLOrSVGElement from '../official-mixins/HTMLOrSVGElement';
import NodeIsolate from '../isolate-mixins/NodeIsolate';
import ParentNode from '../official-mixins/ParentNode';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperElement, ISuperElementProperties>();
const SuperElementBase = SuperElementGenerator(ElementIsolate, HTMLElementIsolate, HTMLHeadElementIsolate, HTMLInputElementIsolate, HTMLOrSVGElement, NodeIsolate, ParentNode);

export default class SuperElement extends SuperElementBase implements ISuperElement {
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
}
