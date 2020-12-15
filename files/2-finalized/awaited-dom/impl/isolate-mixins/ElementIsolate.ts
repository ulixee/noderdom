import StateMachine from '../../base/StateMachine';
import { IElementIsolate } from '../../base/interfaces/isolate';
import { INamedNodeMap, IDOMTokenList, IShadowRoot, IStylePropertyMapReadOnly } from '../../base/interfaces/official';
import { ISuperElement, ISuperHTMLCollection } from '../../base/interfaces/super';
import ElementIsolateBase, { IElementIsolateProperties } from '../../base/isolate-mixins/ElementIsolate';
import { createNamedNodeMap, createDOMTokenList, createShadowRoot, createSuperElement, createStylePropertyMapReadOnly, createSuperHTMLCollection } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IElementIsolate, IElementIsolateProperties>();

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

  // methods

  public closest(selectors: string): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addMethod('closest', selectors), awaitedOptions);
  }

  public computedStyleMap(): IStylePropertyMapReadOnly {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createStylePropertyMapReadOnly(awaitedPath.addMethod('computedStyleMap', ), awaitedOptions);
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
