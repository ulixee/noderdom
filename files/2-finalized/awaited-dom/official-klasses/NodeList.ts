import StateMachine from '../../awaited-base/StateMachine';
import { INodeList } from '../../awaited-base/interfaces/official';
import { NodeListGenerator, INodeListProperties } from '../../awaited-base/official-klasses/NodeList';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INodeList, INodeListProperties>();
const NodeListBaseClass = NodeListGenerator();

export default class NodeList extends NodeListBaseClass implements INodeList {}
