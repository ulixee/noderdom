import { IRadioNodeListIsolate } from '../../base/interfaces/isolate';
import RadioNodeListIsolateBase, { IRadioNodeListIsolateProperties } from '../../base/isolate-mixins/RadioNodeListIsolate';
export declare const getState: (instance: IRadioNodeListIsolate) => IRadioNodeListIsolateProperties, setState: (instance: IRadioNodeListIsolate, properties: Partial<IRadioNodeListIsolateProperties>) => void;
export default class RadioNodeListIsolate extends RadioNodeListIsolateBase implements IRadioNodeListIsolate {
}
