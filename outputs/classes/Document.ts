import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { INode, IDocumentOrShadowRoot, IGlobalEventHandlers, INonElementParentNode, IParentNode, IDocumentEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDOMImplementation, IDocumentType, IElement, ILocation, IDocumentReadyState, IHTMLElement, IHTMLHeadElement, IHTMLCollection, IHTMLScriptElement, IWindowProxy, IVisibilityState, IElementCreationOptions, IDocumentFragment, IText, ICDATASection, IComment, IProcessingInstruction, IAttr, IEvent, IRange, INodeFilter, INodeIterator, ITreeWalker, INodeList, IDocument, ISelection } from '../interfaces';
import { INodeProperties, INodeReadonlyProperties } from './Node';
import { IDocumentOrShadowRootProperties, IDocumentOrShadowRootReadonlyProperties } from '../mixins/DocumentOrShadowRoot';
import { IGlobalEventHandlersProperties, IGlobalEventHandlersReadonlyProperties } from '../mixins/GlobalEventHandlers';
import { INonElementParentNodeProperties, INonElementParentNodeReadonlyProperties } from '../mixins/NonElementParentNode';
import { IParentNodeProperties, IParentNodeReadonlyProperties } from '../mixins/ParentNode';

// tslint:disable-next-line:variable-name
export function DocumentGenerator(Node: Constructable<INode>, DocumentOrShadowRoot: Constructable<IDocumentOrShadowRoot>, GlobalEventHandlers: Constructable<IGlobalEventHandlers>, NonElementParentNode: Constructable<INonElementParentNode>, ParentNode: Constructable<IParentNode>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(Node, [DocumentOrShadowRoot, GlobalEventHandlers, NonElementParentNode, ParentNode]) as unknown) as Constructable<INode & IDocumentOrShadowRoot & IGlobalEventHandlers & INonElementParentNode & IParentNode>;

  return class Document extends Parent implements IDocument {
    public get URL(): string {
      return InternalHandler.get<IDocument, string>(this, 'URL');
    }

    public get anchors(): IHTMLCollection {
      return InternalHandler.get<IDocument, IHTMLCollection>(this, 'anchors');
    }

    public get applets(): IHTMLCollection {
      return InternalHandler.get<IDocument, IHTMLCollection>(this, 'applets');
    }

    public get body(): IHTMLElement | null {
      return InternalHandler.get<IDocument, IHTMLElement | null>(this, 'body');
    }

    public set body(value: IHTMLElement | null) {
      InternalHandler.set<IDocument, IHTMLElement | null>(this, 'body', value);
    }

    public get characterSet(): string {
      return InternalHandler.get<IDocument, string>(this, 'characterSet');
    }

    public get charset(): string {
      return InternalHandler.get<IDocument, string>(this, 'charset');
    }

    public get compatMode(): string {
      return InternalHandler.get<IDocument, string>(this, 'compatMode');
    }

    public get contentType(): string {
      return InternalHandler.get<IDocument, string>(this, 'contentType');
    }

    public get cookie(): string {
      return InternalHandler.get<IDocument, string>(this, 'cookie');
    }

    public set cookie(value: string) {
      InternalHandler.set<IDocument, string>(this, 'cookie', value);
    }

    public get currentScript(): IHTMLScriptElement | null {
      return InternalHandler.get<IDocument, IHTMLScriptElement | null>(this, 'currentScript');
    }

    public get defaultView(): IWindowProxy | null {
      return InternalHandler.get<IDocument, IWindowProxy | null>(this, 'defaultView');
    }

    public get dir(): string {
      return InternalHandler.get<IDocument, string>(this, 'dir');
    }

    public set dir(value: string) {
      InternalHandler.set<IDocument, string>(this, 'dir', value);
    }

    public get doctype(): IDocumentType | null {
      return InternalHandler.get<IDocument, IDocumentType | null>(this, 'doctype');
    }

    public get documentElement(): IElement | null {
      return InternalHandler.get<IDocument, IElement | null>(this, 'documentElement');
    }

    public get documentURI(): string {
      return InternalHandler.get<IDocument, string>(this, 'documentURI');
    }

    public get embeds(): IHTMLCollection {
      return InternalHandler.get<IDocument, IHTMLCollection>(this, 'embeds');
    }

    public get forms(): IHTMLCollection {
      return InternalHandler.get<IDocument, IHTMLCollection>(this, 'forms');
    }

    public get head(): IHTMLHeadElement | null {
      return InternalHandler.get<IDocument, IHTMLHeadElement | null>(this, 'head');
    }

    public get hidden(): boolean {
      return InternalHandler.get<IDocument, boolean>(this, 'hidden');
    }

    public get images(): IHTMLCollection {
      return InternalHandler.get<IDocument, IHTMLCollection>(this, 'images');
    }

    public get implementation(): IDOMImplementation {
      return InternalHandler.get<IDocument, IDOMImplementation>(this, 'implementation');
    }

    public get inputEncoding(): string {
      return InternalHandler.get<IDocument, string>(this, 'inputEncoding');
    }

    public get lastModified(): string {
      return InternalHandler.get<IDocument, string>(this, 'lastModified');
    }

    public get links(): IHTMLCollection {
      return InternalHandler.get<IDocument, IHTMLCollection>(this, 'links');
    }

    public get location(): ILocation | null {
      return InternalHandler.get<IDocument, ILocation | null>(this, 'location');
    }

    public get onreadystatechange(): ((this: IDocument, ev: IEvent) => any) | null {
      return InternalHandler.get<IDocument, ((this: IDocument, ev: IEvent) => any) | null>(this, 'onreadystatechange');
    }

    public set onreadystatechange(value: ((this: IDocument, ev: IEvent) => any) | null) {
      InternalHandler.set<IDocument, ((this: IDocument, ev: IEvent) => any) | null>(this, 'onreadystatechange', value);
    }

    public get onvisibilitychange(): ((this: IDocument, ev: IEvent) => any) | null {
      return InternalHandler.get<IDocument, ((this: IDocument, ev: IEvent) => any) | null>(this, 'onvisibilitychange');
    }

    public set onvisibilitychange(value: ((this: IDocument, ev: IEvent) => any) | null) {
      InternalHandler.set<IDocument, ((this: IDocument, ev: IEvent) => any) | null>(this, 'onvisibilitychange', value);
    }

    public get plugins(): IHTMLCollection {
      return InternalHandler.get<IDocument, IHTMLCollection>(this, 'plugins');
    }

    public get readyState(): IDocumentReadyState {
      return InternalHandler.get<IDocument, IDocumentReadyState>(this, 'readyState');
    }

    public get referrer(): string {
      return InternalHandler.get<IDocument, string>(this, 'referrer');
    }

    public get scripts(): IHTMLCollection {
      return InternalHandler.get<IDocument, IHTMLCollection>(this, 'scripts');
    }

    public get title(): string {
      return InternalHandler.get<IDocument, string>(this, 'title');
    }

    public set title(value: string) {
      InternalHandler.set<IDocument, string>(this, 'title', value);
    }

    public get visibilityState(): IVisibilityState {
      return InternalHandler.get<IDocument, IVisibilityState>(this, 'visibilityState');
    }

    // methods

    public adoptNode(node: INode): INode {
      return InternalHandler.run<IDocument, INode>(this, 'adoptNode', [node]);
    }

    public captureEvents(): void {
      InternalHandler.run<IDocument, void>(this, 'captureEvents', []);
    }

    public clear(): void {
      InternalHandler.run<IDocument, void>(this, 'clear', []);
    }

    public close(): void {
      InternalHandler.run<IDocument, void>(this, 'close', []);
    }

    public createAttribute(localName: string): IAttr {
      return InternalHandler.run<IDocument, IAttr>(this, 'createAttribute', [localName]);
    }

    public createAttributeNS(namespace: string | null, qualifiedName: string): IAttr {
      return InternalHandler.run<IDocument, IAttr>(this, 'createAttributeNS', [namespace, qualifiedName]);
    }

    public createCDATASection(data: string): ICDATASection {
      return InternalHandler.run<IDocument, ICDATASection>(this, 'createCDATASection', [data]);
    }

    public createComment(data: string): IComment {
      return InternalHandler.run<IDocument, IComment>(this, 'createComment', [data]);
    }

    public createDocumentFragment(): IDocumentFragment {
      return InternalHandler.run<IDocument, IDocumentFragment>(this, 'createDocumentFragment', []);
    }

    public createElement(localName: string, options?: IElementCreationOptions): IElement {
      return InternalHandler.run<IDocument, IElement>(this, 'createElement', [localName, options]);
    }

    public createElementNS(namespace: string | null, qualifiedName: string, options?: IElementCreationOptions): IElement {
      return InternalHandler.run<IDocument, IElement>(this, 'createElementNS', [namespace, qualifiedName, options]);
    }

    public createEvent(eventInterface: string): IEvent {
      return InternalHandler.run<IDocument, IEvent>(this, 'createEvent', [eventInterface]);
    }

    public createNodeIterator(root: INode, whatToShow?: number, filter?: INodeFilter | null): INodeIterator {
      return InternalHandler.run<IDocument, INodeIterator>(this, 'createNodeIterator', [root, whatToShow, filter]);
    }

    public createProcessingInstruction(target: string, data: string): IProcessingInstruction {
      return InternalHandler.run<IDocument, IProcessingInstruction>(this, 'createProcessingInstruction', [target, data]);
    }

    public createRange(): IRange {
      return InternalHandler.run<IDocument, IRange>(this, 'createRange', []);
    }

    public createTextNode(data: string): IText {
      return InternalHandler.run<IDocument, IText>(this, 'createTextNode', [data]);
    }

    public createTreeWalker(root: INode, whatToShow?: number, filter?: INodeFilter | null): ITreeWalker {
      return InternalHandler.run<IDocument, ITreeWalker>(this, 'createTreeWalker', [root, whatToShow, filter]);
    }

    public getElementsByClassName(classNames: string): IHTMLCollection {
      return InternalHandler.run<IDocument, IHTMLCollection>(this, 'getElementsByClassName', [classNames]);
    }

    public getElementsByName(elementName: string): INodeList {
      return InternalHandler.run<IDocument, INodeList>(this, 'getElementsByName', [elementName]);
    }

    public getElementsByTagName(qualifiedName: string): IHTMLCollection {
      return InternalHandler.run<IDocument, IHTMLCollection>(this, 'getElementsByTagName', [qualifiedName]);
    }

    public getElementsByTagNameNS(namespace: string | null, localName: string): IHTMLCollection {
      return InternalHandler.run<IDocument, IHTMLCollection>(this, 'getElementsByTagNameNS', [namespace, localName]);
    }

    public getSelection(): ISelection | null {
      return InternalHandler.run<IDocument, ISelection | null>(this, 'getSelection', []);
    }

    public hasFocus(): boolean {
      return InternalHandler.run<IDocument, boolean>(this, 'hasFocus', []);
    }

    public importNode(node: INode, deep?: boolean): INode {
      return InternalHandler.run<IDocument, INode>(this, 'importNode', [node, deep]);
    }

    public open(type?: string, replace?: string): IDocument {
      return InternalHandler.run<IDocument, IDocument>(this, 'open', [type, replace]);
    }

    public releaseEvents(): void {
      InternalHandler.run<IDocument, void>(this, 'releaseEvents', []);
    }

    public write(...text: string[]): void {
      InternalHandler.run<IDocument, void>(this, 'write', [text]);
    }

    public writeln(...text: string[]): void {
      InternalHandler.run<IDocument, void>(this, 'writeln', [text]);
    }

    public addEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IDocument, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IDocument, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IDocumentProperties extends INodeProperties, IDocumentOrShadowRootProperties, IGlobalEventHandlersProperties, INonElementParentNodeProperties, IParentNodeProperties {
  URL?: string;
  anchors?: IHTMLCollection;
  applets?: IHTMLCollection;
  body?: IHTMLElement | null;
  characterSet?: string;
  charset?: string;
  compatMode?: string;
  contentType?: string;
  cookie?: string;
  currentScript?: IHTMLScriptElement | null;
  defaultView?: IWindowProxy | null;
  dir?: string;
  doctype?: IDocumentType | null;
  documentElement?: IElement | null;
  documentURI?: string;
  embeds?: IHTMLCollection;
  forms?: IHTMLCollection;
  head?: IHTMLHeadElement | null;
  hidden?: boolean;
  images?: IHTMLCollection;
  implementation?: IDOMImplementation;
  inputEncoding?: string;
  lastModified?: string;
  links?: IHTMLCollection;
  location?: ILocation | null;
  onreadystatechange?: ((this: IDocument, ev: IEvent) => any) | null;
  onvisibilitychange?: ((this: IDocument, ev: IEvent) => any) | null;
  plugins?: IHTMLCollection;
  readyState?: IDocumentReadyState;
  referrer?: string;
  scripts?: IHTMLCollection;
  title?: string;
  visibilityState?: IVisibilityState;
}

export interface IDocumentReadonlyProperties extends INodeReadonlyProperties, IDocumentOrShadowRootReadonlyProperties, IGlobalEventHandlersReadonlyProperties, INonElementParentNodeReadonlyProperties, IParentNodeReadonlyProperties {
  URL?: string;
  anchors?: IHTMLCollection;
  applets?: IHTMLCollection;
  characterSet?: string;
  charset?: string;
  compatMode?: string;
  contentType?: string;
  currentScript?: IHTMLScriptElement | null;
  defaultView?: IWindowProxy | null;
  doctype?: IDocumentType | null;
  documentElement?: IElement | null;
  documentURI?: string;
  embeds?: IHTMLCollection;
  forms?: IHTMLCollection;
  head?: IHTMLHeadElement | null;
  hidden?: boolean;
  images?: IHTMLCollection;
  implementation?: IDOMImplementation;
  inputEncoding?: string;
  lastModified?: string;
  links?: IHTMLCollection;
  location?: ILocation | null;
  plugins?: IHTMLCollection;
  readyState?: IDocumentReadyState;
  referrer?: string;
  scripts?: IHTMLCollection;
  visibilityState?: IVisibilityState;
}

export const { getState, setState, setReadonlyOfDocument } = InternalStateGenerator<
  IDocument,
  IDocumentProperties,
  IDocumentReadonlyProperties
>('Document');
