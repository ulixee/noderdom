import AwaitedPath from '../base/AwaitedPath';
import StateMachine from '../base/StateMachine';
import { IAttr, IBlob, ICharacterData, IDOMImplementation, IDOMRect, IDOMRectList, IDOMTokenList, IDocument, IDocumentType, IElement, IFeaturePolicy, IHTMLButtonElement, IHTMLCollection, IHTMLCollectionBase, IHTMLElement, IHTMLFieldSetElement, IHTMLFormElement, IHTMLHeadElement, IHTMLInputElement, IHTMLLabelElement, IHTMLOptGroupElement, IHTMLOptionElement, IHTMLOptionsCollection, IHTMLSelectElement, IHTMLTextAreaElement, IHeaders, ILocation, INamedNodeMap, INode, INodeList, IRadioNodeList, IRequest, IResponse, IShadowRoot, IStorage, IStyleSheet, IText, IValidityState, IXPathExpression, IXPathResult } from '../base/interfaces/official';
import { ISuperDocument, ISuperElement, ISuperNode, ISuperNodeList, ISuperHTMLCollection, ISuperText, ISuperHTMLElement, ISuperStyleSheet } from '../base/interfaces/super';

export const { setState } = StateMachine<any, any>();

export function createAttr<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IAttr {
  const Attr = require('./official-klasses/Attr').default; // tslint:disable-line:variable-name
  const instance = new Attr();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createBlob<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IBlob {
  const Blob = require('./official-klasses/Blob').default; // tslint:disable-line:variable-name
  const instance = new Blob();
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

export function createHTMLButtonElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLButtonElement {
  const HTMLButtonElement = require('./official-klasses/HTMLButtonElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLButtonElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLCollection<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLCollection {
  const HTMLCollection = require('./official-klasses/HTMLCollection').default; // tslint:disable-line:variable-name
  const instance = new HTMLCollection();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLCollectionBase<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLCollectionBase {
  const HTMLCollectionBase = require('./official-klasses/HTMLCollectionBase').default; // tslint:disable-line:variable-name
  const instance = new HTMLCollectionBase();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLElement {
  const HTMLElement = require('./official-klasses/HTMLElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLFieldSetElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLFieldSetElement {
  const HTMLFieldSetElement = require('./official-klasses/HTMLFieldSetElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLFieldSetElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLFormElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLFormElement {
  const HTMLFormElement = require('./official-klasses/HTMLFormElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLFormElement();
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

export function createHTMLLabelElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLLabelElement {
  const HTMLLabelElement = require('./official-klasses/HTMLLabelElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLLabelElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLOptGroupElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLOptGroupElement {
  const HTMLOptGroupElement = require('./official-klasses/HTMLOptGroupElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLOptGroupElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLOptionElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLOptionElement {
  const HTMLOptionElement = require('./official-klasses/HTMLOptionElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLOptionElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLOptionsCollection<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLOptionsCollection {
  const HTMLOptionsCollection = require('./official-klasses/HTMLOptionsCollection').default; // tslint:disable-line:variable-name
  const instance = new HTMLOptionsCollection();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLSelectElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLSelectElement {
  const HTMLSelectElement = require('./official-klasses/HTMLSelectElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLSelectElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLTextAreaElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLTextAreaElement {
  const HTMLTextAreaElement = require('./official-klasses/HTMLTextAreaElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLTextAreaElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHeaders<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHeaders {
  const Headers = require('./official-klasses/Headers').default; // tslint:disable-line:variable-name
  const instance = new Headers();
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

export function createRadioNodeList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IRadioNodeList {
  const RadioNodeList = require('./official-klasses/RadioNodeList').default; // tslint:disable-line:variable-name
  const instance = new RadioNodeList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createRequest<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IRequest {
  const Request = require('./official-klasses/Request').default; // tslint:disable-line:variable-name
  const instance = new Request();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createResponse<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IResponse {
  const Response = require('./official-klasses/Response').default; // tslint:disable-line:variable-name
  const instance = new Response();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createShadowRoot<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IShadowRoot {
  const ShadowRoot = require('./official-klasses/ShadowRoot').default; // tslint:disable-line:variable-name
  const instance = new ShadowRoot();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createStorage<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IStorage {
  const Storage = require('./official-klasses/Storage').default; // tslint:disable-line:variable-name
  const instance = new Storage();
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

export function createValidityState<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IValidityState {
  const ValidityState = require('./official-klasses/ValidityState').default; // tslint:disable-line:variable-name
  const instance = new ValidityState();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createXPathExpression<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IXPathExpression {
  const XPathExpression = require('./official-klasses/XPathExpression').default; // tslint:disable-line:variable-name
  const instance = new XPathExpression();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createXPathResult<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IXPathResult {
  const XPathResult = require('./official-klasses/XPathResult').default; // tslint:disable-line:variable-name
  const instance = new XPathResult();
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
