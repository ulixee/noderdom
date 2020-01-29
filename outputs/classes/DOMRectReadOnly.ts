import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IDOMRectInit, IDOMRectReadOnly } from '../interfaces';

export default class DOMRectReadOnly implements IDOMRectReadOnly {
  constructor(x?: number, y?: number, width?: number, height?: number) {
    InternalHandler.construct(this, [x, y, width, height]);
  }

  // properties

  public get bottom(): number {
    return InternalHandler.get<IDOMRectReadOnly, number>(this, 'bottom');
  }

  public get height(): number {
    return InternalHandler.get<IDOMRectReadOnly, number>(this, 'height');
  }

  public get left(): number {
    return InternalHandler.get<IDOMRectReadOnly, number>(this, 'left');
  }

  public get right(): number {
    return InternalHandler.get<IDOMRectReadOnly, number>(this, 'right');
  }

  public get top(): number {
    return InternalHandler.get<IDOMRectReadOnly, number>(this, 'top');
  }

  public get width(): number {
    return InternalHandler.get<IDOMRectReadOnly, number>(this, 'width');
  }

  public get x(): number {
    return InternalHandler.get<IDOMRectReadOnly, number>(this, 'x');
  }

  public get y(): number {
    return InternalHandler.get<IDOMRectReadOnly, number>(this, 'y');
  }

  // methods

  public fromRect(other?: IDOMRectInit): IDOMRectReadOnly {
    return InternalHandler.run<IDOMRectReadOnly, IDOMRectReadOnly>(this, 'fromRect', [other]);
  }

  public toJSON(): any {
    InternalHandler.run<IDOMRectReadOnly, any>(this, 'toJSON', []);
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IDOMRectReadOnlyProperties {
  bottom?: number;
  height?: number;
  left?: number;
  right?: number;
  top?: number;
  width?: number;
  x?: number;
  y?: number;
}

export interface IDOMRectReadOnlyReadonlyProperties {
  bottom?: number;
  height?: number;
  left?: number;
  right?: number;
  top?: number;
  width?: number;
  x?: number;
  y?: number;
}

export const { getState, setState, setReadonlyOfDOMRectReadOnly } = InternalStateGenerator<
  IDOMRectReadOnly,
  IDOMRectReadOnlyProperties,
  IDOMRectReadOnlyReadonlyProperties
>('DOMRectReadOnly');
