import StateMachine from '../../base/StateMachine';
import { ISuperDocument, ISuperHTMLCollection, ISuperHTMLElement, ISuperElement, ISuperNodeList } from '../../base/interfaces/super';
import { IDocumentType, IFeaturePolicy, IHTMLHeadElement, IDOMImplementation, ILocation } from '../../base/interfaces/official';
import { SuperDocumentGenerator, ISuperDocumentProperties } from '../../base/super-klasses/SuperDocument';
import { createSuperHTMLCollection, createSuperHTMLElement, createDocumentType, createSuperElement, createFeaturePolicy, createHTMLHeadElement, createDOMImplementation, createLocation, createSuperNodeList } from '../create';
import DocumentIsolate from '../isolate-mixins/DocumentIsolate';
import DocumentOrShadowRoot from '../official-mixins/DocumentOrShadowRoot';
import HTMLDocumentIsolate from '../isolate-mixins/HTMLDocumentIsolate';
import NodeIsolate from '../isolate-mixins/NodeIsolate';
import NonElementParentNode from '../official-mixins/NonElementParentNode';
import ParentNode from '../official-mixins/ParentNode';
import XPathEvaluatorBase from '../official-mixins/XPathEvaluatorBase';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ISuperDocument, ISuperDocumentProperties>();
const SuperDocumentBaseClass = SuperDocumentGenerator(DocumentIsolate, DocumentOrShadowRoot, HTMLDocumentIsolate, NodeIsolate, NonElementParentNode, ParentNode, XPathEvaluatorBase);

export default class SuperDocument extends SuperDocumentBaseClass implements ISuperDocument {
  constructor() {
    super();
  }

  // properties

  public get anchors(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty('anchors'), awaitedOptions);
  }

  public get body(): ISuperHTMLElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLElement(awaitedPath.addProperty('body'), awaitedOptions);
  }

  public get doctype(): IDocumentType {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDocumentType(awaitedPath.addProperty('doctype'), awaitedOptions);
  }

  public get documentElement(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty('documentElement'), awaitedOptions);
  }

  public get embeds(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty('embeds'), awaitedOptions);
  }

  public get featurePolicy(): IFeaturePolicy {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createFeaturePolicy(awaitedPath.addProperty('featurePolicy'), awaitedOptions);
  }

  public get forms(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty('forms'), awaitedOptions);
  }

  public get head(): IHTMLHeadElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLHeadElement(awaitedPath.addProperty('head'), awaitedOptions);
  }

  public get images(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty('images'), awaitedOptions);
  }

  public get implementation(): IDOMImplementation {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMImplementation(awaitedPath.addProperty('implementation'), awaitedOptions);
  }

  public get links(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty('links'), awaitedOptions);
  }

  public get location(): ILocation {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createLocation(awaitedPath.addProperty('location'), awaitedOptions);
  }

  public get plugins(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty('plugins'), awaitedOptions);
  }

  public get scripts(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty('scripts'), awaitedOptions);
  }

  public get scrollingElement(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty('scrollingElement'), awaitedOptions);
  }

  // methods

  public getElementsByClassName(classNames: string): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addMethod('getElementsByClassName', classNames), awaitedOptions);
  }

  public getElementsByName(elementName: string): ISuperNodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNodeList(awaitedPath.addMethod('getElementsByName', elementName), awaitedOptions);
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
