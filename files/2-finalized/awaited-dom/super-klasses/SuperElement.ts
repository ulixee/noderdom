import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { ISuperElement } from '../../awaited-base/interfaces/super';
import { INamedNodeMap, IDOMTokenList, IShadowRoot } from '../../awaited-base/interfaces/official';
import { SuperElementGenerator, initialize, ISuperElementProperties } from '../../awaited-base/super-klasses/SuperElement';
import { createNamedNodeMap } from '../official-klasses/NamedNodeMap';
import { createDOMTokenList } from '../official-klasses/DOMTokenList';
import { createShadowRoot } from '../official-klasses/ShadowRoot';
import HTMLElementIsolate from '../isolate-mixins/HTMLElementIsolate';
import HTMLHeadElementIsolate from '../isolate-mixins/HTMLHeadElementIsolate';
import Node from '../official-klasses/Node';
import ParentNode from '../official-mixins/ParentNode';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperElement, ISuperElementProperties>();
const SuperElementBase = SuperElementGenerator(HTMLElementIsolate, HTMLHeadElementIsolate, Node, ParentNode);

export default class SuperElement extends SuperElementBase implements ISuperElement {
  constructor() {
    super();
    initialize(SuperElement, this);
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

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createSuperElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperElement {
  const instance = new SuperElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
