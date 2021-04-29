import StateMachine from '../../base/StateMachine';
import { IDocument, IDocumentType, IFeaturePolicy, IHTMLHeadElement, IDOMImplementation, ILocation } from '../../base/interfaces/official';
import { ISuperHTMLCollection, ISuperHTMLElement, ISuperElement, ISuperNodeList } from '../../base/interfaces/super';
import { DocumentGenerator, IDocumentProperties } from '../../base/official-klasses/Document';
import { createSuperHTMLCollection, createSuperHTMLElement, createDocumentType, createSuperElement, createFeaturePolicy, createHTMLHeadElement, createDOMImplementation, createLocation, createSuperNodeList } from '../create';
import Node from './Node';
import DocumentOrShadowRoot from '../official-mixins/DocumentOrShadowRoot';
import NonElementParentNode from '../official-mixins/NonElementParentNode';
import ParentNode from '../official-mixins/ParentNode';
import XPathEvaluatorBase from '../official-mixins/XPathEvaluatorBase';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IDocument, IDocumentProperties>();
const DocumentBaseClass = DocumentGenerator(Node, DocumentOrShadowRoot, NonElementParentNode, ParentNode, XPathEvaluatorBase);

export default class Document extends DocumentBaseClass implements IDocument {
  constructor() {
    super();
  }

  // properties

  public get anchors(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty(this, 'anchors'), awaitedOptions);
  }

  public get body(): ISuperHTMLElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLElement(awaitedPath.addProperty(this, 'body'), awaitedOptions);
  }

  public get doctype(): IDocumentType {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDocumentType(awaitedPath.addProperty(this, 'doctype'), awaitedOptions);
  }

  public get documentElement(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty(this, 'documentElement'), awaitedOptions);
  }

  public get embeds(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty(this, 'embeds'), awaitedOptions);
  }

  public get featurePolicy(): IFeaturePolicy {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createFeaturePolicy(awaitedPath.addProperty(this, 'featurePolicy'), awaitedOptions);
  }

  public get forms(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty(this, 'forms'), awaitedOptions);
  }

  public get head(): IHTMLHeadElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLHeadElement(awaitedPath.addProperty(this, 'head'), awaitedOptions);
  }

  public get images(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty(this, 'images'), awaitedOptions);
  }

  public get implementation(): IDOMImplementation {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMImplementation(awaitedPath.addProperty(this, 'implementation'), awaitedOptions);
  }

  public get links(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty(this, 'links'), awaitedOptions);
  }

  public get location(): ILocation {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createLocation(awaitedPath.addProperty(this, 'location'), awaitedOptions);
  }

  public get plugins(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty(this, 'plugins'), awaitedOptions);
  }

  public get scripts(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty(this, 'scripts'), awaitedOptions);
  }

  public get scrollingElement(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty(this, 'scrollingElement'), awaitedOptions);
  }

  // methods

  public getElementsByClassName(classNames: string): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addMethod(this, 'getElementsByClassName', classNames), awaitedOptions);
  }

  public getElementsByName(elementName: string): ISuperNodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNodeList(awaitedPath.addMethod(this, 'getElementsByName', elementName), awaitedOptions);
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
