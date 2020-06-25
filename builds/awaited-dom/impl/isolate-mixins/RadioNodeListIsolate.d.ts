import { IRadioNodeListIsolate } from '../../base/interfaces/isolate';
import RadioNodeListIsolateBase, { IRadioNodeListIsolateProperties } from '../../base/isolate-mixins/RadioNodeListIsolate';
export declare const getState: <C = IRadioNodeListIsolate, P = IRadioNodeListIsolateProperties>(instance: C) => P, setState: <P = IRadioNodeListIsolateProperties>(instance: IRadioNodeListIsolate, properties: P) => void;
export default class RadioNodeListIsolate extends RadioNodeListIsolateBase implements IRadioNodeListIsolate {
}
