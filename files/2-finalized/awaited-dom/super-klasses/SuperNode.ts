import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { ISuperNode } from '../../awaited-base/interfaces/super';
import { INodeList, INode, IDocument, IElement } from '../../awaited-base/interfaces/official';
import { SuperNodeGenerator, initialize, ISuperNodeProperties } from '../../awaited-base/super-klasses/SuperNode';
import { createNodeList } from '../official-klasses/NodeList';
import { createNode } from '../official-klasses/Node';
import { createDocument } from '../official-klasses/Document';
import { createElement } from '../official-klasses/Element';
import AttrIsolate from '../isolate-mixins/AttrIsolate';
import CharacterDataIsolate from '../isolate-mixins/CharacterDataIsolate';
import DocumentIsolate from '../isolate-mixins/DocumentIsolate';
import DocumentTypeIsolate from '../isolate-mixins/DocumentTypeIsolate';
import ElementIsolate from '../isolate-mixins/ElementIsolate';
import HTMLElementIsolate from '../isolate-mixins/HTMLElementIsolate';
import HTMLHeadElementIsolate from '../isolate-mixins/HTMLHeadElementIsolate';
import TextIsolate from '../isolate-mixins/TextIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperNode, ISuperNodeProperties>();
const SuperNodeBase = SuperNodeGenerator(AttrIsolate, CharacterDataIsolate, DocumentIsolate, DocumentTypeIsolate, ElementIsolate, HTMLElementIsolate, HTMLHeadElementIsolate, TextIsolate);

export default class SuperNode extends SuperNodeBase implements ISuperNode {
  constructor() {
    super();
    initialize(SuperNode, this);
  }

  // properties

  public get childNodes(): INodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createNodeList(awaitedPath.addProperty('childNodes'), awaitedOptions);
  }

  public get firstChild(): INode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createNode(awaitedPath.addProperty('firstChild'), awaitedOptions);
  }

  public get lastChild(): INode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createNode(awaitedPath.addProperty('lastChild'), awaitedOptions);
  }

  public get nextSibling(): INode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createNode(awaitedPath.addProperty('nextSibling'), awaitedOptions);
  }

  public get ownerDocument(): IDocument {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDocument(awaitedPath.addProperty('ownerDocument'), awaitedOptions);
  }

  public get parentElement(): IElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createElement(awaitedPath.addProperty('parentElement'), awaitedOptions);
  }

  public get parentNode(): INode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createNode(awaitedPath.addProperty('parentNode'), awaitedOptions);
  }

  public get previousSibling(): INode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createNode(awaitedPath.addProperty('previousSibling'), awaitedOptions);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createSuperNode<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperNode {
  const instance = new SuperNode();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}