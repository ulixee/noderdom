import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ITextTrackCue, ITextTrack } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ITextTrackCue, ITextTrackCueProperties>();
export const awaitedHandler = new AwaitedHandler<ITextTrackCue>('TextTrackCue', getState, setState);

export function TextTrackCueGenerator() {
  return class TextTrackCue implements ITextTrackCue {
    constructor() {
      initializeConstantsAndProperties<TextTrackCue>(this, TextTrackCueConstantKeys, TextTrackCuePropertyKeys);
    }

    // properties

    public get endTime(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'endTime', false);
    }

    public get id(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'id', false);
    }

    public get pauseOnExit(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'pauseOnExit', false);
    }

    public get startTime(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'startTime', false);
    }

    public get track(): ITextTrack {
      throw new Error('TextTrackCue.track getter not implemented');
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ITextTrackCueProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly endTime?: Promise<number>;
  readonly id?: Promise<string>;
  readonly pauseOnExit?: Promise<boolean>;
  readonly startTime?: Promise<number>;
  readonly track?: ITextTrack;
}

export const TextTrackCuePropertyKeys = ['endTime', 'id', 'pauseOnExit', 'startTime', 'track'];

export const TextTrackCueConstantKeys = [];
