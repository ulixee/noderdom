import StateMachine from '../../awaited-base/StateMachine';
import { IDocumentIsolate } from '../../awaited-base/interfaces/isolate';
import { ISuperHTMLCollection, ISuperHTMLElement, ISuperElement } from '../../awaited-base/interfaces/super';
import { IDocumentType, IFeaturePolicy, IHTMLHeadElement, IDOMImplementation, ILocation } from '../../awaited-base/interfaces/official';
import DocumentIsolateBase, { IDocumentIsolateProperties } from '../../awaited-base/isolate-mixins/DocumentIsolate';
import { createSuperHTMLCollection, createSuperHTMLElement, createDocumentType, createSuperElement, createFeaturePolicy, createHTMLHeadElement, createDOMImplementation, createLocation } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDocumentIsolate, IDocumentIsolateProperties>();

export default class DocumentIsolate extends DocumentIsolateBase implements IDocumentIsolate, PromiseLike<IDocumentIsolate> {
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
}
