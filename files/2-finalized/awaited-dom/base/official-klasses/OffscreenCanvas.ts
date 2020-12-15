import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IOffscreenCanvas } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IOffscreenCanvas, IOffscreenCanvasProperties>();
export const awaitedHandler = new AwaitedHandler<IOffscreenCanvas>('OffscreenCanvas', getState, setState);

export function OffscreenCanvasGenerator() {
  return class OffscreenCanvas implements IOffscreenCanvas {
    constructor(_width: number, _height: number) {
      initializeConstantsAndProperties<OffscreenCanvas>(this, OffscreenCanvasConstantKeys, OffscreenCanvasPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IOffscreenCanvasProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const OffscreenCanvasPropertyKeys = [];

export const OffscreenCanvasConstantKeys = [];
