import StateMachine from '../../base/StateMachine';
import { IMediaKeys } from '../../base/interfaces/official';
import { MediaKeysGenerator, IMediaKeysProperties } from '../../base/official-klasses/MediaKeys';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IMediaKeys, IMediaKeysProperties>();
const MediaKeysBaseClass = MediaKeysGenerator();

export default class MediaKeys extends MediaKeysBaseClass implements IMediaKeys {}
