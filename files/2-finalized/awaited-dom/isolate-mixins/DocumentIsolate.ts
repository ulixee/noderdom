import StateMachine from '../../awaited-base/StateMachine';
import { IDocumentIsolate } from '../../awaited-base/interfaces/isolate';
import { IHTMLCollection, IHTMLElement, IDocumentType, IElement, IFeaturePolicy, IHTMLHeadElement, IDOMImplementation, ILocation } from '../../awaited-base/interfaces/official';
import DocumentIsolateBase, { IDocumentIsolateProperties } from '../../awaited-base/isolate-mixins/DocumentIsolate';
import { createHTMLCollection } from '../official-klasses/HTMLCollection';
import { createHTMLElement } from '../official-klasses/HTMLElement';
import { createDocumentType } from '../official-klasses/DocumentType';
import { createElement } from '../official-klasses/Element';
import { createFeaturePolicy } from '../official-klasses/FeaturePolicy';
import { createHTMLHeadElement } from '../official-klasses/HTMLHeadElement';
import { createDOMImplementation } from '../official-klasses/DOMImplementation';
import { createLocation } from '../official-klasses/Location';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDocumentIsolate, IDocumentIsolateProperties>();

export default class DocumentIsolate extends DocumentIsolateBase implements IDocumentIsolate {
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

  public get scripts(): IHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLCollection(awaitedPath.addProperty('scripts'), awaitedOptions);
  }

  public get scrollingElement(): IElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createElement(awaitedPath.addProperty('scrollingElement'), awaitedOptions);
  }
}