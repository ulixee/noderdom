import StateMachine from '../../base/StateMachine';
import { INodeList } from '../../base/interfaces/official';
import { ISuperNode } from '../../base/interfaces/super';
import { NodeListGenerator, INodeListProperties } from '../../base/official-klasses/NodeList';
import { createSuperNode } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INodeList, INodeListProperties>();
const NodeListBaseClass = NodeListGenerator();

export default class NodeList extends NodeListBaseClass implements INodeList {
  public item(index: number): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addMethod(this, 'item', index), awaitedOptions);
  }
}
