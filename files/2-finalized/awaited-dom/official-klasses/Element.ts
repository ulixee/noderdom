import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { IElement, INamedNodeMap, IDOMTokenList, IShadowRoot, IAttr, IDOMRect, IDOMRectList, IHTMLCollection } from '../../awaited-base/interfaces/official';
import { ElementGenerator, initialize, IElementProperties } from '../../awaited-base/official-klasses/Element';
import { createNamedNodeMap } from './NamedNodeMap';
import { createDOMTokenList } from './DOMTokenList';
import { createShadowRoot } from './ShadowRoot';
import { createAttr } from './Attr';
import { createDOMRect } from './DOMRect';
import { createDOMRectList } from './DOMRectList';
import { createHTMLCollection } from './HTMLCollection';
import Node from './Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IElement, IElementProperties>();
const ElementBase = ElementGenerator(Node);

export default class Element extends ElementBase implements IElement {
  constructor() {
    super();
    initialize(Element, this);
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

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createElement(awaitedPath: AwaitedPath, awaitedOptions: any): Element {
  const instance = new Element();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
