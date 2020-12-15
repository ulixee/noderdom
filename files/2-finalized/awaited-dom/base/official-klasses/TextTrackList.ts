import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ITextTrackList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ITextTrackList, ITextTrackListProperties>();
export const awaitedHandler = new AwaitedHandler<ITextTrackList>('TextTrackList', getState, setState);

export function TextTrackListGenerator() {
  return class TextTrackList implements ITextTrackList {
    constructor() {
      initializeConstantsAndProperties<TextTrackList>(this, TextTrackListConstantKeys, TextTrackListPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ITextTrackListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const TextTrackListPropertyKeys = [];

export const TextTrackListConstantKeys = [];
