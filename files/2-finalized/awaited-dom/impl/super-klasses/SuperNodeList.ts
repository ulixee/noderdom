import StateMachine from '../../base/StateMachine';
import { ISuperNodeList, ISuperNode } from '../../base/interfaces/super';
import { SuperNodeListGenerator, ISuperNodeListProperties } from '../../base/super-klasses/SuperNodeList';
import { createSuperNode } from '../create';
import NodeListIsolate from '../isolate-mixins/NodeListIsolate';
import RadioNodeListIsolate from '../isolate-mixins/RadioNodeListIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperNodeList, ISuperNodeListProperties>();
const SuperNodeListBaseClass = SuperNodeListGenerator(NodeListIsolate, RadioNodeListIsolate);

export default class SuperNodeList extends SuperNodeListBaseClass implements ISuperNodeList {
  constructor() {
    super();
  }

  // methods

  public item(index: number): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addMethod('item', index), awaitedOptions);
  }
}
