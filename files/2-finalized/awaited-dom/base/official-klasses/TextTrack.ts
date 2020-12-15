import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ITextTrack } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ITextTrack, ITextTrackProperties>();
export const awaitedHandler = new AwaitedHandler<ITextTrack>('TextTrack', getState, setState);

export function TextTrackGenerator() {
  return class TextTrack implements ITextTrack {
    constructor() {
      initializeConstantsAndProperties<TextTrack>(this, TextTrackConstantKeys, TextTrackPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ITextTrackProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const TextTrackPropertyKeys = [];

export const TextTrackConstantKeys = [];
