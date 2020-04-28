import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { ISuperNodeList } from '../../awaited-base/interfaces/super';
import { INode } from '../../awaited-base/interfaces/official';
import { SuperNodeListGenerator, initialize, ISuperNodeListProperties } from '../../awaited-base/super-klasses/SuperNodeList';
import { createNode } from '../official-klasses/Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperNodeList, ISuperNodeListProperties>();
const SuperNodeListBase = SuperNodeListGenerator();

export default class SuperNodeList extends SuperNodeListBase implements ISuperNodeList {
  constructor() {
    super();
    initialize(SuperNodeList, this);
  }

  // methods

  public item(index: number): INode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createNode(awaitedPath.addMethod('item', [index]), awaitedOptions);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createSuperNodeList(awaitedPath: AwaitedPath, awaitedOptions: any): SuperNodeList {
  const instance = new SuperNodeList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
