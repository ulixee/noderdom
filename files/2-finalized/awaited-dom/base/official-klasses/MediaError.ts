import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IMediaError } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IMediaError, IMediaErrorProperties>();
export const awaitedHandler = new AwaitedHandler<IMediaError>('MediaError', getState, setState);

export function MediaErrorGenerator() {
  return class MediaError implements IMediaError {
    public static readonly MEDIA_ERR_ABORTED: number = 1;
    public static readonly MEDIA_ERR_DECODE: number = 3;
    public static readonly MEDIA_ERR_NETWORK: number = 2;
    public static readonly MEDIA_ERR_SRC_NOT_SUPPORTED: number = 4;

    public readonly MEDIA_ERR_ABORTED: number = 1;
    public readonly MEDIA_ERR_DECODE: number = 3;
    public readonly MEDIA_ERR_NETWORK: number = 2;
    public readonly MEDIA_ERR_SRC_NOT_SUPPORTED: number = 4;
    constructor() {
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, MediaErrorPropertyKeys, MediaErrorConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IMediaErrorProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const MediaErrorPropertyKeys = [];

export const MediaErrorConstantKeys = ['MEDIA_ERR_ABORTED', 'MEDIA_ERR_DECODE', 'MEDIA_ERR_NETWORK', 'MEDIA_ERR_SRC_NOT_SUPPORTED'];
