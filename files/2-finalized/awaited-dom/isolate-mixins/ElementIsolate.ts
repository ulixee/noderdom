import StateMachine from '../../awaited-base/StateMachine';
import { IElementIsolate } from '../../awaited-base/interfaces/isolate';
import { INamedNodeMap, IDOMTokenList, IShadowRoot, IElement, IAttr, IDOMRect, IDOMRectList, IHTMLCollection } from '../../awaited-base/interfaces/official';
import ElementIsolateBase, { IElementIsolateProperties } from '../../awaited-base/isolate-mixins/ElementIsolate';
import { createNamedNodeMap } from '../official-klasses/NamedNodeMap';
import { createDOMTokenList } from '../official-klasses/DOMTokenList';
import { createShadowRoot } from '../official-klasses/ShadowRoot';
import { createElement } from '../official-klasses/Element';
import { createAttr } from '../official-klasses/Attr';
import { createDOMRect } from '../official-klasses/DOMRect';
import { createDOMRectList } from '../official-klasses/DOMRectList';
import { createHTMLCollection } from '../official-klasses/HTMLCollection';

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

  // methods

  public closest(selectors: string): IElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createElement(awaitedPath.addMethod('closest', [selectors]), awaitedOptions);
  }

  public getAttributeNode(qualifiedName: string): IAttr {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createAttr(awaitedPath.addMethod('getAttributeNode', [qualifiedName]), awaitedOptions);
  }

  public getAttributeNodeNS(namespace: string | null, localName: string): IAttr {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createAttr(awaitedPath.addMethod('getAttributeNodeNS', [namespace, localName]), awaitedOptions);
  }

  public getBoundingClientRect(): IDOMRect {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMRect(awaitedPath.addMethod('getBoundingClientRect', []), awaitedOptions);
  }

  public getClientRects(): IDOMRectList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMRectList(awaitedPath.addMethod('getClientRects', []), awaitedOptions);
  }

  public getElementsByClassName(classNames: string): IHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLCollection(awaitedPath.addMethod('getElementsByClassName', [classNames]), awaitedOptions);
  }

  public getElementsByTagName(qualifiedName: string): IHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLCollection(awaitedPath.addMethod('getElementsByTagName', [qualifiedName]), awaitedOptions);
  }

  public getElementsByTagNameNS(namespace: string | null, localName: string): IHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLCollection(awaitedPath.addMethod('getElementsByTagNameNS', [namespace, localName]), awaitedOptions);
  }
}
