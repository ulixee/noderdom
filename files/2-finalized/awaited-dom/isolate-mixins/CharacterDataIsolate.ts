import StateMachine from '../../awaited-base/StateMachine';
import { ICharacterDataIsolate } from '../../awaited-base/interfaces/isolate';
import CharacterDataIsolateBase, { ICharacterDataIsolateProperties } from '../../awaited-base/isolate-mixins/CharacterDataIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ICharacterDataIsolate, ICharacterDataIsolateProperties>();

export default class CharacterDataIsolate extends CharacterDataIsolateBase implements ICharacterDataIsolate {}
