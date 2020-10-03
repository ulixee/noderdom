import StateMachine from '../../base/StateMachine';
import { ICharacterDataIsolate } from '../../base/interfaces/isolate';
import CharacterDataIsolateBase, { ICharacterDataIsolateProperties } from '../../base/isolate-mixins/CharacterDataIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ICharacterDataIsolate, ICharacterDataIsolateProperties>();

export default class CharacterDataIsolate extends CharacterDataIsolateBase implements ICharacterDataIsolate {}
