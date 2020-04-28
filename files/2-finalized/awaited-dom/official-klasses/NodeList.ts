import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { INodeList, INode } from '../../awaited-base/interfaces/official';
import { NodeListGenerator, initialize, INodeListProperties } from '../../awaited-base/official-klasses/NodeList';
import { createNode } from './Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INodeList, INodeListProperties>();
const NodeListBase = NodeListGenerator();

export default class NodeList extends NodeListBase implements INodeList {
  constructor() {
    super();
    initialize(NodeList, this);
  }

  // methods

  public item(index: number): INode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createNode(awaitedPath.addMethod('item', [index]), awaitedOptions);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createNodeList(awaitedPath: AwaitedPath, awaitedOptions: any): NodeList {
  const instance = new NodeList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
