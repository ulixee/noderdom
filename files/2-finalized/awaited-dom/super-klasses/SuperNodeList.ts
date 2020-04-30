import StateMachine from '../../awaited-base/StateMachine';
import { ISuperNodeList } from '../../awaited-base/interfaces/super';
import { SuperNodeListGenerator, initialize, ISuperNodeListProperties } from '../../awaited-base/super-klasses/SuperNodeList';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperNodeList, ISuperNodeListProperties>();
const SuperNodeListBase = SuperNodeListGenerator();

export default class SuperNodeList extends SuperNodeListBase implements ISuperNodeList {
  constructor() {
    super();
    initialize(SuperNodeList, this);
  }
}
