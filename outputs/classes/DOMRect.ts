import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IDOMRectReadOnly, IDOMRectInit, IDOMRect } from '../interfaces';
import { IDOMRectReadOnlyProperties, IDOMRectReadOnlyReadonlyProperties } from './DOMRectReadOnly';

// tslint:disable-next-line:variable-name
export function DOMRectGenerator(DOMRectReadOnly: Constructable<IDOMRectReadOnly>) {
  return class DOMRect extends DOMRectReadOnly implements IDOMRect {
    constructor(x?: number, y?: number, width?: number, height?: number) {
      super();
      InternalHandler.construct(this, [x, y, width, height]);
    }

    // properties

    public get height(): number {
      return InternalHandler.get<IDOMRect, number>(this, 'height');
    }

    public set height(value: number) {
      InternalHandler.set<IDOMRect, number>(this, 'height', value);
    }

    public get width(): number {
      return InternalHandler.get<IDOMRect, number>(this, 'width');
    }

    public set width(value: number) {
      InternalHandler.set<IDOMRect, number>(this, 'width', value);
    }

    public get x(): number {
      return InternalHandler.get<IDOMRect, number>(this, 'x');
    }

    public set x(value: number) {
      InternalHandler.set<IDOMRect, number>(this, 'x', value);
    }

    public get y(): number {
      return InternalHandler.get<IDOMRect, number>(this, 'y');
    }

    public set y(value: number) {
      InternalHandler.set<IDOMRect, number>(this, 'y', value);
    }

    // methods

    public fromRect(other?: IDOMRectInit): IDOMRect {
      return InternalHandler.run<IDOMRect, IDOMRect>(this, 'fromRect', [other]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IDOMRectProperties extends IDOMRectReadOnlyProperties {
  height?: number;
  width?: number;
  x?: number;
  y?: number;
}

export interface IDOMRectReadonlyProperties extends IDOMRectReadOnlyReadonlyProperties {}

export const { getState, setState, setReadonlyOfDOMRect } = InternalStateGenerator<
  IDOMRect,
  IDOMRectProperties,
  IDOMRectReadonlyProperties
>('DOMRect');
