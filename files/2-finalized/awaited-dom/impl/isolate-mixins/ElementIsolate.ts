import StateMachine from '../../base/StateMachine';
import { IElementIsolate } from '../../base/interfaces/isolate';
import { INamedNodeMap, IDOMTokenList, IShadowRoot } from '../../base/interfaces/official';
import { ISuperElement, ISuperHTMLCollection } from '../../base/interfaces/super';
import ElementIsolateBase, { IElementIsolateProperties } from '../../base/isolate-mixins/ElementIsolate';
import { createNamedNodeMap, createDOMTokenList, createShadowRoot, createSuperElement, createSuperHTMLCollection } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IElementIsolate, IElementIsolateProperties>();

export default class ElementIsolate extends ElementIsolateBase implements IElementIsolate {
  public get attributes(): INamedNodeMap {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createNamedNodeMap(awaitedPath.addProperty(this, 'attributes'), awaitedOptions);
  }

  public get classList(): IDOMTokenList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMTokenList(awaitedPath.addProperty(this, 'classList'), awaitedOptions);
  }

  public get part(): IDOMTokenList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMTokenList(awaitedPath.addProperty(this, 'part'), awaitedOptions);
  }

  public get shadowRoot(): IShadowRoot {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createShadowRoot(awaitedPath.addProperty(this, 'shadowRoot'), awaitedOptions);
  }

  // methods

  public closest(selectors: string): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addMethod(this, 'closest', selectors), awaitedOptions);
  }

  public getElementsByClassName(classNames: string): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addMethod(this, 'getElementsByClassName', classNames), awaitedOptions);
  }

  public getElementsByTagName(qualifiedName: string): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addMethod(this, 'getElementsByTagName', qualifiedName), awaitedOptions);
  }

  public getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addMethod(this, 'getElementsByTagNameNS', namespace, localName), awaitedOptions);
  }
}
