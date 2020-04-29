import StateMachine from '../../awaited-base/StateMachine';
import { IElementIsolate } from '../../awaited-base/interfaces/isolate';
import { INamedNodeMap, IDOMTokenList, IShadowRoot } from '../../awaited-base/interfaces/official';
import ElementIsolateBase, { IElementIsolateProperties } from '../../awaited-base/isolate-mixins/ElementIsolate';
import { createNamedNodeMap } from '../official-klasses/NamedNodeMap';
import { createDOMTokenList } from '../official-klasses/DOMTokenList';
import { createShadowRoot } from '../official-klasses/ShadowRoot';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IElementIsolate, IElementIsolateProperties>();

export default class ElementIsolate extends ElementIsolateBase implements IElementIsolate {
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
