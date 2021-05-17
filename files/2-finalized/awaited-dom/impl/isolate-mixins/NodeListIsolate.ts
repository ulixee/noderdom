import StateMachine from '../../base/StateMachine';
import { INodeListIsolate } from '../../base/interfaces/isolate';
import { ISuperNode } from '../../base/interfaces/super';
import NodeListIsolateBase, { INodeListIsolateProperties } from '../../base/isolate-mixins/NodeListIsolate';
import { createSuperNode } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INodeListIsolate, INodeListIsolateProperties>();

export default class NodeListIsolate extends NodeListIsolateBase implements INodeListIsolate {
  public item(index: number): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addMethod(this, 'item', index), awaitedOptions);
  }
}
