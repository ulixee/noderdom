import StateMachine from '../../awaited-base/StateMachine';
import { INodeListIsolate } from '../../awaited-base/interfaces/isolate';
import { ISuperNode } from '../../awaited-base/interfaces/super';
import NodeListIsolateBase, { INodeListIsolateProperties } from '../../awaited-base/isolate-mixins/NodeListIsolate';
import { createSuperNode } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INodeListIsolate, INodeListIsolateProperties>();

export default class NodeListIsolate extends NodeListIsolateBase implements INodeListIsolate {
  public item(index: number): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addMethod('item', index), awaitedOptions);
  }
}
