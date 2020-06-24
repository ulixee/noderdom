import StateMachine from '../../awaited-base/StateMachine';
import { IRadioNodeList } from '../../awaited-base/interfaces/official';
import { RadioNodeListGenerator, IRadioNodeListProperties } from '../../awaited-base/official-klasses/RadioNodeList';
import NodeList from './NodeList';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IRadioNodeList, IRadioNodeListProperties>();
const RadioNodeListBaseClass = RadioNodeListGenerator(NodeList);

export default class RadioNodeList extends RadioNodeListBaseClass implements IRadioNodeList {
  constructor() {
    super();
  }
}
