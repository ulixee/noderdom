import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IImageBitmap } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IImageBitmap, IImageBitmapProperties>();
export const awaitedHandler = new AwaitedHandler<IImageBitmap>('ImageBitmap', getState, setState);

export function ImageBitmapGenerator() {
  return class ImageBitmap implements IImageBitmap {
    constructor() {
      initializeConstantsAndProperties<ImageBitmap>(this, ImageBitmapConstantKeys, ImageBitmapPropertyKeys);
    }

    // properties

    public get height(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'height', false);
    }

    public get width(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'width', false);
    }

    // methods

    public close(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'close', []);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IImageBitmapProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly height?: Promise<number>;
  readonly width?: Promise<number>;
}

export const ImageBitmapPropertyKeys = ['height', 'width'];

export const ImageBitmapConstantKeys = [];
