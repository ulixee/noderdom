import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { ISuperDocument } from '../interfaces/super';
import { IHTMLCollection, IHTMLElement, IDocumentType, IElement, IFeaturePolicy, IHTMLHeadElement, IDOMImplementation, ILocation, INodeList } from '../interfaces/official';
import { IDocumentReadyState, IVisibilityState } from '../interfaces/basic';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperDocument, ISuperDocumentProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperDocument>('SuperDocument', getState, setState);

export function SuperDocumentGenerator() {
  return class SuperDocument implements ISuperDocument {
    constructor() {
      initialize(SuperDocument, this);
    }

    // properties

    public get URL(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'URL', false);
    }

    public get anchors(): IHTMLCollection {
      throw new Error('SuperDocument.anchors getter not implemented');
    }

    public get body(): IHTMLElement {
      throw new Error('SuperDocument.body getter not implemented');
    }

    public get characterSet(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'characterSet', false);
    }

    public get compatMode(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'compatMode', false);
    }

    public get contentType(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'contentType', false);
    }

    public get cookie(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'cookie', false);
    }

    public get designMode(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'designMode', false);
    }

    public get dir(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'dir', false);
    }

    public get doctype(): IDocumentType {
      throw new Error('SuperDocument.doctype getter not implemented');
    }

    public get documentElement(): IElement {
      throw new Error('SuperDocument.documentElement getter not implemented');
    }

    public get documentURI(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'documentURI', false);
    }

    public get domain(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'domain', false);
    }

    public get embeds(): IHTMLCollection {
      throw new Error('SuperDocument.embeds getter not implemented');
    }

    public get featurePolicy(): IFeaturePolicy {
      throw new Error('SuperDocument.featurePolicy getter not implemented');
    }

    public get forms(): IHTMLCollection {
      throw new Error('SuperDocument.forms getter not implemented');
    }

    public get fullscreenEnabled(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'fullscreenEnabled', false);
    }

    public get head(): IHTMLHeadElement {
      throw new Error('SuperDocument.head getter not implemented');
    }

    public get hidden(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'hidden', false);
    }

    public get images(): IHTMLCollection {
      throw new Error('SuperDocument.images getter not implemented');
    }

    public get implementation(): IDOMImplementation {
      throw new Error('SuperDocument.implementation getter not implemented');
    }

    public get lastModified(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'lastModified', false);
    }

    public get links(): IHTMLCollection {
      throw new Error('SuperDocument.links getter not implemented');
    }

    public get location(): ILocation {
      throw new Error('SuperDocument.location getter not implemented');
    }

    public get plugins(): IHTMLCollection {
      throw new Error('SuperDocument.plugins getter not implemented');
    }

    public get readyState(): IDocumentReadyState {
      throw new Error('SuperDocument.readyState getter not implemented');
    }

    public get referrer(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'referrer', false);
    }

    public get scripts(): IHTMLCollection {
      throw new Error('SuperDocument.scripts getter not implemented');
    }

    public get scrollingElement(): IElement {
      throw new Error('SuperDocument.scrollingElement getter not implemented');
    }

    public get title(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'title', false);
    }

    public get visibilityState(): Promise<IVisibilityState> {
      return awaitedHandler.getProperty<IVisibilityState>(this, 'visibilityState', false);
    }

    // methods

    public exitFullscreen(): Promise<Promise<void>> {
      return awaitedHandler.runMethod<Promise<void>>(this, 'exitFullscreen', []);
    }

    public exitPointerLock(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'exitPointerLock', []);
    }

    public getElementsByClassName(classNames: string): IHTMLCollection {
      throw new Error('SuperDocument.getElementsByClassName not implemented');
    }

    public getElementsByName(elementName: string): INodeList {
      throw new Error('SuperDocument.getElementsByName not implemented');
    }

    public getElementsByTagName(qualifiedName: string): IHTMLCollection {
      throw new Error('SuperDocument.getElementsByTagName not implemented');
    }

    public getElementsByTagNameNS(namespace: string | null, localName: string): IHTMLCollection {
      throw new Error('SuperDocument.getElementsByTagNameNS not implemented');
    }

    public hasFocus(): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'hasFocus', []);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperDocumentProperties {
  readonly URL?: Promise<string>;
  readonly anchors?: IHTMLCollection;
  readonly body?: IHTMLElement;
  readonly characterSet?: Promise<string>;
  readonly compatMode?: Promise<string>;
  readonly contentType?: Promise<string>;
  readonly cookie?: Promise<string>;
  readonly designMode?: Promise<string>;
  readonly dir?: Promise<string>;
  readonly doctype?: IDocumentType;
  readonly documentElement?: IElement;
  readonly documentURI?: Promise<string>;
  readonly domain?: Promise<string>;
  readonly embeds?: IHTMLCollection;
  readonly featurePolicy?: IFeaturePolicy;
  readonly forms?: IHTMLCollection;
  readonly fullscreenEnabled?: Promise<boolean>;
  readonly head?: IHTMLHeadElement;
  readonly hidden?: Promise<boolean>;
  readonly images?: IHTMLCollection;
  readonly implementation?: IDOMImplementation;
  readonly lastModified?: Promise<string>;
  readonly links?: IHTMLCollection;
  readonly location?: ILocation;
  readonly plugins?: IHTMLCollection;
  readonly readyState?: IDocumentReadyState;
  readonly referrer?: Promise<string>;
  readonly scripts?: IHTMLCollection;
  readonly scrollingElement?: IElement;
  readonly title?: Promise<string>;
  readonly visibilityState?: Promise<IVisibilityState>;
}

export const SuperDocumentPropertyKeys = ['URL', 'anchors', 'body', 'characterSet', 'compatMode', 'contentType', 'cookie', 'designMode', 'dir', 'doctype', 'documentElement', 'documentURI', 'domain', 'embeds', 'featurePolicy', 'forms', 'fullscreenEnabled', 'head', 'hidden', 'images', 'implementation', 'lastModified', 'links', 'location', 'plugins', 'readyState', 'referrer', 'scripts', 'scrollingElement', 'title', 'visibilityState'];

export const SuperDocumentConstantKeys = [];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<ISuperDocument>, self: ISuperDocument) {
  initializeConstantsAndProperties<ISuperDocument>(Klass, self, SuperDocumentConstantKeys, SuperDocumentPropertyKeys);
}
