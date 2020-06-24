import StateMachine from '../../awaited-base/StateMachine';
import { ISuperNodeList, ISuperNode } from '../../awaited-base/interfaces/super';
import { SuperNodeListGenerator, ISuperNodeListProperties } from '../../awaited-base/super-klasses/SuperNodeList';
import { createSuperNode } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperNodeList, ISuperNodeListProperties>();
const SuperNodeListBaseClass = SuperNodeListGenerator();

export default class SuperNodeList extends SuperNodeListBaseClass implements ISuperNodeList {
  public item(index: number): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addMethod('item', index), awaitedOptions);
  }
}
