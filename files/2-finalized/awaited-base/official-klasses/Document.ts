import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IDocument, INode, IParentNode, IDocumentType, IFeaturePolicy, IHTMLHeadElement, IDOMImplementation, ILocation, IDocumentReadyState, IVisibilityState } from '../interfaces/official';
import { ISuperHTMLCollection, ISuperHTMLElement, ISuperElement, ISuperNodeList } from '../interfaces/super';
import { INodeProperties, NodePropertyKeys, NodeConstantKeys } from './Node';
import { IParentNodeProperties, ParentNodePropertyKeys, ParentNodeConstantKeys } from '../official-mixins/ParentNode';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDocument, IDocumentProperties>();
export const awaitedHandler = new AwaitedHandler<IDocument>('Document', getState, setState);
export const nodeAttacher = new NodeAttacher<IDocument>(getState, setState, awaitedHandler);

export function DocumentGenerator(Node: Constructable<INode>, ParentNode: Constructable<IParentNode>) {
  const Parent = (ClassMixer(Node, [ParentNode]) as unknown) as Constructable<INode & IParentNode>;

  return class Document extends Parent implements IDocument, PromiseLike<IDocument> {
    constructor() {
      super();
      initializeConstantsAndProperties<Document>(this, DocumentConstantKeys, DocumentPropertyKeys);
      setState(this, {
        createInstanceName: 'createDocument',
      });
    }

    // properties

    public get URL(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'URL', false);
    }

    public get anchors(): ISuperHTMLCollection {
      throw new Error('Document.anchors getter not implemented');
    }

    public get body(): ISuperHTMLElement {
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

    public get designMode(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'designMode', false);
    }

    public get dir(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'dir', false);
    }

    public get doctype(): IDocumentType {
      throw new Error('Document.doctype getter not implemented');
    }

    public get documentElement(): ISuperElement {
      throw new Error('Document.documentElement getter not implemented');
    }

    public get documentURI(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'documentURI', false);
    }

    public get domain(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'domain', false);
    }

    public get embeds(): ISuperHTMLCollection {
      throw new Error('Document.embeds getter not implemented');
    }

    public get featurePolicy(): IFeaturePolicy {
      throw new Error('Document.featurePolicy getter not implemented');
    }

    public get forms(): ISuperHTMLCollection {
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

    public get images(): ISuperHTMLCollection {
      throw new Error('Document.images getter not implemented');
    }

    public get implementation(): IDOMImplementation {
      throw new Error('Document.implementation getter not implemented');
    }

    public get lastModified(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'lastModified', false);
    }

    public get links(): ISuperHTMLCollection {
      throw new Error('Document.links getter not implemented');
    }

    public get location(): ILocation {
      throw new Error('Document.location getter not implemented');
    }

    public get plugins(): ISuperHTMLCollection {
      throw new Error('Document.plugins getter not implemented');
    }

    public get readyState(): Promise<IDocumentReadyState> {
      return awaitedHandler.getProperty<IDocumentReadyState>(this, 'readyState', false);
    }

    public get referrer(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'referrer', false);
    }

    public get scripts(): ISuperHTMLCollection {
      throw new Error('Document.scripts getter not implemented');
    }

    public get scrollingElement(): ISuperElement {
      throw new Error('Document.scrollingElement getter not implemented');
    }

    public get title(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'title', false);
    }

    public get visibilityState(): Promise<IVisibilityState> {
      return awaitedHandler.getProperty<IVisibilityState>(this, 'visibilityState', false);
    }

    // methods

    public exitFullscreen(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'exitFullscreen', []);
    }

    public exitPointerLock(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'exitPointerLock', []);
    }

    public getElementsByClassName(classNames: string): ISuperHTMLCollection {
      throw new Error('Document.getElementsByClassName not implemented');
    }

    public getElementsByName(elementName: string): ISuperNodeList {
      throw new Error('Document.getElementsByName not implemented');
    }

    public getElementsByTagName(qualifiedName: string): ISuperHTMLCollection {
      throw new Error('Document.getElementsByTagName not implemented');
    }

    public getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection {
      throw new Error('Document.getElementsByTagNameNS not implemented');
    }

    public hasFocus(): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'hasFocus', []);
    }

    public then<TResult1 = IDocument, TResult2 = never>(onfulfilled?: ((value: IDocument) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDocumentProperties extends INodeProperties, IParentNodeProperties {
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

export const DocumentPropertyKeys = [...NodePropertyKeys, ...ParentNodePropertyKeys, 'URL', 'anchors', 'body', 'characterSet', 'compatMode', 'contentType', 'cookie', 'designMode', 'dir', 'doctype', 'documentElement', 'documentURI', 'domain', 'embeds', 'featurePolicy', 'forms', 'fullscreenEnabled', 'head', 'hidden', 'images', 'implementation', 'lastModified', 'links', 'location', 'plugins', 'readyState', 'referrer', 'scripts', 'scrollingElement', 'title', 'visibilityState'];

export const DocumentConstantKeys = [...NodeConstantKeys, ...ParentNodeConstantKeys];
