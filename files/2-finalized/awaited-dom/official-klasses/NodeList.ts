import StateMachine from '../../awaited-base/StateMachine';
import { INodeList } from '../../awaited-base/interfaces/official';
import { NodeListGenerator, initialize, INodeListProperties } from '../../awaited-base/official-klasses/NodeList';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INodeList, INodeListProperties>();
const NodeListBase = NodeListGenerator();

export default class NodeList extends NodeListBase implements INodeList {
  constructor() {
    super();
    initialize(NodeList, this);
  }
}
