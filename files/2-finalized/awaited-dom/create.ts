import AwaitedPath from '../awaited-base/AwaitedPath';
import StateMachine from '../awaited-base/StateMachine';
import { IAttr, ICharacterData, IDOMImplementation, IDOMRect, IDOMRectList, IDOMTokenList, IDocument, IDocumentType, IElement, IFeaturePolicy, IHTMLCollection, IHTMLElement, IHTMLHeadElement, IHTMLInputElement, ILocation, INamedNodeMap, INode, INodeList, IShadowRoot, IStyleSheet, IText } from '../awaited-base/interfaces/official';
import { ISuperDocument, ISuperElement, ISuperNode, ISuperNodeList, ISuperHTMLCollection, ISuperText, ISuperCharacterData, ISuperHTMLElement, ISuperStyleSheet } from '../awaited-base/interfaces/super';

export const { setState } = StateMachine<any, any>();

export function createAttr<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IAttr {
  const Attr = require('./official-klasses/Attr').default; // tslint:disable-line:variable-name
  const instance = new Attr();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createCharacterData<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ICharacterData {
  const CharacterData = require('./official-klasses/CharacterData').default; // tslint:disable-line:variable-name
  const instance = new CharacterData();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createDOMImplementation<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDOMImplementation {
  const DOMImplementation = require('./official-klasses/DOMImplementation').default; // tslint:disable-line:variable-name
  const instance = new DOMImplementation();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createDOMRect<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDOMRect {
  const DOMRect = require('./official-klasses/DOMRect').default; // tslint:disable-line:variable-name
  const instance = new DOMRect();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createDOMRectList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDOMRectList {
  const DOMRectList = require('./official-klasses/DOMRectList').default; // tslint:disable-line:variable-name
  const instance = new DOMRectList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createDOMTokenList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDOMTokenList {
  const DOMTokenList = require('./official-klasses/DOMTokenList').default; // tslint:disable-line:variable-name
  const instance = new DOMTokenList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createDocument<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDocument {
  const Document = require('./official-klasses/Document').default; // tslint:disable-line:variable-name
  const instance = new Document();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createDocumentType<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDocumentType {
  const DocumentType = require('./official-klasses/DocumentType').default; // tslint:disable-line:variable-name
  const instance = new DocumentType();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IElement {
  const Element = require('./official-klasses/Element').default; // tslint:disable-line:variable-name
  const instance = new Element();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createFeaturePolicy<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IFeaturePolicy {
  const FeaturePolicy = require('./official-klasses/FeaturePolicy').default; // tslint:disable-line:variable-name
  const instance = new FeaturePolicy();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLCollection<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLCollection {
  const HTMLCollection = require('./official-klasses/HTMLCollection').default; // tslint:disable-line:variable-name
  const instance = new HTMLCollection();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLElement {
  const HTMLElement = require('./official-klasses/HTMLElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLHeadElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLHeadElement {
  const HTMLHeadElement = require('./official-klasses/HTMLHeadElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLHeadElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLInputElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLInputElement {
  const HTMLInputElement = require('./official-klasses/HTMLInputElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLInputElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createLocation<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ILocation {
  const Location = require('./official-klasses/Location').default; // tslint:disable-line:variable-name
  const instance = new Location();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createNamedNodeMap<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): INamedNodeMap {
  const NamedNodeMap = require('./official-klasses/NamedNodeMap').default; // tslint:disable-line:variable-name
  const instance = new NamedNodeMap();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createNode<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): INode {
  const Node = require('./official-klasses/Node').default; // tslint:disable-line:variable-name
  const instance = new Node();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createNodeList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): INodeList {
  const NodeList = require('./official-klasses/NodeList').default; // tslint:disable-line:variable-name
  const instance = new NodeList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createShadowRoot<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IShadowRoot {
  const ShadowRoot = require('./official-klasses/ShadowRoot').default; // tslint:disable-line:variable-name
  const instance = new ShadowRoot();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createStyleSheet<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IStyleSheet {
  const StyleSheet = require('./official-klasses/StyleSheet').default; // tslint:disable-line:variable-name
  const instance = new StyleSheet();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createText<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IText {
  const Text = require('./official-klasses/Text').default; // tslint:disable-line:variable-name
  const instance = new Text();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSuperDocument<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperDocument {
  const SuperDocument = require('./super-klasses/SuperDocument').default; // tslint:disable-line:variable-name
  const instance = new SuperDocument();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSuperElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperElement {
  const SuperElement = require('./super-klasses/SuperElement').default; // tslint:disable-line:variable-name
  const instance = new SuperElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSuperNode<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperNode {
  const SuperNode = require('./super-klasses/SuperNode').default; // tslint:disable-line:variable-name
  const instance = new SuperNode();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSuperNodeList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperNodeList {
  const SuperNodeList = require('./super-klasses/SuperNodeList').default; // tslint:disable-line:variable-name
  const instance = new SuperNodeList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSuperHTMLCollection<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperHTMLCollection {
  const SuperHTMLCollection = require('./super-klasses/SuperHTMLCollection').default; // tslint:disable-line:variable-name
  const instance = new SuperHTMLCollection();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSuperText<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperText {
  const SuperText = require('./super-klasses/SuperText').default; // tslint:disable-line:variable-name
  const instance = new SuperText();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSuperCharacterData<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperCharacterData {
  const SuperCharacterData = require('./super-klasses/SuperCharacterData').default; // tslint:disable-line:variable-name
  const instance = new SuperCharacterData();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSuperHTMLElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperHTMLElement {
  const SuperHTMLElement = require('./super-klasses/SuperHTMLElement').default; // tslint:disable-line:variable-name
  const instance = new SuperHTMLElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSuperStyleSheet<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperStyleSheet {
  const SuperStyleSheet = require('./super-klasses/SuperStyleSheet').default; // tslint:disable-line:variable-name
  const instance = new SuperStyleSheet();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
