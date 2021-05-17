import { ICharacterDataIsolate } from '../../base/interfaces/isolate';
import CharacterDataIsolateBase, { ICharacterDataIsolateProperties } from '../../base/isolate-mixins/CharacterDataIsolate';
export declare const getState: (instance: ICharacterDataIsolate) => ICharacterDataIsolateProperties, setState: (instance: ICharacterDataIsolate, properties: Partial<ICharacterDataIsolateProperties>) => void;
export default class CharacterDataIsolate extends CharacterDataIsolateBase implements ICharacterDataIsolate {
}
