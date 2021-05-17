import StateMachine from '../../base/StateMachine';
import { IRadioNodeListIsolate } from '../../base/interfaces/isolate';
import RadioNodeListIsolateBase, { IRadioNodeListIsolateProperties } from '../../base/isolate-mixins/RadioNodeListIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IRadioNodeListIsolate, IRadioNodeListIsolateProperties>();

export default class RadioNodeListIsolate extends RadioNodeListIsolateBase implements IRadioNodeListIsolate {}
