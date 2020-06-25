import { ICharacterDataIsolate } from '../../base/interfaces/isolate';
import CharacterDataIsolateBase, { ICharacterDataIsolateProperties } from '../../base/isolate-mixins/CharacterDataIsolate';
export declare const getState: <C = ICharacterDataIsolate, P = ICharacterDataIsolateProperties>(instance: C) => P, setState: <P = ICharacterDataIsolateProperties>(instance: ICharacterDataIsolate, properties: P) => void;
export default class CharacterDataIsolate extends CharacterDataIsolateBase implements ICharacterDataIsolate {
}
