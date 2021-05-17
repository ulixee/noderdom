import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IDOMRectReadOnly } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMRectReadOnly, IDOMRectReadOnlyProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMRectReadOnly>('DOMRectReadOnly', getState, setState);

export function DOMRectReadOnlyGenerator() {
  return class DOMRectReadOnly implements IDOMRectReadOnly {
    constructor(_x?: number, _y?: number, _width?: number, _height?: number) {
    }

    // properties

    public get bottom(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'bottom', false);
    }

    public get height(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'height', false);
    }

    public get left(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'left', false);
    }

    public get right(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'right', false);
    }

    public get top(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'top', false);
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

    // methods

    public toJSON(): Promise<any> {
      return awaitedHandler.runMethod<any>(this, 'toJSON', []);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, DOMRectReadOnlyPropertyKeys, DOMRectReadOnlyConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMRectReadOnlyProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly bottom?: Promise<number>;
  readonly height?: Promise<number>;
  readonly left?: Promise<number>;
  readonly right?: Promise<number>;
  readonly top?: Promise<number>;
  readonly width?: Promise<number>;
  readonly x?: Promise<number>;
  readonly y?: Promise<number>;
}

export const DOMRectReadOnlyPropertyKeys = ['bottom', 'height', 'left', 'right', 'top', 'width', 'x', 'y'];

export const DOMRectReadOnlyConstantKeys = [];
