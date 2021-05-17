import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IDOMRect, IDOMRectReadOnly } from '../interfaces/official';
import { IDOMRectReadOnlyProperties, DOMRectReadOnlyPropertyKeys, DOMRectReadOnlyConstantKeys } from './DOMRectReadOnly';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMRect, IDOMRectProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMRect>('DOMRect', getState, setState);

export function DOMRectGenerator(DOMRectReadOnly: Constructable<IDOMRectReadOnly>) {
  return class DOMRect extends DOMRectReadOnly implements IDOMRect {
    constructor(_x?: number, _y?: number, _width?: number, _height?: number) {
      super(_x, _y, _width, _height);
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

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, DOMRectPropertyKeys, DOMRectConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMRectProperties extends IDOMRectReadOnlyProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly height?: Promise<number>;
  readonly width?: Promise<number>;
  readonly x?: Promise<number>;
  readonly y?: Promise<number>;
}

export const DOMRectPropertyKeys = [...DOMRectReadOnlyPropertyKeys, 'height', 'width', 'x', 'y'];

export const DOMRectConstantKeys = [...DOMRectReadOnlyConstantKeys];
