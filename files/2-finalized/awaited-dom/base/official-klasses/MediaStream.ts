import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IMediaStream } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IMediaStream, IMediaStreamProperties>();
export const awaitedHandler = new AwaitedHandler<IMediaStream>('MediaStream', getState, setState);

export function MediaStreamGenerator() {
  return class MediaStream implements IMediaStream {
    constructor(_stream?: IMediaStream) {
    }

    // properties

    public get active(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'active', false);
    }

    public get id(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'id', false);
    }

    // methods

    public clone(): IMediaStream {
      throw new Error('MediaStream.clone not implemented');
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, MediaStreamPropertyKeys, MediaStreamConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IMediaStreamProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly active?: Promise<boolean>;
  readonly id?: Promise<string>;
}

export const MediaStreamPropertyKeys = ['active', 'id'];

export const MediaStreamConstantKeys = [];
