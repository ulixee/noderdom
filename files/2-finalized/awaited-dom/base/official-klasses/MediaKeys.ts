import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IMediaKeys } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IMediaKeys, IMediaKeysProperties>();
export const awaitedHandler = new AwaitedHandler<IMediaKeys>('MediaKeys', getState, setState);

export function MediaKeysGenerator() {
  return class MediaKeys implements IMediaKeys {
    constructor() {
      initializeConstantsAndProperties<MediaKeys>(this, MediaKeysConstantKeys, MediaKeysPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IMediaKeysProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const MediaKeysPropertyKeys = [];

export const MediaKeysConstantKeys = [];
