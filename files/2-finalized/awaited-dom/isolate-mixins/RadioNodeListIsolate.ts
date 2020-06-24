import StateMachine from '../../awaited-base/StateMachine';
import { IRadioNodeListIsolate } from '../../awaited-base/interfaces/isolate';
import RadioNodeListIsolateBase, { IRadioNodeListIsolateProperties } from '../../awaited-base/isolate-mixins/RadioNodeListIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IRadioNodeListIsolate, IRadioNodeListIsolateProperties>();

export default class RadioNodeListIsolate extends RadioNodeListIsolateBase implements IRadioNodeListIsolate {}
