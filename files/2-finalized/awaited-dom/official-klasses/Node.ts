import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { INode, INodeList, IDocument, IElement } from '../../awaited-base/interfaces/official';
import { NodeGenerator, initialize, INodeProperties } from '../../awaited-base/official-klasses/Node';
import { createNodeList } from './NodeList';
import { createElement } from './Element';
import createDocument from '../createDocumentForNode';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INode, INodeProperties>();
const NodeBase = NodeGenerator();

export default class Node extends NodeBase implements INode {
  constructor() {
    super();
    initialize(Node, this);
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

export function createNode<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): INode {
  const instance = new Node();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
