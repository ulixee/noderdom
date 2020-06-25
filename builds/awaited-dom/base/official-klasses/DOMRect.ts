import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IDOMRect } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMRect, IDOMRectProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMRect>('DOMRect', getState, setState);

export function DOMRectGenerator() {
  return class DOMRect implements IDOMRect {
    constructor(_x?: number, _y?: number, _width?: number, _height?: number) {
      initializeConstantsAndProperties<DOMRect>(this, DOMRectConstantKeys, DOMRectPropertyKeys);
    }

    // properties

    public get height(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'height', false);
    }

    public get width(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'width', false);
    }

    public get x(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'x', false);
    }

    public get y(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'y', false);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMRectProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly height?: Promise<number>;
  readonly width?: Promise<number>;
  readonly x?: Promise<number>;
  readonly y?: Promise<number>;
}

export const DOMRectPropertyKeys = ['height', 'width', 'x', 'y'];

export const DOMRectConstantKeys = [];
