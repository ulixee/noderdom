import StateMachine from '../../base/StateMachine';
import { IRadioNodeList } from '../../base/interfaces/official';
import { RadioNodeListGenerator, IRadioNodeListProperties } from '../../base/official-klasses/RadioNodeList';
import NodeList from './NodeList';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IRadioNodeList, IRadioNodeListProperties>();
const RadioNodeListBaseClass = RadioNodeListGenerator(NodeList);

export default class RadioNodeList extends RadioNodeListBaseClass implements IRadioNodeList {
  constructor() {
    super();
  }
}
