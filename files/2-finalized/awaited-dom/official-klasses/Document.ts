import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { IDocument, IHTMLCollection, IHTMLElement, IDocumentType, IElement, IFeaturePolicy, IHTMLHeadElement, IDOMImplementation, ILocation, INodeList } from '../../awaited-base/interfaces/official';
import { IDocumentReadyState } from '../../awaited-base/interfaces/basic';
import { DocumentGenerator, initialize, IDocumentProperties } from '../../awaited-base/official-klasses/Document';
import { createHTMLCollection } from './HTMLCollection';
import { createHTMLElement } from './HTMLElement';
import { createDocumentType } from './DocumentType';
import { createElement } from './Element';
import { createFeaturePolicy } from './FeaturePolicy';
import { createHTMLHeadElement } from './HTMLHeadElement';
import { createDOMImplementation } from './DOMImplementation';
import { createLocation } from './Location';
import { createNodeList } from './NodeList';
import Node from './Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDocument, IDocumentProperties>();
const DocumentBase = DocumentGenerator(Node);

export default class Document extends DocumentBase implements IDocument {
  constructor() {
    super();
    initialize(Document, this);
  }

  // properties

  public get anchors(): IHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLCollection(awaitedPath.addProperty('anchors'), awaitedOptions);
  }

  public get body(): IHTMLElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLElement(awaitedPath.addProperty('body'), awaitedOptions);
  }

  public get doctype(): IDocumentType {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDocumentType(awaitedPath.addProperty('doctype'), awaitedOptions);
  }

  public get documentElement(): IElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createElement(awaitedPath.addProperty('documentElement'), awaitedOptions);
  }

  public get embeds(): IHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLCollection(awaitedPath.addProperty('embeds'), awaitedOptions);
  }

  public get featurePolicy(): IFeaturePolicy {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createFeaturePolicy(awaitedPath.addProperty('featurePolicy'), awaitedOptions);
  }

  public get forms(): IHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLCollection(awaitedPath.addProperty('forms'), awaitedOptions);
  }

  public get head(): IHTMLHeadElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLHeadElement(awaitedPath.addProperty('head'), awaitedOptions);
  }

  public get images(): IHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLCollection(awaitedPath.addProperty('images'), awaitedOptions);
  }

  public get implementation(): IDOMImplementation {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMImplementation(awaitedPath.addProperty('implementation'), awaitedOptions);
  }

  public get links(): IHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLCollection(awaitedPath.addProperty('links'), awaitedOptions);
  }

  public get location(): ILocation {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createLocation(awaitedPath.addProperty('location'), awaitedOptions);
  }

  public get plugins(): IHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLCollection(awaitedPath.addProperty('plugins'), awaitedOptions);
  }

  public get readyState(): IDocumentReadyState {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDocumentReadyState(awaitedPath.addProperty('readyState'), awaitedOptions);
  }

  public get scripts(): IHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLCollection(awaitedPath.addProperty('scripts'), awaitedOptions);
  }

  public get scrollingElement(): IElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createElement(awaitedPath.addProperty('scrollingElement'), awaitedOptions);
  }

  // methods

  public getElementsByClassName(classNames: string): IHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLCollection(awaitedPath.addMethod('getElementsByClassName', [classNames]), awaitedOptions);
  }

  public getElementsByName(elementName: string): INodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createNodeList(awaitedPath.addMethod('getElementsByName', [elementName]), awaitedOptions);
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

export function createDocument(awaitedPath: AwaitedPath, awaitedOptions: any): Document {
  const instance = new Document();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
