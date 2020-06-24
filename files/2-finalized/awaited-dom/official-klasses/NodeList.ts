import StateMachine from '../../awaited-base/StateMachine';
import { INodeList } from '../../awaited-base/interfaces/official';
import { ISuperNode } from '../../awaited-base/interfaces/super';
import { NodeListGenerator, INodeListProperties } from '../../awaited-base/official-klasses/NodeList';
import { createSuperNode } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INodeList, INodeListProperties>();
const NodeListBaseClass = NodeListGenerator();

export default class NodeList extends NodeListBaseClass implements INodeList {
  public item(index: number): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addMethod('item', index), awaitedOptions);
  }
}
