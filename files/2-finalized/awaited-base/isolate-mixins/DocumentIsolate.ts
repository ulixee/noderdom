import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import NodeAttacher from '../NodeAttacher';
import { IDocumentIsolate } from '../interfaces/isolate';
import { ISuperHTMLCollection, ISuperHTMLElement, ISuperElement, ISuperNodeList } from '../interfaces/super';
import { IDocumentType, IFeaturePolicy, IHTMLHeadElement, IDOMImplementation, ILocation } from '../interfaces/official';
import { IDocumentReadyState, IVisibilityState } from '../interfaces/basic';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDocumentIsolate, IDocumentIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IDocumentIsolate>('DocumentIsolate', getState, setState);
export const nodeAttacher = new NodeAttacher<IDocumentIsolate>('createDocumentIsolate', getState, setState, awaitedHandler);

export default class DocumentIsolate implements IDocumentIsolate, PromiseLike<IDocumentIsolate> {
  public get URL(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'URL', false);
  }

  public get anchors(): ISuperHTMLCollection {
    throw new Error('DocumentIsolate.anchors getter not implemented');
  }

  public get body(): ISuperHTMLElement {
    throw new Error('DocumentIsolate.body getter not implemented');
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
    throw new Error('DocumentIsolate.doctype getter not implemented');
  }

  public get documentElement(): ISuperElement {
    throw new Error('DocumentIsolate.documentElement getter not implemented');
  }

  public get documentURI(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'documentURI', false);
  }

  public get domain(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'domain', false);
  }

  public get embeds(): ISuperHTMLCollection {
    throw new Error('DocumentIsolate.embeds getter not implemented');
  }

  public get featurePolicy(): IFeaturePolicy {
    throw new Error('DocumentIsolate.featurePolicy getter not implemented');
  }

  public get forms(): ISuperHTMLCollection {
    throw new Error('DocumentIsolate.forms getter not implemented');
  }

  public get fullscreenEnabled(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'fullscreenEnabled', false);
  }

  public get head(): IHTMLHeadElement {
    throw new Error('DocumentIsolate.head getter not implemented');
  }

  public get hidden(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'hidden', false);
  }

  public get images(): ISuperHTMLCollection {
    throw new Error('DocumentIsolate.images getter not implemented');
  }

  public get implementation(): IDOMImplementation {
    throw new Error('DocumentIsolate.implementation getter not implemented');
  }

  public get lastModified(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'lastModified', false);
  }

  public get links(): ISuperHTMLCollection {
    throw new Error('DocumentIsolate.links getter not implemented');
  }

  public get location(): ILocation {
    throw new Error('DocumentIsolate.location getter not implemented');
  }

  public get plugins(): ISuperHTMLCollection {
    throw new Error('DocumentIsolate.plugins getter not implemented');
  }

  public get readyState(): Promise<IDocumentReadyState> {
    return awaitedHandler.getProperty<IDocumentReadyState>(this, 'readyState', false);
  }

  public get referrer(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'referrer', false);
  }

  public get scripts(): ISuperHTMLCollection {
    throw new Error('DocumentIsolate.scripts getter not implemented');
  }

  public get scrollingElement(): ISuperElement {
    throw new Error('DocumentIsolate.scrollingElement getter not implemented');
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

  public getElementsByClassName(classNames: string): Promise<ISuperHTMLCollection> {
    return awaitedHandler.runMethod<ISuperHTMLCollection>(this, 'getElementsByClassName', [classNames]);
  }

  public getElementsByName(elementName: string): Promise<ISuperNodeList> {
    return awaitedHandler.runMethod<ISuperNodeList>(this, 'getElementsByName', [elementName]);
  }

  public getElementsByTagName(qualifiedName: string): Promise<ISuperHTMLCollection> {
    return awaitedHandler.runMethod<ISuperHTMLCollection>(this, 'getElementsByTagName', [qualifiedName]);
  }

  public getElementsByTagNameNS(namespace: string | null, localName: string): Promise<ISuperHTMLCollection> {
    return awaitedHandler.runMethod<ISuperHTMLCollection>(this, 'getElementsByTagNameNS', [namespace, localName]);
  }

  public hasFocus(): Promise<boolean> {
    return awaitedHandler.runMethod<boolean>(this, 'hasFocus', []);
  }

  public then<TResult1 = IDocumentIsolate, TResult2 = never>(onfulfilled?: ((value: IDocumentIsolate) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
    return nodeAttacher.attach(this).then(onfulfilled, onrejected);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDocumentIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly URL?: Promise<string>;
  readonly anchors?: ISuperHTMLCollection;
  readonly body?: ISuperHTMLElement;
  readonly characterSet?: Promise<string>;
  readonly compatMode?: Promise<string>;
  readonly contentType?: Promise<string>;
  readonly cookie?: Promise<string>;
  readonly designMode?: Promise<string>;
  readonly dir?: Promise<string>;
  readonly doctype?: IDocumentType;
  readonly documentElement?: ISuperElement;
  readonly documentURI?: Promise<string>;
  readonly domain?: Promise<string>;
  readonly embeds?: ISuperHTMLCollection;
  readonly featurePolicy?: IFeaturePolicy;
  readonly forms?: ISuperHTMLCollection;
  readonly fullscreenEnabled?: Promise<boolean>;
  readonly head?: IHTMLHeadElement;
  readonly hidden?: Promise<boolean>;
  readonly images?: ISuperHTMLCollection;
  readonly implementation?: IDOMImplementation;
  readonly lastModified?: Promise<string>;
  readonly links?: ISuperHTMLCollection;
  readonly location?: ILocation;
  readonly plugins?: ISuperHTMLCollection;
  readonly readyState?: Promise<IDocumentReadyState>;
  readonly referrer?: Promise<string>;
  readonly scripts?: ISuperHTMLCollection;
  readonly scrollingElement?: ISuperElement;
  readonly title?: Promise<string>;
  readonly visibilityState?: Promise<IVisibilityState>;
}

export const DocumentIsolatePropertyKeys = ['URL', 'anchors', 'body', 'characterSet', 'compatMode', 'contentType', 'cookie', 'designMode', 'dir', 'doctype', 'documentElement', 'documentURI', 'domain', 'embeds', 'featurePolicy', 'forms', 'fullscreenEnabled', 'head', 'hidden', 'images', 'implementation', 'lastModified', 'links', 'location', 'plugins', 'readyState', 'referrer', 'scripts', 'scrollingElement', 'title', 'visibilityState'];

export const DocumentIsolateConstantKeys = [];
