import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IOffscreenCanvas, IImageEncodeOptions, IBlob, IImageBitmap } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IOffscreenCanvas, IOffscreenCanvasProperties>();
export const awaitedHandler = new AwaitedHandler<IOffscreenCanvas>('OffscreenCanvas', getState, setState);

export function OffscreenCanvasGenerator() {
  return class OffscreenCanvas implements IOffscreenCanvas {
    constructor(_width: number, _height: number) {
    }

    // properties

    public get height(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'height', false);
    }

    public get width(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'width', false);
    }

    // methods

    public convertToBlob(options?: IImageEncodeOptions): Promise<IBlob> {
      return awaitedHandler.runMethod<IBlob>(this, 'convertToBlob', [options]);
    }

    public transferToImageBitmap(): IImageBitmap {
      throw new Error('OffscreenCanvas.transferToImageBitmap not implemented');
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, OffscreenCanvasPropertyKeys, OffscreenCanvasConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IOffscreenCanvasProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly height?: Promise<number>;
  readonly width?: Promise<number>;
}

export const OffscreenCanvasPropertyKeys = ['height', 'width'];

export const OffscreenCanvasConstantKeys = [];
