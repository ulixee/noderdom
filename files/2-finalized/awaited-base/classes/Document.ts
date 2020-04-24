// tslint:disable:variable-name
import Constructable from '../Constructable';
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IWindowProxy, IDocumentReadyState, IVisibilityState } from '../interfaces/types';
import { IDocument, INode, IHTMLCollection, IHTMLElement, IDocumentType, IElement, IFeaturePolicy, IFontFaceSet, IHTMLHeadElement, IDOMImplementation, ILocation, INodeList } from '../interfaces/dom';
import { INodeProperties, INodeReadonlyProperties, NodePropertyKeys, NodeConstantKeys } from '../classes/Node';

export const { getState, setState, setHiddenState, setReadonlyOfDocument } = StateMachine<
  IDocument,
  IDocumentProperties,
  IDocumentReadonlyProperties
>('Document');

export const awaitedHandler = new AwaitedHandler<IDocument>('Document', getState, setState);

export function DocumentGenerator(Node: Constructable<INode>) {
  return class Document extends Node implements IDocument {
    constructor() {
      super();
      initializeConstantsAndProperties<Document>(Document, this, DocumentConstantKeys, DocumentPropertyKeys);
    }

    // properties

    public get URL(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'URL', false);
    }

    public get anchors(): IHTMLCollection {
      throw new Error('Document.anchors getter not implemented');
    }

    public get body(): IHTMLElement {
      throw new Error('Document.body getter not implemented');
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

    public get defaultView(): IWindowProxy {
      throw new Error('Document.defaultView getter not implemented');
    }

    public get designMode(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'designMode', false);
    }

    public get dir(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'dir', false);
    }

    public get doctype(): IDocumentType {
      throw new Error('Document.doctype getter not implemented');
    }

    public get documentElement(): IElement {
      throw new Error('Document.documentElement getter not implemented');
    }

    public get documentURI(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'documentURI', false);
    }

    public get domain(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'domain', false);
    }

    public get embeds(): IHTMLCollection {
      throw new Error('Document.embeds getter not implemented');
    }

    public get featurePolicy(): IFeaturePolicy {
      throw new Error('Document.featurePolicy getter not implemented');
    }

    public get fonts(): IFontFaceSet {
      throw new Error('Document.fonts getter not implemented');
    }

    public get forms(): IHTMLCollection {
      throw new Error('Document.forms getter not implemented');
    }

    public get fullscreenEnabled(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'fullscreenEnabled', false);
    }

    public get head(): IHTMLHeadElement {
      throw new Error('Document.head getter not implemented');
    }

    public get hidden(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'hidden', false);
    }

    public get images(): IHTMLCollection {
      throw new Error('Document.images getter not implemented');
    }

    public get implementation(): IDOMImplementation {
      throw new Error('Document.implementation getter not implemented');
    }

    public get lastModified(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'lastModified', false);
    }

    public get links(): IHTMLCollection {
      throw new Error('Document.links getter not implemented');
    }

    public get location(): ILocation {
      throw new Error('Document.location getter not implemented');
    }

    public get plugins(): IHTMLCollection {
      throw new Error('Document.plugins getter not implemented');
    }

    public get readyState(): IDocumentReadyState {
      throw new Error('Document.readyState getter not implemented');
    }

    public get referrer(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'referrer', false);
    }

    public get scripts(): IHTMLCollection {
      throw new Error('Document.scripts getter not implemented');
    }

    public get scrollingElement(): IElement {
      throw new Error('Document.scrollingElement getter not implemented');
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
      throw new Error('Document.getElementsByClassName not implemented');
    }

    public getElementsByName(elementName: string): INodeList {
      throw new Error('Document.getElementsByName not implemented');
    }

    public getElementsByTagName(qualifiedName: string): IHTMLCollection {
      throw new Error('Document.getElementsByTagName not implemented');
    }

    public getElementsByTagNameNS(namespace: string | null, localName: string): IHTMLCollection {
      throw new Error('Document.getElementsByTagNameNS not implemented');
    }

    public hasFocus(): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'hasFocus', []);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDocumentReadonlyProperties extends INodeReadonlyProperties {
  readonly URL?: Promise<string>;
  readonly anchors?: IHTMLCollection;
  readonly body?: IHTMLElement;
  readonly characterSet?: Promise<string>;
  readonly compatMode?: Promise<string>;
  readonly contentType?: Promise<string>;
  readonly cookie?: Promise<string>;
  readonly defaultView?: IWindowProxy;
  readonly designMode?: Promise<string>;
  readonly dir?: Promise<string>;
  readonly doctype?: IDocumentType;
  readonly documentElement?: IElement;
  readonly documentURI?: Promise<string>;
  readonly domain?: Promise<string>;
  readonly embeds?: IHTMLCollection;
  readonly featurePolicy?: IFeaturePolicy;
  readonly fonts?: IFontFaceSet;
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

export interface IDocumentProperties extends IDocumentReadonlyProperties, INodeProperties {}

export const DocumentPropertyKeys = [...NodePropertyKeys, 'URL', 'anchors', 'body', 'characterSet', 'compatMode', 'contentType', 'cookie', 'defaultView', 'designMode', 'dir', 'doctype', 'documentElement', 'documentURI', 'domain', 'embeds', 'featurePolicy', 'fonts', 'forms', 'fullscreenEnabled', 'head', 'hidden', 'images', 'implementation', 'lastModified', 'links', 'location', 'plugins', 'readyState', 'referrer', 'scripts', 'scrollingElement', 'title', 'visibilityState'];

export const DocumentConstantKeys = [...NodeConstantKeys];
