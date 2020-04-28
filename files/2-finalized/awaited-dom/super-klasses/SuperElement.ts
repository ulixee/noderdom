import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { ISuperElement } from '../../awaited-base/interfaces/super';
import { INamedNodeMap, IDOMTokenList, IShadowRoot, IElement, IAttr, IDOMRect, IDOMRectList, IHTMLCollection } from '../../awaited-base/interfaces/official';
import { SuperElementGenerator, initialize, ISuperElementProperties } from '../../awaited-base/super-klasses/SuperElement';
import { createNamedNodeMap } from '../official-klasses/NamedNodeMap';
import { createDOMTokenList } from '../official-klasses/DOMTokenList';
import { createShadowRoot } from '../official-klasses/ShadowRoot';
import { createElement } from '../official-klasses/Element';
import { createAttr } from '../official-klasses/Attr';
import { createDOMRect } from '../official-klasses/DOMRect';
import { createDOMRectList } from '../official-klasses/DOMRectList';
import { createHTMLCollection } from '../official-klasses/HTMLCollection';
import HTMLElementIsolate from './HTMLElementIsolate';
import HTMLHeadElementIsolate from './HTMLHeadElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperElement, ISuperElementProperties>();
const SuperElementBase = SuperElementGenerator(HTMLElementIsolate, HTMLHeadElementIsolate);

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

export function createSuperElement(awaitedPath: AwaitedPath, awaitedOptions: any): SuperElement {
  const instance = new SuperElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
