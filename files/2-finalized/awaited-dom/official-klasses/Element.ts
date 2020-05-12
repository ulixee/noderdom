import StateMachine from '../../awaited-base/StateMachine';
import { IElement, INamedNodeMap, IDOMTokenList, IShadowRoot } from '../../awaited-base/interfaces/official';
import { ElementGenerator, IElementProperties } from '../../awaited-base/official-klasses/Element';
import { createNamedNodeMap, createDOMTokenList, createShadowRoot } from '../create';
import Node from './Node';
import ParentNode from '../official-mixins/ParentNode';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IElement, IElementProperties>();
const ElementBase = ElementGenerator(Node, ParentNode);

export default class Element extends ElementBase implements IElement {
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
