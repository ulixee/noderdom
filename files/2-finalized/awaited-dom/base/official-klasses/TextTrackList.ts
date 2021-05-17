import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ITextTrackList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ITextTrackList, ITextTrackListProperties>();
export const awaitedHandler = new AwaitedHandler<ITextTrackList>('TextTrackList', getState, setState);

export function TextTrackListGenerator() {
  return class TextTrackList implements ITextTrackList {
    constructor() {
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, TextTrackListPropertyKeys, TextTrackListConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ITextTrackListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const TextTrackListPropertyKeys = [];

export const TextTrackListConstantKeys = [];
